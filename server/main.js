const express = require('express')
const debug = require('debug')('app:server')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const compress = require('compression')
const bodyParser = require('body-parser');
const publicIp = require('public-ip');

const history = require('connect-history-api-fallback');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');

const app = express();

const { User, Bug } = require('../db/database');

app.enable('trust proxy');

// Apply gzip compression
app.use(compress())

// Use BodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('cookie-parser')());
app.use(require('cookie-session')({ secret: 'battlecode', resave: false, saveUninitialized: false }));


passport.use(new LocalStrategy(function(username, pass, cb){
  var hashedPass = bcrypt.hashSync(pass, 10);
  User.findOne({ where: { username: username } })
  .then(function(user, err){
    if (err) return cb(err);
    if (!user) return cb(null, false);
    if (!bcrypt.compareSync(pass, user.password)) return cb(null, false);

    return cb(null, user);
  });
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id).then(function (user) {
    cb(null, user);
  });
});

app.post("/signin", passport.authenticate('local'), (req, res) => res.send(req.user));

app.post("/signup", function(req, res, next){
  User
  .findOne({ where: { username: req.body.signupUsername } })
  .then(function(user){
    if(!user){
      User.create({
        username: req.body.signupUsername,
        password: bcrypt.hashSync(req.body.signupPassword, 10),
        name: req.body.name,
        email: req.body.email
      })
      .then(() => res.sendStatus(200))
      .catch(error => res.send(error.message.split(': ')[1]));
    } else res.send("user exists");
  })
})

app.post("/report-a-bug", function(req, res, next){
  Bug.create({
    bugName: req.body.bugName,
    bugDescription: req.body.bugDescription,
    name: req.body.name
  })
})

app.get('/signout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
})

app.get('/user', (req, res, next) => {
  res.send(req.user)
});
app.get('/failure', (req, res, next) => res.send(null));

app.use('/api', require('./routes/'));
app.use('/join', require('./routes/join.js'));


app.use(history());
// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : project.paths.client(),
    hot         : true,
    quiet       : project.compiler_quiet,
    noInfo      : project.compiler_quiet,
    lazy        : false,
    stats       : project.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(project.paths.public()))

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
//   app.use('*', function (req, res, next) {
//     const filename = path.join(compiler.outputPath, 'index.html')
//     compiler.outputFileSystem.readFile(filename, (err, result) => {
//       if (err) {
//         return next(err)
//       }
//       res.set('content-type', 'text/html')
//       res.send(result)
//       res.end()
//     })
//   })
// } else {
//   debug(
//     'Server is being run outside of live development mode, meaning it will ' +
//     'only serve the compiled application bundle in ~/dist. Generally you ' +
//     'do not need an application server for this and can instead use a web ' +
//     'server such as nginx to serve your static files. See the "deployment" ' +
//     'section in the README for more information on deployment strategies.'
//   )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(project.paths.dist()))
} else {
  app.use(express.static('dist'));
  app.use(express.static('public'));
}

const io = require('../bin/io.js')(app.listen(process.env.PORT || 3000, console.log("I'm listening on port 3000")));

app.get('*', (req, res, next) => res.sendFile(path.resolve(__dirname + '/../dist/index.html')));

module.exports = app

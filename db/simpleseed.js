//Just wipes the db and syncs up new models
require('./database').db.sync({force: true}).then(() => console.log('db dropped. RIP'));

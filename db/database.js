var Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env["DATABASE_URL"], {
  logging: false,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

const Bug = db.define('bugs', {
  bugName: {
    type: Sequelize.STRING
  },
  bugDescription: {
    type: Sequelize.TEXT
  },
  name: {
    type: Sequelize.STRING,
  }
})

const User = db.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  wins: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  losses: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 1000
  },

  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  }
})

const Question = db.define('questions', {
  name: {
    type: Sequelize.STRING,
  },
  questionText: {
    type: Sequelize.TEXT
  },
  tests: {
    type: Sequelize.TEXT
  }
})

const Fight = db.define('fights', {
  winnerDuration: {
    type: Sequelize.FLOAT,
  }
})

Fight.belongsTo(User, {as: 'winner'});
Fight.belongsTo(User, {as: 'loser'});

module.exports = {
  db,
  User,
  Question,
  Fight,
  Bug
};

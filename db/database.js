var Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/code_battle', {
  logging: false
});

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
//Relationships

// User.hasMany(Fight, {as: 'Fights'});
// Fight.belongsToMany(User, {through: 'FightHistory'});

// Fight.hasMany(Question, {as: 'Questions'});
// Question.belongsToMany(Fight, {through: })

module.exports = {
  db,
  User,
  Question,
  Fight
};

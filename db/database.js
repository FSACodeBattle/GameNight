var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/code_battle', {
  logging: false
});

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
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
  tests: {
    type: Sequelize.TEXT
  }
})

const Fight = db.define('fights', {
  number: {
    type: Sequelize.STRING,
  }
})


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
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

const Fight = db.define('fights', {
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


//Relationships

Fight.hasMany(Question);

module.exports = db;
const db = require('../database')


const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  }, {
  indexes: [{
    fields: ['email'],
    unique: true,
  }]
}
})


module.exports = User
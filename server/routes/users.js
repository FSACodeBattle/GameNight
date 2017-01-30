'use strict'

const {User} = require('../../db/database.js');

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
		User.findAll()
		.then(users => res.json(users))
		.catch(next)
	})
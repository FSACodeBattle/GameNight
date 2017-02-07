'use strict'

const {User} = require('../../db/database.js');

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
		User.findAll()
		.then(users => res.json(users))
		.catch(next)
	})
	.get('/leaderboard', (req, res, next) => {
		User.findAll({
			limit: 10,
			order: [['points', 'DESC']]
		})
		.then(users => res.json(users))
		.catch(next)
	})
'use strict'

const {User} = require('../../db/database.js');
const Fight = require('../../db/database').Fight;

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
	.get('/allMatches', (req, res, next) => {
		Fight.findAll({
			limit:10,
			order: [['createdAt', 'DESC']],
			include: [{ all: true }]
		})
		.then(matches => res.json(matches))
		.catch(next)
	})
	.get('/matches/:userId', (req, res, next) => {
		Fight.findAll({
			where: {$or: [{winnerId: userId}, {loserId: userId}]},
			limit: 20,
			order: [['createdAt', 'DESC']],
			include: [{ all: true }]
		})
		.then(matches => res.json(matches))
		.catch(next)
	})

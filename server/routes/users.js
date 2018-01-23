'use strict'

const db = require('../../db/database');
const User = db.User;
const Fight = db.Fight;

module.exports = require('express').Router()
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
		const userId = +req.params.userId;
		Fight.findAll({
			where: {$or: [{winnerId: userId}, {loserId: userId}]},
			limit: 20,
			order: [['createdAt', 'DESC']],
			include: [{ all: true }]
		})
		.then(matches => res.send(matches))
		.catch(next)
	})
	.get('/user/:username', (req, res, next) => {
		User.findOne({where: {username: req.params.username}})
		.then(user => res.send(user))
		.catch(next)
	})
	.get('/', (req, res, next) => {
		User.findAll()
		.then(users => res.json(users))
		.catch(next)
	})

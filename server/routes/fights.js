'use strict'

const {Fight} = require('../../db/database.js');

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
		Fight.findAll()
		.then(fights => res.json(fights))
		.catch(next)
	})
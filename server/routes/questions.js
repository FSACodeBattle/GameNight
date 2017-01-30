'use strict'

const {Question} = require('../../db/database.js');

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
		Question.findAll()
		.then(questions => res.json(questions))
		.catch(next)
		// res.json('hello'));
	})
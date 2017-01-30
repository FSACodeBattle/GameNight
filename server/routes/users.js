'use strict'


const models = require('../../db/models');
const User = models.User;

module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
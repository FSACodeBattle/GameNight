const { db } = require('./database.js')

const seedUsers = () => db.Promise.map(
	[{
		id:1,	
		name: "Jonathan Guy",
		email: "jguy@gmail.com",
	}, {
		id:2,
		name: "Buddy Pal",
		email: "palbud@gmail.com",
	}, {
		id:3,
		name: "Emma Watson",
		email: "emmawatson@gmail.com",
	}, {
		id:4,
		name: "Harry Potter",
		email: "harrypotter@gmail.com",
	}, {
		id:5,
		name: "Ron Weaseley",
		email: "ronweaseley@gmail.com",
	}, {
		id:6,
		name: "Barack Obama",
		email: "bobama@yahoo.com",
	}, {
		id:7,
		name: "Joe Biden",
		email: "jbiden@hotmail.com",
	}, {
		id:8,
		name: "Michelle Obama",
		email: "mobama@gmail.com",
	}, {
		id:9,
		name: "Hermione Granger",
		email: "hgranger@gmail.com",
	}, {
		id:10,
		name: "Hillary Clinton",
		email: "hclinton@gmail.com",
	}], user => db.model('users').create(user))

const seedQuestions = () => db.Promise.map(
	[{
		id:1,	
		name: "Fibonacci",
		tests: "Fibonacci Tests"
	}, {
		id:2,	
		name: "Fizzbuzz",
		tests: "Fizzbuzz Tests"
	}, {
		id:3,	
		name: "DP Problem",
		tests: "DP Tests"
	}, {
		id:4,	
		name: "JavaScript Problem",
		tests: "JavaScript Tests"
	}, {
		id:5,
		name: "RegEx Problem",
		tests: "Regex Tests",
	}], question => db.model('questions').create(question))

const seedFights = () => db.Promise.map(
	[{
		id:1,	
		number: 1,
		questions: [1, 2]
	}, {
		id:2,	
		number: 2,
		questions: [1, 2, 4]
	}, {
		id:3,	
		number: 3,
		questions: [3, 5]
	}], fight => db.model('fights').create(fight))


db.sync()
	.then(() => db.sync({
		force: true
	}))
	.then(seedUsers)
	.then((users) => console.log(`Seeded ${users.length} users OK`))
	.then(seedQuestions)
	.then((questions) => console.log(`Seeded ${questions.length} questions OK`))
	.then(seedFights)
	.then((fights) => console.log(`Seeded ${fights.length} fights OK`))
	.catch(error => console.error(error))
	.finally(() => db.close())



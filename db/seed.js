const { db } = require('./database.js')

const seedUsers = () => db.Promise.map(
	[{
		name: "Jonathan Guy",
		email: "jguy@gmail.com",
	}, {
		name: "Buddy Pal",
		email: "palbud@gmail.com",
	}, {
		name: "Emma Watson",
		email: "emmawatson@gmail.com",
	}, {
		name: "Harry Potter",
		email: "harrypotter@gmail.com",
	}, {
		name: "Ron Weaseley",
		email: "ronweaseley@gmail.com",
	}, {
		name: "Barack Obama",
		email: "bobama@yahoo.com",
	}, {
		name: "Joe Biden",
		email: "jbiden@hotmail.com",
	}, {
		name: "Michelle Obama",
		email: "mobama@gmail.com",
	}, {
		name: "Hermione Granger",
		email: "hgranger@gmail.com",
	}, {
		name: "Hillary Clinton",
		email: "hclinton@gmail.com",
	}], user => db.model('users').create(user))

const seedQuestions = () => db.Promise.map(
	[{	
		name: "Question 1",
		questionText: `Make a function called returnOne that returns 1\n
		This is filler text for a second line.\n
		This is filler text for a third line.\n`,
		tests: `describe("returnOne", function(){
        			it("should return 1", function(){
         	 			assert.equal(1, returnOne());
      				})
    			})`
	}, {	
		name: "Question 2",
		questionText: "Make a function called returnTwo that return 2",
		tests: `describe("returnTwo", function(){
        			it("should return 2", function(){
         	 			assert.equal(2, returnTwo());
      				})
    			})`
	}], question => db.model('questions').create(question))

const seedFights = () => db.Promise.map(
	[{	
		number: 1,
		questions: [1, 2]
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
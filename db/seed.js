const db = require('./database.js')

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

db.sync()
	.then(() => db.sync({
		force: true
	}))
	.then(seedUsers)
	.then((users) => console.log(`Seeded ${users.length} users OK`))
	.catch(error => console.error(error))
	.finally(() => db.close())



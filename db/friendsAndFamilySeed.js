const { db } = require('./database.js');
const bcrypt = require('bcryptjs');

const seedUsers = () => db.Promise.map(
	[
		{
			username: 'mitch',
			password: bcrypt.hashSync('mitch', 10),
			name: 'mitch k',
			email: 'mitch@mitch.com',
			points: 975,
			wins: 4,
			losses: 5
		},
		{
			username: 'john',
			password: bcrypt.hashSync('john', 10),
			name: 'john y',
			email: 'john@john.com',
			points: 1025,
			wins: 5,
			losses: 4
		},
		{
			username: 'ming',
			password: bcrypt.hashSync('ming', 10),
			name: 'ming t',
			email: 'ming@ming.com',
			points: 2433,
			wins: 123,
			losses: 3
		}
	// {
	// 	username: 'jonguy',
	// 	password: bcrypt.hashSync('pass123', 10),
	// 	name: "Jonathan Guy",
	// 	email: "jguy@gmail.com",
	// }, {
	// 	name: "Buddy Pal",
	// 	email: "palbud@gmail.com",
	// }, {
	// 	name: "Emma Watson",
	// 	email: "emmawatson@gmail.com",
	// }, {
	// 	name: "Harry Potter",
	// 	email: "harrypotter@gmail.com",
	// }, {
	// 	name: "Ron Weaseley",
	// 	email: "ronweaseley@gmail.com",
	// }, {
	// 	name: "Barack Obama",
	// 	email: "bobama@yahoo.com",
	// }, {
	// 	name: "Joe Biden",
	// 	email: "jbiden@hotmail.com",
	// }, {
	// 	name: "Michelle Obama",
	// 	email: "mobama@gmail.com",
	// }, {
	// 	name: "Hermione Granger",
	// 	email: "hgranger@gmail.com",
	// }, {
	// 	name: "Hillary Clinton",
	// 	email: "hclinton@gmail.com",
	// }
], user => db.model('users').create(user))

const seedQuestions = () => db.Promise.map(
	[
	{
		name: "Get the Middle Character(s)",
		questionText: `Write a function named getMiddle that takes in a string and returns the middle character if the length is odd or the middle two characters if the length is even.\n
		Write a function findNeedle() that takes an array full of junk but containing one "needle"\n
		For example, \n
		getMiddle("test") should return "es" \n
		getMiddle("testing") should return "t" \n
		`,
		tests: `describe("getMiddle", function(){
        			it("This string should return "es" ", function(){
         	 			assert.equal("es", getMiddle("test"));
      				})
      				it("This string should return "t" ", function(){
         	 			assert.equal("t", getMiddle("testing"));
      				})
      				it("This string should return "dd" ", function(){
         	 			assert.equal("dd", getMiddle("middle"));
      				})
      				it("This string should return "A" ", function(){
         	 			assert.equal("A", getMiddle("A"));
      				})
    			})`
	},
	// {
	// 	name: "A Needle in a Haystack",
	// 	questionText: `Can you find the needle in the haystack?\n
	// 	Write a function findNeedle() that takes an array full of junk but containing one "needle"\n
	// 	and returns the index of where it found the needle.\n
	// 	So findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])\n
	// 	should return 5.
	// 	`,
	// 	tests: `describe("findNeedle", function(){
 //        			it("This array should return 5", function(){
 //         	 			assert.equal(5, findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
 //      				})
 //      				it("This array should return 0", function(){
 //         	 			assert.equal(0, findNeedle(["needle"]));
 //      				})
 //    			})`
	// },
	// {
	// 	name: "Sum of Positive",
	// 	questionText: `You get an array of numbers, return the sum of all of the positives ones.\n
	// 	Example [1,-4,7,12] => 1 + 7 + 12 = 20\n
	// 	Write a function named positiveSum that returns the sum of all the positive elements.\n
	// 	`,
	// 	tests: `describe("positiveSum", function(){
 //        			it("This array should return 20", function(){
 //         	 			assert.equal(20, positiveSum([1, -4, 7, 12]));
 //      				})
 //      				it("This array should return 5", function(){
 //         	 			assert.equal(5, positiveSum([5, -1, -10, 0]));
 //      				})
 //    			})`
	// },
	// {
	// 	name: "Remove the First and Last",
	// 	questionText: `You receive an array with at least two elements.\n
	// 	Return a new array with first and last elements removed.
	// 	Example [1,-4,7,12] => [-4, 7]\n
	// 	Write a function named removeFirstAndLast that does this.\n
	// 	`,
	// 	tests: `describe("removeFirstAndLast", function(){
 //        			it("This array should return [-4, 7]", function(){
 //         	 			assert.equal(-4, removeFirstAndLast([1, -4, 7, 12])[0]);
 //         	 			assert.equal(7, removeFirstAndLast([1, -4, 7, 12])[1]);
 //      				})
 //    			})`
	// },
	// {
	// 	name: "Find Maximum and Minimum Values of an Array",
	// 	questionText: `Your task is to make two functions named max and min that take in an array and return the maximum and minimum values of that array, respectively.\n
	// 	For example, \n
	// 	max([4,6,2,1,9,63,-134,566]) returns 566\n
	// 	min([-52, 56, 30, 29, -54, 0, -110]) returns -110\n
	// 	`,
	// 	tests: `
	// 			describe("max", function(){
 //        			it("This array should return 566", function(){
 //         	 			assert.equal(566, max([4,6,2,1,9,63,-134,566]));
 //      				})
 //      				it("This array should return 5", function(){
 //         	 			assert.equal(5, max([5]));
 //      				})
 //    			})
 //    			describe("min", function(){
 //        			it("This array should return -110", function(){
 //         	 			assert.equal(-110, min([-52, 56, 30, 29, -54, 0, -110]));
 //      				})
 //      				it("This array should return 0", function(){
 //         	 			assert.equal(0, min([42, 54, 65, 87, 0]));
 //      				})
 //    			})
 //    			`
	// },
	// {
	// 	name: "Fibonacci Series",
	// 	questionText: `Make a function named fib that takes in a non-negative integer n and returns the nth Fibonacci number.\n
	// 	The Fibonacci sequence is the series of numbers in which each number is the sum of the two preceding numbers.\n
	// 	1, 1, 2, 3, 5, 8, etc.
	// 	`,
	// 	tests: `describe("fib", function(){
 //        			it("1st element should return 1", function(){
 //         	 			assert.equal(1, fib(0));
 //      				})
 //      				it("2nd element should return 1", function(){
 //         	 			assert.equal(1, fib(1));
 //      				})
 //      				it("3rd element should return 2", function(){
 //         	 			assert.equal(2, fib(2));
 //      				})
 //      				it("4th element should return 3", function(){
 //         	 			assert.equal(3, fib(3));
 //      				})
 //      				it("5th element should return 5", function(){
 //         	 			assert.equal(5, fib(4));
 //      				})
 //      				it("6th element should return 8", function(){
 //         	 			assert.equal(8, fib(5));
 //      				})
 //      				it("7th element should return 13", function(){
 //         	 			assert.equal(13, fib(6));
 //      				})
 //    			})`
	// },
	// {
	// 	name: "Hey! Diddle, diddle...",
	// 	questionText: `In the nursery rhyme "Hey! Diddle, diddle..." write a function called motherGoose that fills in the blank. \n
	// 	Hey! diddle, diddle, \n
	// 	The cat and the fiddle, \n
	// 	The cow jumped over the moon; \n
	// 	The little dog laughed \n 
	// 	To see such sport, \n 
	// 	And the dish ran away with the _____. \n
	// 	`,
	// 	tests: `describe("motherGoose", function(){
 //        			it("should return", function(){
 //         	 			assert.equal("spoon", motherGoose());
 //      				})
 //    			})`
	// }
	// , {
	// 	name: "Question 2",
	// 	questionText: "Make a function called returnTwo that returns 2 	\nfunction returnTwo() {return 2} \n",
	// 	tests: `describe("returnTwo", function(){
 //        			it("should return 2", function(){
 //         	 			assert.equal(2, returnTwo());
 //      				})
 //    			})`
	// }
	// {
	// 	name: "Question 1",
	// 	questionText: `Make a function called returnOne that returns 1\n
	// 	function returnOne() {return 1} \n
	// 	This is filler text for a second line.\n
	// 	This is filler text for a third line.\n`,
	// 	tests: `describe("returnOne", function(){
 //        			it("should return 1", function(){
 //         	 			assert.equal(1, returnOne());
 //      				})
 //    			})`
	// }, {
	// 	name: "Question 2",
	// 	questionText: "Make a function called returnTwo that returns 2 	\nfunction returnTwo() {return 2} \n",
	// 	tests: `describe("returnTwo", function(){
 //        			it("should return 2", function(){
 //         	 			assert.equal(2, returnTwo());
 //      				})
 //    			})`
	// }, {
	// 	name: "Question 3",
	// 	questionText: "Make a function called returnThree that returns 3 	\nfunction returnThree() {return 3} \n",
	// 	tests: `describe("returnThree", function(){
 //        			it("should return 3", function(){
 //         	 			assert.equal(3, returnThree());
 //      				})
 //    			})`
	// }, {
	// 	name: "Question 4",
	// 	questionText: "Make a function called returnFour that returns 4  \nfunction returnFour() {return 4} \n",
	// 	tests: `describe("returnFour", function(){
 //        			it("should return 4", function(){
 //         	 			assert.equal(4, returnFour());
 //      				})
 //    			})`
	// }, {
	// 	name: "Question 5",
	// 	questionText: "Make a function called returnFive that returns 5	 \nfunction returnFive() {return 5} \n",
	// 	tests: `describe("returnFive", function(){
 //        			it("should return 5", function(){
 //         	 			assert.equal(5, returnFive());
 //      				})
 //    			})`
	// },
// 	{
// 		name: "Set Property on an Object Literal",
// 		questionText: `Make a function named setPropertiesOnObjLiteral that takes in an object and sets the x property of that object to 3.`,
// 		tests: `
// 				describe("setPropertiesOnObjLiteral", function() {
// 					var object = {};
// 					setPropertiesOnObjLiteral(object);

//     				it("sets x to 3", function() {
//       					assert.equal(object.x, 3);
//     				});
//   				});
//   				`
// 	},
// 	{
// 		name: "Set Properties on an Array Object",
// 		questionText: `One of the coolest things about JavaScript is that Arrays are just a specific type of Object that has more features.  Everything that you can do with objects, you can also do with arrays. \n
// Make a function named setPropertiesOnArrayObj that takes in an array object and sets the property hello to a function that returns the string Hello! and sets the zeroth index of the array to a value of 5`,
// 		tests: `
// 				describe("setPropertiesOnArrayObj", function() {
// 				    var arrayObject = [];
//     				setPropertiesOnArrayObj(arrayObject);

// 				    it("sets the property hello to a function that returns the string Hello! ", function() {
// 				      assert.equal(arrayObject.hello(), "Hello!");
// 				    });

// 				    it("accesses the zeroth index value in the array", function() {
// 				      assert.equal(arrayObject[0], 5);
// 				    });
// 				});
//   				`
// 	},
// 	{
// 		name: "Set Properties on a Function Object",
// 		questionText: `One of the coolest things about JavaScript is that Functions are just a specific type of Object that has more features.  Everything that you can do with objects, you can also do with functions. \n
// Make a function named setPropertiesOnFunctionObj that takes in a function object and sets the year property to equal 2017 and sets divideByTwo to a function that accepts a number and returns the value divided by two.`,
// 		tests: `
// 				describe("setPropertiesOnFunctionObj", function() {
// 				    var functionObject = function() {};
//     				setPropertiesOnFunctionObj(functionObject)

// 				    it("sets year to 2017", function() {
//       					assert.equal(functionObject.year, 2017);
//     				});

//     				it("sets divideByTwo to a function that accepts a number and returns the value divided by two ", function() {
//       					assert.equal(functionObject.divideByTwo(6), 3);
//     				})
// 				});
//   				`
// 	},
// 	{
// 		name: "Create a Calculator Object",
// 		questionText: `In this exercise create a calculator object that performs basic mathematic operations. \n
// We'll be using a pattern called the factory pattern where our function creates an object tailored to our needs. \n
// The calcular object should start with a total property of 0, have a value property that is a function that returns that total, and have add and subtract properties.
// `,
// 		tests: `
// 				describe("Create a Calculator", function() {
// 					it("initially has 0", function() {
// 					  var calculator = createCalculator();
// 					  assert.equal(calculator.value(), 0);
// 					});

// 					it("can add a number", function() {
// 					  var calculator = createCalculator();
// 					  calculator.add(2);
// 					  assert.equal(calculator.value(), 2);
// 					});

// 					it("can add two numbers", function() {
// 					  var calculator = createCalculator();
// 					  calculator.add(2);
// 					  calculator.add(3);
// 					  assert.equal(calculator.value(), 5);
// 					});

// 					it("can add many numbers", function() {
// 					  var calculator = createCalculator();
// 					  calculator.add(2);
// 					  calculator.add(3);
// 					  calculator.add(4);
// 					  assert.equal(calculator.value(), 9);
// 					});

// 					it("can subtract a number", function() {
// 					  var calculator = createCalculator();
// 					  calculator.subtract(2);
// 					  assert.equal(calculator.value(), -2);
// 					});

// 					it("can add and subtract", function() {
// 					  var calculator = createCalculator();
// 					  calculator.add(3);
// 					  calculator.subtract(2);
// 					  assert.equal(calculator.value(), 1);
// 					});

// 				});
//   				`
// 	},
// 	{
// 		name: "The Repeat Function",
// 		questionText: `Create a function named repeat which takes a string as its first argument and a non-negative number n as its second argument which returns the string repeated n times.`,
// 		tests: `
// 				describe("repeat", function() {
// 				    it("is empty with 0 repeats", function() {
// 				      assert.equal(repeat("yo", 0), "");
// 				    });
// 				    it("repeats its argument once", function() {
// 				      assert.equal(repeat("yo", 1), "yo");
// 				    });
// 				    it("repeats its argument twice", function() {
// 				      assert.equal(repeat("yo", 2), "yoyo");
// 				    });
// 				      it("repeats its argument many times", function() {
// 				      assert.equal(repeat("yo", 10), "yoyoyoyoyoyoyoyoyoyo");
// 				    });
//   				});
//   				`
// 	},
// 	{
// 		name: "The Sum Function",
// 		questionText: `Create a function named sum which takes an array and returns the sum of all the elements in the array.`,
// 		tests: `
// 				describe("sum", function() {
// 				    it("computes the sum of an empty array", function() {
// 				      assert.equal(sum([]), 0);
// 				    });

// 				    it("computes the sum of an array of one number", function() {
// 				      assert.equal(sum([7]), 7);
// 				    });

// 				    it("computes the sum of an array of two numbers", function() {
// 				      assert.equal(sum([7, 11]), 18);
// 				    });

// 				    it("computes the sum of an array of many numbers", function() {
// 				      assert.equal(sum([1, 3, 5, 7, 9]), 25);
// 				    });
// 				});
//   				`
// 	},
// 	{
// 		name: "The Join Function",
// 		questionText: `Create a function named join which takes in an array as its first object and a delimiter as its second object and returns the array joined by the delimter.\n
// Do not use the built-in join function.
// 		`,
// 		tests: `
// 				describe("join", function() {
// 				    it("turns an empty array into an empty string", function() {
// 				      assert.equal(join([]), "");
// 				    });

// 				    it("turns an array with one element into a string", function() {
// 				      assert.equal(join(["a"]), "a");
// 				    });

// 				    it("turns an array with many elements into a string", function() {
// 				      assert.equal(join(["apple", "banana", "cherry"]), "applebananacherry");
// 				    });

// 				    it("inserts a delimiter between elements", function() {
// 				      assert.equal(join(["apple", "banana", "cherry"], "/"), "apple/banana/cherry");
// 				    });
// 				});
//   				`
// 	},
// 	{
// 		name: "Paramify an Object",
// 		questionText: `Create a function named paramify that takes in an object and returns a string of the keys andvalues of that object in separted by an "=" in alphabetical order.\n
// 		For example, an object of {height: 74, width: 12} would return "height=74&width=12".
// 		`,
// 		tests: `
// 				describe("paramify", function() {
// 				    it("works on an empty object", function() {
// 				      assert.equal(paramify({}), "");
// 				    });

// 				    it("converts an object with one element", function() {
// 				      assert.equal(paramify({
// 				        size: 14
// 				      }), "size=14");
// 				    });

// 				    it("converts an object with two elements", function() {
// 				      assert.equal(paramify({
// 				        height: 74,
// 				        width: 12
// 				      }), "height=74&width=12");
// 				    });

// 				    it("converts an object with many elements", function() {
// 				      var object = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
// 				      assert.equal(paramify(object), "a=1&b=2&c=3&d=4&e=5&f=6");
// 				    });

// 				    // this one might be a bit tricky ;-)
// 				    it("outputs the parameters in alphabetical order", function() {
// 				      var object = {f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
// 				      assert.equal(paramify(object), "a=1&b=2&c=3&d=4&e=5&f=6");
// 				    });
// 				});
//   				`
// 	},
// 	{
// 		name: "functionRunner",
// 		questionText: `Create a function called functionRunner that takes in an unspecified number of functions, runs the functions, and returns the return values of all the functions concatenated as a string.\n
// Hint: use the concept of "arguments".
// 		`,
// 		tests: `
// 				describe("higher-order functions", function() {

// 				  var callThisFunction = function() {
// 				      return "Called Value";
// 				    };

// 				  it("means that a function can take a function as an argument", function() {

// 				    assert.equal(functionRunner(callThisFunction), "Called Value");
// 				    var andThisFunction = function() {
// 				      return " and Other Value";
// 				    };

// 				    assert.equal(functionRunner(callThisFunction, andThisFunction), "Called Value and Other Value");
// 				  });
// 				});
//   				`
// 	},
// 	{
// 		name: "Once",
// 		questionText: `Create a function named once that takes in a function and returns a function that will only run once, no matter how many times it is called.\n
// 		Hint: use the concept of closures.
// 		`,
// 		tests: `
// 				describe("once", function() {
// 				  it("should only increment num one time", function() {
// 				    var num = 0;
// 				    var increment = once(function() {
// 				      num++;
// 				    });

// 				    increment();
// 				    increment();
// 				    increment();
// 				    increment();

// 				    assert.equal(num, 1);
// 				  });
// 				});
//   				`
// 	},
	// {
	// 	name: "Map",
	// 	questionText: `Create a function named map that takes in an array as the first argument and an iterator function as its second argument and returns an array with iterator function applied to each element.\n
	// 	`,
	// 	tests: `
	// 			describe("map", function() {
	// 			  it("takes a tripling function", function() {
	// 			    assert.equal(map([1, 2, 3], function(elem) {
	// 			      return elem * 3;
	// 			    })[0], 3);
	// 			    assert.equal(map([1, 2, 3], function(elem) {
	// 			      return elem * 3;
	// 			    })[1], 6);
	// 			    assert.equal(map([1, 2, 3], function(elem) {
	// 			      return elem * 3;
	// 			    })[2], 9);
	// 			  });
	// 			  it("takes a doubling function", function() {
	// 			    assert.equal(map([1, 2, 3], function(elem) {
	// 			      return elem * 2;
	// 			    })[0], 2);
	// 			    assert.equal(map([1, 2, 3], function(elem) {
	// 			      return elem * 2;
	// 			    })[1], 4);
	// 			    assert.equal(map([1, 2, 3], function(elem) {
	// 			      return elem * 2;
	// 			    })[2], 6);
	// 			  });
	// 			});
 //  				`
	// },
	// {
	// 	name: "Filter",
	// 	questionText: `Create a function named filter that takes in an array as the first argument and an iterator function as its second argument and returns a filtered array using the iterator function.\n
	// 	`,
	// 	tests: `
	// 			var evenFilter = function(element) {
	// 			    if (element % 2 === 0)
	// 			      return true;
	// 			    else
	// 			      return false;
	// 			  };

	// 			  var oddFilter = function(element) {
	// 			      return !evenFilter(element);

	// 			  it("filters an array based on evens", function() {
	// 			    assert.equal(filter([1, 2, 3, 4, 5, 6, 7, 8], evenFilter), [2, 4, 6, 8]);
	// 			  });

	// 			  it("filters an array based on odds", function() {

	// 			    assert.equal(filter([1, 2, 3, 4, 5, 6, 7, 8], oddFilter), [1, 3, 5, 7]);
	// 			  });

 //  				`
	// },
	], question => db.model('questions').create(question))

const seedBugs = () => db.Promise.map(
	[{
		bugName: 'Test Bug',
		bugDescription: 'Test Description',
		name: 'Test Name'
	}], bug => db.model('bugs').create(bug))


db.sync()
	.then(() => db.sync({
		force: true
	}))
	.then(seedUsers)
	.then((users) => console.log(`Seeded ${users.length} users OK`))
	.then(seedQuestions)
	.then((questions) => console.log(`Seeded ${questions.length} questions OK`))
	.then(seedBugs)
	.then((bugs) => console.log(`Seeded ${bugs.length} bugs OK`))
	.catch(error => console.error(error))
	.finally(() => db.close())

import React from 'react';
import './Problem.scss';

let question = 	`Write a program that prints the numbers from 1 to 100.\n
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".\n
For numbers which are multiples of both three and five print “FizzBuzz”.`

const questionArray = question.split("\n");

export const Problem = () => (
  <div className="container-fluid-problem">
  	<h2> Problem </h2>
  	{
  	 	questionArray && questionArray.map((questionLine, i) => (
  	 		<p key={i} style={{textAlign: 'left'}}>{questionLine}</p>
  	 		)
  	 	)
  	}
  </div>
)

export default Problem;

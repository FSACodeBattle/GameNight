import React from 'react';
import './Problem.scss';

// let question = 	`Write a program that prints the numbers from 1 to 100.\n
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".\n
// For numbers which are multiples of both three and five print “FizzBuzz”.`

// const questionArray = question.split("\n");

export const Problem = (props) => {

	const currentQuestion = props.CurrentQuestion; 
	//const questionArray = currentQuestion.split("\n");
			//<h2> Problem </h2>
			//{
			 	//questionArray && questionArray.map((questionLine, i) => (
			 		//<p key={i} style={{textAlign: 'left'}}>{questionLine}</p>
			 		//)
			 	//)
			//}
	
			if (currentQuestion){
				var splitQuestion = currentQuestion.questionText.split("\n")
				 var pTags = splitQuestion.map((questionLine, i) => (
			 		<p key={i} style={{textAlign: 'left'}}>{questionLine}</p>
			 		))
			}
			currentQuestion && currentQuestion.questionText 


	return(

		<div className="container-fluid-problem">
			<h3> Problem </h3>
			<h3> {currentQuestion && currentQuestion.questionName} </h3>
			<div>{currentQuestion && pTags}</div>
		</div>
		)

}

  


export default Problem;

import React from 'react';
import './Problem.scss';



export const Problem = (props) => {

	// get the current question that was passed in through props
	const currentQuestion = props.CurrentQuestion;

		//if the current question is defined
	if (currentQuestion){
			//split the qurstion text by the next line tags
		var splitQuestion = currentQuestion.questionText.split("\n")
			//map over each "line" of text and wrap them in <p> tags
		var pTags = splitQuestion.map((questionLine, i) => (
		 	<p key={i} style={{textAlign: 'left'}}>{questionLine}</p>
		 	))
	}
	return (
	  <div>
			<div className="container" id="problemsContainer">
				<div className="row" id="problemsRow">
					<div className="col-xs-12 "id="questionsBox" style={{color:"#777"}}>
						<div id="problems">
							Questions
						</div>
					</div>
					<div className="col-xs-12" id="questionsArray" style={{color: "#777"}}>
						<h4> {currentQuestion && currentQuestion.questionName} </h4>
						<div>{currentQuestion && pTags}</div>
					</div>
				</div>
			</div>
	  </div>
	);
}

export default Problem;

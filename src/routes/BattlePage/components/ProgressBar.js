import React from 'react'
import './ProgressBar.scss';

const ProgressBar = (props) => {
  const { Progress } = props.Progress;
  const { QuestionsArr } = props.QuestionsArr;
  let progressPercentage = (props.Progress/props.QuestionsArr.length) * 100;
  return (
    <div>
      <div className="progress">
        <div className="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: progressPercentage + "%" }}>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

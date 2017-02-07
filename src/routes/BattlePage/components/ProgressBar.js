import React from 'react'
import '../components/ProgressBar.scss';

export const ProgressBar = () => (
  <div>
    <div className="progress">
        <div className="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        </div>
    </div>
  </div>
)

export default ProgressBar;

import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import './Matchhistory.scss';

export const MatchHistory = (props) => {
  const matches = props.matches;
      //if matches is defined
      console.log(matches);
    if (matches){

      var rows = matches.map(match =>
        <tr key={match.id} >
          <td>{match.createdAt.substring(0, 10)}</td>
          <td>{match.id}</td>
          <td>{match.winner.username}</td>
          <td>{match.loser.username}</td>
          <td>{match.winnerDuration}</td>
        </tr>
        )
    }
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" id="matchComponent">
        <div className="table-responsive">
        <h2 style={{color:"#777"}}> Match History </h2>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Match ID</th>
                <th>Winning Player</th>
                <th>Losing Player</th>
                <th>Winning Time</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default MatchHistory;

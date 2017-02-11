import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './HomeView.scss'
import './Matchhistory.scss';

export const MatchHistory = (props) => {
  const matches = props.userMatches || props.matches;
    const rows = matches.map(match =>
      <tr key={match.id}>
        <td>{match.createdAt.substring(0, 10)}</td>
        <td>{match.id}</td>
        <td><Link to={`/profile/${match.winner.username}`}>{match.winner.username}</Link></td>
        <td><Link to={`/profile/${match.loser.username}`}>{match.loser.username}</Link></td>
        <td>{match.winnerDuration}</td>
      </tr>
    )

    return (
      <div /*className="row"*/ id="matchComponent">
        <div /*className="col-xs-12 col-sm-6 col-md-4 col-lg-4"*/>
          <div /*className="table-responsive"*/>
            <h2 style={{color:"#777"}}> Match History </h2>
            <table className="table" style={{tableLayout: "fixed"}}>
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
      </div>
    )
}

const mapStateToProps = (state) => ({ matches: state.match.matches })

export default connect(mapStateToProps)(MatchHistory);

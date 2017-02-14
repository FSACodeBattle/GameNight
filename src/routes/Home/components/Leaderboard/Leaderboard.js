import React from 'react';
import { Link } from 'react-router';
import '../HomeView.scss';
import './leaderboard.scss';

export const Leaderboard = (props) => {
		const leaderboard = props.leaderboard;
			//if leaderboard is defined
		if (leaderboard){

			var rows = leaderboard.map((user, i) =>
				<tr key={user.id} >
					<td> {++i} </td>
					<td><Link to={`/profile/${user.username}`}>{user.username}</Link></td>
					<td>{user.wins}</td>
					<td>{user.wins + user.losses ? (user.wins/(user.wins + user.losses)).toFixed(2) : 0}</td>
					<td>{user.points}</td>
				</tr>
				)
		}

		return (
  		<div id="leaderboardComponent">
  			<div className="table-responsive">
				  <table className="table">
				    <thead>
				      <tr>
				        <th>#</th>
				        <th>Username</th>
				        <th>Total Wins</th>
				        <th>Winning Percentage</th>
				        <th>Points</th>
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

export default Leaderboard;

import React from 'react'
import './HomeView.scss'
import './leaderboard.scss';

export const Leaderboard = (props) => {
		const leaderboard = props.leaderboard;
			//if leaderboard is defined
		if (leaderboard){

			var rows = leaderboard.map((user, i) =>
				<tr key={user.id} >
					<td> {++i} </td>
					<td>{user.username}</td>
					<td>{user.wins}</td>
					<td>{(user.wins/(user.wins + user.losses)).toFixed(2)}</td>
					<td>{user.points}</td>
				</tr>
				)
		}

		return (
  		<div className="col-xs-12 col-md-4 col-lg-4" id="leaderboardComponent">
  			<div className="table-responsive">
  			<h2 style={{color:'#777'}}> Leaderboard </h2>
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

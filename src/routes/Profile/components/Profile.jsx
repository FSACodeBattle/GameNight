import React from 'react';
import { connect } from 'react-redux';
import MatchHistory from '../../Home/components/MatchHistory';
import '../profile.scss';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
          Object.keys(user).length
          ? (
              <div className="profilePage">
                <div>
                  Username: {user.username}
                </div>
                <div>
                  Member Since: {user.createdAt.substring(0, 10)}
                </div>
                <div>
                  Wins: {user.wins}
                </div>
                <div>
                  Losses: {user.losses}
                </div>
                <div>
                  Points: {user.points}
                </div>
                <div className="profilePageMatchHistory">
                  <MatchHistory userMatches={this.props.userMatches} />
                </div>
              </div>
          )
          : ( <h2 className="profilePage"> Nonexistent User </h2> )
    )
  }
}

const mapStateToProps = (state) => (
  {
    userMatches: state.profile.matches,
    user: state.profile.user
  }
)

export default connect(mapStateToProps)(Profile);

import React from 'react';
import { connect } from 'react-redux';
import MatchHistory from '../../Home/components/MatchHistory';
import '../profile.scss';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div /*id="profileMatchHistory"*/>
        <MatchHistory userMatches={this.props.userMatches} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userMatches: state.profile.matches
  }
}

export default connect(mapStateToProps)(Profile);

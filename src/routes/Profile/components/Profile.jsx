import React from 'react';
import { connect } from 'react-redux';
import MatchHistory from '../../Home/components/MatchHistory';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('umatches', this.props.userMatches);
    return (
      <div>
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

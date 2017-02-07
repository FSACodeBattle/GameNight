import { connect } from 'react-redux';
import GameLobby from '../components/GameLobby';

const mapStateToProps = (state) => {
  return {
    roomid: state.gameLobby.id,
    user: state.user.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GameLobby);

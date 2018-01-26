import { connect } from 'react-redux';
import GameLobby from '../components/GameLobby';

const mapStateToProps = (state) => {
  return {
    roomid: state.gameLobby.id,
    user: state.user.user
  };
}

export default connect(mapStateToProps)(GameLobby);

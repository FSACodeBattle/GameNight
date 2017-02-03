import { connect } from 'react-redux';
import GameLobby from '../components/GameLobby';

const mapStateToProps = (state) => {
  return {roomid: state.gameLobby.id};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GameLobby);

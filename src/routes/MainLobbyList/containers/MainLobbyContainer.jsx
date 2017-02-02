import { connect } from 'react-redux';
import MainLobby from '../components/MainLobby';
import { fetchClients } from '../../../store/client';

const mapStateToProps = (state) => {
  return {
    clients: state.clients
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLobby);

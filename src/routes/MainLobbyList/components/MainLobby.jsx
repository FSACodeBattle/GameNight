import React from 'react';
import createStore from '../../../store/createStore';

const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);

class MainLobby extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const clients = this.props.clients.clients;
    return (
      <div>
        <div style={{color:"#777"}}>
          Warriors
        </div>
        <div>
          { clients.length > 1 ?
            clients.filter(client => client !== socket.id).map((client, idx) => <div key={idx}>{client}</div>)
            : "None"
          }
        </div>
      </div>
    )
  }
}

export default MainLobby;

import React from 'react';

class MainLobby extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const clients = this.props.clients.clients;
    return (
      <div>
        Warriors
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

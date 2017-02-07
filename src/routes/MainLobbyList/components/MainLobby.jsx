import React from 'react';

class MainLobby extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const clients = this.props.clients.clients;
    return (
      <div>
        <h4 style={{color:"white"}}>
          Warriors
          <h1 style={{color: "white"}}>
            { clients.length > 1 ?
              clients.filter(client => client.socketId !== socket.id).map((client, idx) => <div key={idx}>{client.username}</div>)
              : "None"
            }
          </h1>
        </h4>
      </div>
    )
  }
}

export default MainLobby;

import React from 'react';

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
      </div>
    )
  }
}

export default MainLobby;


// sdf
//         <h1 style={{color: "white"}}>
//           { clients.length > 1 ?
//             clients.filter(client => client.socketId !== socket.id).map((client, idx) => <div key={idx}>{client.username}</div>)
//             : "None"
//           }
//         </h1>

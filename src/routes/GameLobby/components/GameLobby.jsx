import React from 'react';
import { browserHistory } from 'react-router'

class GameLobby extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    socket.on('startGame', data => {
      browserHistory.push('/battlePage');
    })
  }

  render() {
    return (
      <div style={{color:"white"}}>
        Lobby
        <div>
          <textarea value={`localhost/lobby/${this.props.roomid}`} style={{resize: "none", textAlign: "center", color: "black"}} rows="1" readOnly>
          </textarea>
        </div>
      </div>
    )
  }
}

export default GameLobby;

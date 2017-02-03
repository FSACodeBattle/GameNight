import React from 'react';

class GameLobby extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomid: this.props.routeParams.roomid,
    }
  }

  render() {
    return (
      <div style={{color:"white"}}>
        Lobby
        <div>
          Box with players
        </div>
        <div>
          <textarea value={`localhost/lobby/${this.props.roomid}`} style={{textAlign: "center", color: "black"}} rows="1" readOnly>
          </textarea>
        </div>
      </div>
    )
  }
}

export default GameLobby;

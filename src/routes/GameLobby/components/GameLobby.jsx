import React from 'react';

class GameLobby extends React.Component {

  constructor(props) {
    super(props);
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

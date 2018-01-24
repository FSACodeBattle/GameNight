import React from 'react';
import './GameLobby.scss';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';
import { browserHistory } from 'react-router';

class GameLobby extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      roomId: ''
    }
  }

  componentDidMount() {
    socket.on('startGame', data => {
      browserHistory.push('/battlePage');
    })
    const roomId = makeid();
    socket.emit('joinGameLobby', roomId);
    this.setState({roomId});
  }

  render() {
    const { user } = this.props;
    const { roomId } = this.state;
    return (
      <div className="row" id="gameInvite">
        <label style={{color:"#777"}}>Invite To Game!</label>
        {
          Object.keys(user).length
          ?
            <div className="input-group" style={{margin: "0px auto"}}>
              <input
                type="text"
                className="form-control"
                value={`${roomId}`}
                onChange={() => this.setState({ copied: false})}
              />

              <CopyToClipboard
                text={`${roomId}`}
                onCopy={() => this.setState({copied: true})}
                >
                  <button className="btn btn-primary btn-join">Copy To Clipboard</button>
                </CopyToClipboard>
                {this.state.copied ? <span style={{color: 'red', marginLeft: "10px"}}>Copied.</span> : null}
            </div>
          : <div style={{color: "white"}}>Please log in</div>
        }
      </div>
    )
  }
}

const makeid = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i = 0; i < 6; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

export default GameLobby;

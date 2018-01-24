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
      serverIp: ''
    }
  }

  componentDidMount() {
    console.log(this.props);
    socket.on('startGame', data => {
      browserHistory.push('/battlePage');
    })
  }

  componentWillMount() {
    axios.get('/server/ip')
      .then(res => res.data)
      .then(ip => {
        console.log('asdfajldfjasd', ip);
        this.setState({serverIp: ip});
      });
  }

  render() {
    const user = this.props.user;
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
                value={`${this.state.serverIp}/lobby/${this.props.roomid}`}
                onChange={() => this.setState({ copied: false})}
              />

              <CopyToClipboard
                text={`${this.state.serverIp}/lobby/${this.props.roomid}`}
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
export default GameLobby;

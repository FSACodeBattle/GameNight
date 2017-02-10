import React from 'react';
import './GameLobby.scss';
import CopyToClipboard from 'react-copy-to-clipboard';
import { browserHistory } from 'react-router'

class GameLobby extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
  }

  componentDidMount() {
    console.log(this.props);
    socket.on('startGame', data => {
      browserHistory.push('/battlePage');
    })
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
                value={`localhost:3000/lobby/${this.props.roomid}`}
                onChange={() => this.setState({ copied: false})}
              />

              <CopyToClipboard
                text={`http://138.197.51.247/lobby/${this.props.roomid}`}
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

//   render() {
//     return (
//       <div style={{color:"white"}}>
//         Lobby
//         <div>
//           <textarea value={`localhost/lobby/${this.props.roomid}`} style={{resize: "none", textAlign: "center", color: "black"}} rows="1" readOnly>
//           </textarea>
//         </div>
//       </div>
//     )
//   }
// }

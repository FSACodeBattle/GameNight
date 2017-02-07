import React from 'react';
<<<<<<< HEAD
import './GameLobby.scss';
import CopyToClipboard from 'react-copy-to-clipboard';
=======
import { browserHistory } from 'react-router'
>>>>>>> 80156f0e852b3835f03a1935b24346e2fe8643fc

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
    return (
      <div className="row">
        <div className="col col-xs-12 col-md-6 col-lg-6" id="gameInvite">
          <label style={{color:"#777"}}>Invite To Game!</label>
          <div className="input-group">

            <input
              type="text"
              className="form-control"
              value={`localhost/lobby/${this.props.roomid}`}
              onChange={() => this.setState({ copied: false})}
            />

            <CopyToClipboard
              text={`localhost/lobby/${this.props.roomid}`}
              onCopy={() => this.setState({copied: true})}
            >
              <button className="btn btn-primary btn-join">Copy To Clipboard</button>
             </CopyToClipboard>
             {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
          </div>
        </div>
      </div>
    );
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










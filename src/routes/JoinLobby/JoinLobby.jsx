import { connect } from 'react-redux';
import React from 'react';

class JoinLobby extends React.Component {
    constructor() {
        super();
        this.state = {
            roomId: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
    }

    componentDidMount() {
        socket.on('startGame', data => {
            browserHistory.push('/battlePage');
        })
    }

    handleChange(event) {
        this.setState({roomId: event.target.value});
    }

    handleJoin() {
        socket.emit('joinGameLobby', this.state.roomId);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.roomId} onChange={handleChange}/>
                <button onClick={handleJoin}>Join</button>
            </div>
        )
    }
}

export default connect()(JoinLobby);
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

    componentWillMount() {
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

        const { user } = this.props;

        return (
            <div>
                <label style={{color: "#777"}}>Please Enter the Room ID</label>
                {
                    Object.keys(user).length
                    ?
                        <div className="input-group" style={{margin: "0 auto"}}>
                            <input
                                type="text" 
                                className="form-control"
                                value={this.state.roomId}
                                onChange={this.handleChange}
                                autoFocus
                            />
                            <button className="btn btn-primary btn-join" onClick={this.handleJoin}>Join</button>
                        </div>
                    : <div style={{color: "white"}}>Please log in</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.user.user };
}

export default connect(mapStateToProps, null)(JoinLobby);
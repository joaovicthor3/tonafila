import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Profile extends Component {
    render() {
        let display;
        const {user} = this.props;
        console.log('user...', user);
        user ? display = (
            <div className="container">
                <h5>Oi {user.name} !</h5>
                <h6>{user.email}</h6>
                <p>{user.id}</p>
            </div>
        ) : display = (
            <p>Carregando usuário...</p>
        )
        return (
            <div className="center">{display}</div>            
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps)(Profile);
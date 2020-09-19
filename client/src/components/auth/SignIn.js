import React, { Component } from 'react'
import Facebook from '../Facebook'



class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        let classicLogin = (
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Entrar</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        )
        return (
            <div className="center login-box"><Facebook /></div>
        )
    }
}



export default SignIn;

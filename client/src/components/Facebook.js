import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { createUser, getUser } from '../store/actions/authActions'

class Facebook extends Component {
    state = {
        accessToken: '',
        name: '',
        email: '',
        id: '',
        pictureURL: ''
    }
    
    responseFacebook = (response) => {
        console.log(response)
        this.processResponse(response);
    }

    processResponse = (response) => {
        if(response.status){
            console.log('deu ruim')
        } else {
            this.setState({
                accessToken: response.accessToken,
                name: response.name,
                email: response.email,
                id: response.id,
                pictureURL: response.picture.data.url
            });
            console.log(this.state);
            this.props.createUser(this.state);
        }
    }
 
    render() {
        const { user } = this.props;
        return (
            <div className="container">
                <FacebookLogin
                    appId="348880409482659"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                />
                <div className="center blue-text">{ user }</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      getUser: (id) => dispatch(getUser(id)),
      createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Facebook);
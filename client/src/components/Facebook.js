import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { createUser, getUser } from '../store/actions/authActions'
import { withRouter } from 'react-router-dom'

class Facebook extends Component {
    state = {
        accessToken: '',
        name: '',
        email: '',
        id: '',
        pictureURL: ''
    }
    

    responseFacebook = (response) => {
        console.log('the props ', this.props);
        if(response.status){
            console.log('deu ruim')
        } else {
            this.setState({
                accessToken: response.accessToken,
                name: response.name,
                email: response.email,
                id: response.id,
                pictureURL: response.picture.data.url,
            });
            this.props.createUser(this.state);
            this.props.history.push('/profile');
        }
    }
 
    render() {
        return (
            <div className="center">
                <FacebookLogin
                    appId="348880409482659"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    disableMobileRedirect={true}
                    cookie
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createUser: (user) => dispatch(createUser(user))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(Facebook));
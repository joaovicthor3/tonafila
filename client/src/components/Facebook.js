import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
class Facebook extends Component {
  responseFacebook(response) {
    console.log(response)
  }
 
  render() {
    return (
      <FacebookLogin
        appId="348880409482659"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    )
  }
}
 
export default Facebook;
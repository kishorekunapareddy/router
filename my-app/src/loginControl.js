import React, { Component } from 'react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
class LoginControl extends Component {
    constructor(props) {
      super(props);
       this.state = {
          isLoggedIn: false,
    }
}
render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

      if (isLoggedIn) {
             button = <LogoutButton />
    }
    else {
        button = <LoginButton />
    }
        return (
          <div>  
              {button}
          </div>
        )
      }
    }
    
export default LoginControl;
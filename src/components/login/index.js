import React from 'react';
class Login extends React.Component {
    handleClick() {
        console.log("User is logging in")
        console.log(this.refs.username.value);
        console.log(this.refs.password.value);
        console.log(this.props.users);
        for(const user of this.props.users) {
        if(this.refs.username.value === user.username &&
           this.refs.password.value === user.password)
        this.props.loginUser();
    }
}
    
    render() {
      return (
        <div>
        <input type="text" ref="username"/>
        <input type="text" ref="password"/>
        <input type="button" value="Login" 
            onClick={() => this.handleClick()}></input>
    </div>
    );
  }
}

export default Login;
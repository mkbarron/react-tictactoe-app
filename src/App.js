import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe/index.js'
import Login from './components/login/index.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login:false,
      users:[{username: "test",
              password: "test"}]};
    }
  loginUser() {
    this.setState({login:true});
  }
  logoutUser() {
    this.setState({login:false});
  }
  render() {
    return (
      <div> {
        (this.state.login) ?
        <TicTacToe logoutUser={() => this.logoutUser()} /> :
        <Login users={this.state.users} loginUser={() => this.loginUser()} />
        }
      </div>
    )
  }
}

export default App;
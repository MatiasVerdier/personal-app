import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login/LoginForm';

var config = {
  apiKey: 'AIzaSyAO0NJIXeXY0rbYKewgIaF1HFo-tnrO8_E',
  authDomain: 'personal-46c45.firebaseapp.com',
  databaseURL: 'https://personal-46c45.firebaseio.com',
  projectId: 'personal-46c45',
  storageBucket: 'personal-46c45.appspot.com',
  messagingSenderId: '113104472377'
};

firebase.initializeApp(config);

// const db = firebase.database();
const auth = firebase.auth();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthenticated: false,
      email: '',
      password: ''
    };
    
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  
  onSignIn() {
    const { email, password } = this.state;
    auth.signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }
  
  onSignUp() {
    const { email, password } = this.state;
    auth.createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }
  
  onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  
  componentDidMount() {    
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          user
        });
      } else {
        this.setState({
          isAuthenticated: false,
          user: null
        });
      }
    });
  }
  
  render() {
    const isAuthenticated = this.state.isAuthenticated;
    let content;
    if (isAuthenticated) {
      content = (
        <div>
          <h1>{this.state.user.displayName}</h1>
          
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    } else {
      content = <LoginForm
                  onSignIn={this.onSignIn}
                  onSignUp={this.onSignUp}
                  onEmailChange={this.onEmailChange}
                  onPasswordChange={this.onPasswordChange}
                  >
                </LoginForm>
    }
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        {content}
        
      </div>
    );
  }
}

export default App;
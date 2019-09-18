import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserLogin extends Component {
  constructor(props){
    super(props);

    this.state = {
      userEmail: "",
      userPassword: ""
    }
  }

  setEmail = (userEmail) => {
    this.setState({
      userEmail
    });
  }

  setPassword = (userPassword) => {
    this.setState({
      userPassword
    })
  }

  Login = () => {
    let user = {
      email: this.state.userEmail,
      password: this.state.userPassword
    }

    fetch(`http://localhost:1337/login`, {
      method: 'POST',
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include'
    })
    .then(res => res.text())
    .then((result) => {
      if(result === 'Login Successful') {
        this.props.history.push('/products');
      } else {
        alert(result);
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin">
            <div className="card-body">
              <h5 className="card-title text-center">Log In</h5>

              <input type="email" className="form-control" placeholder="Email address" 
              onChange={(event)=>{this.setEmail(event.target.value)}} required />

              <input type="password" className="form-control" placeholder="Password" 
              onChange={(event)=>{this.setPassword(event.target.value)}} required />

              <button className="btn btn-lg btn-primary btn-block text-uppercase"
              onClick={()=>{this.Login()}}>Log in</button>
              
              <div className="register"><Link to='/register'> New User? Click here to Register</Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SERVER } from '../../config';

const { API_URL } = SERVER;

class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
      confirm: "",
    }
  }

  setName = (userName) => {
    this.setState({
      userName
    });
  }

  setEmail = (userEmail) => {
    this.setState({
      userEmail
    });
  }

  setPassword = (userPassword) => {
    this.setState({
      userPassword
    });
  }

  setConfirm = (confirm) => {
    this.setState({
      confirm
    });
  }

  CreateUser = () => {
    const name= this.state.userName;
    const email = this.state.userEmail;
    const password = this.state.userPassword;

    fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: `mutation {
        createUser(data: {name:"${name}", email: "${email}" ,password: "${password}"}) {
          jwt
      }
    }`}),
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin">
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>

              <input type="text" className="form-control"
                placeholder="Name" onChange={(event) => { this.setName(event.target.value) }} required />

              <input type="email" className="form-control"
                placeholder="Email address" onChange={(event) => { this.setEmail(event.target.value) }} required />

              <input type="password" className="form-control"
                placeholder="Password" onChange={(event) => { this.setPassword(event.target.value) }} required />

              <input type="password" className="form-control"
                placeholder="Confirm Password" onChange={(event) => { this.setConfirm(event.target.value) }} required />

              <button className="btn btn-lg btn-primary btn-block text-uppercase"
              onClick={()=>{this.CreateUser()}}>
              Register
              </button>

              <div className="register"><Link to='/'> Already have an account? Click here to LogIn</Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegister;
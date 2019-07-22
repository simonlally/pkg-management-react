import React from 'react';

import { Redirect } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';


class login extends React.Component { 
  
  
  constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "", 
        isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  


  validate() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }  

  handleClick(event) {
    event.preventDefault();
    console.log();
    //const localUrl = "http://localhost:5000/mydb-34040/us-central1/api/login";
    const loginUrl = "https://us-central1-mydb-34040.cloudfunctions.net/api/login";
    const user = {
      "email": this.state.email,
      "password": this.state.password,
    }

    console.log(user);

    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
    Axios.post(loginUrl, user, headers)
      .then((res) => {
        console.log(res);
        this.setState({isLoggedIn: true});
      })
      .catch((err) => {
        console.error(err);
      })

  }
 
render() {
  return (
    <div className="Login">
      <h1>Login</h1>
      <TextField 
        hinttext="Enter your email to login"
        floatinglabeltext="email"
        onChange={(event) => this.setState({email: event.target.value})}
      >
     </TextField>
     <TextField 
        hinttext="Enter your password to login"
        floatinglabeltext="passwrd"
        onChange={(event) => this.setState({password: event.target.value})}
      >
     </TextField>
     <Button color="primary" label="submit" onClick={(event) => this.handleClick(event)}> </Button>
     {this.state.isLoggedIn && (<Redirect to="/tenantHome" push />)}
    </div>
    );
  }

}


export default login;
import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';


class login extends React.Component { 
  
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  
  validate() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }  

  handleClick(event) {
    console.log();
    const loginUrl = "http://localhost:5000/mydb-34040/us-central1/api/login";
    const user = {
      "email": "test@test.com",
      "password": "test1234"
    }

    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
    Axios.post(loginUrl, user, headers)
      .then((res) => {
        console.log(res);
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
        onChange={(event, newValue) => this.setState({email: newValue})}
      >
     </TextField>
     <TextField 
        hinttext="Enter your password to login"
        floatinglabeltext="passwrd"
        onChange={(event, newValue) => this.setState({password: newValue})}
      >
     </TextField>
     <Button  label="submit" onClick={(event) => this.handleClick(event)}> </Button>
    </div>
    );
  }

}


export default login;
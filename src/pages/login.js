import React from 'react';
import Axios from 'axios';

import { Redirect } from 'react-router-dom';

// Material UI 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class login extends React.Component { 
  
  constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "", 
        isLoggedIn: false,
        token: "",
        isStaff: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  
  
  validate() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }  

  handleClick(event) {
    event.preventDefault();
    console.log();
    //const localUrl = "http://localhost:5000/mydb-34040/us-central1/api";
    const loginUrl = "https://us-central1-mydb-34040.cloudfunctions.net/api/login";
    const user = {
      "email": this.state.email,
      "password": this.state.password,
    }

    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
    Axios.post(loginUrl, user, headers)
      .then((res) => {
        console.log("*****");
        console.log(res);
        console.log("this is the console log after res");
        this.setState({token: res.data.token});
        this.setState({isLoggedIn: true});
      })
      .catch((err) => {
        console.error(err);
      })
    
    Axios.get('https://us-central1-mydb-34040.cloudfunctions.net/api/isstaff')
      .then(res => {
        var staff;
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].email === user.email) {
            staff = res.data[i].isStaff;
          }
        }
        this.setState({isStaff: staff});
        console.log("IS STAFF????")
        console.log(this.state.isStaff);
      })
      .catch(err => {
        console.log(err);
      })

  }
 
render() {
  return (
    <div className='container'>
      <Grid direction="column" alignItems="center" justify="center" container spacing={3}>
        <Grid item xs={12}>
          <h1>Login</h1>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email" 
            margin="normal" 
            onChange={(event) => this.setState({email: event.target.value})}>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-password-input"
            type="password"
            autoComplete="current-password"
            label="Password" 
            margin="normal" 
            onChange={(event) => this.setState({password: event.target.value})} >
        </TextField>
        </Grid>
        <Grid item xs={12}>
        <Button size="large" variant="contained" color="secondary" label="submit" onClick={(event) => this.handleClick(event)}>Submit</Button>
        </Grid>
      </Grid>
      {this.state.isLoggedIn && !this.state.isStaff && (
        <Redirect to={{
          pathname:"/tenantHome", 
          state: {token: this.state.token} }}
          push />
          )}
        {this.state.isLoggedIn && this.state.isStaff && (
        <Redirect to={{
          pathname:"/manager", 
          state: {token: this.state.token} }}
          push />
          )}
    </div>
    );
  }

}

 

export default login;
import React from 'react';
import Axios from 'axios';

import Logout from '../components/Logout';


// import firebase from 'firebase';
// firebase.initializeApp(config);

class tenantHome extends React.Component { 

  constructor(props) {
    super(props);
      
    this.state = {
        packageID: "",
        pickedUp: false,
        recipient: "",
        received: null,
        receivedBy: "",
    };

  }  

  componentDidMount() {
    this.setState({token: this.props.location.state.token});
    console.log(this.props.location.state)
  
      const getPackagesUrl = "https://us-central1-mydb-34040.cloudfunctions.net/api/packages";

      Axios.get(getPackagesUrl)
        .then(res => {
          this.setState(
            {
              packageID: res.data[0].packageID, 
              recipient: res.data[0].recipient,
              received: res.data[0].received,
              receivedBy: res.data[0].receivedBy, 
              pickedUp: false,
            })
            console.log("RES *****");
            console.log(res.data);
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        })
  }

  render() {
    return (
      <div>
        <h1>Tenant Home Page</h1>
          <div>
            <p> Package ID: {this.state.packageID}</p>
            <p> Recipient: {this.state.recipient}</p>
          </div>
          <Logout />
      </div>
    )
  }
}

export default tenantHome;

import React from "react";
import Axios from "axios";

import Logout from "../components/Logout";

// import firebase from 'firebase';
// firebase.initializeApp(config);

class tenantHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: [],
      users: [],
      token: ""
    };
  }

  // show all packages where packages.tenantName === users.handles

  componentDidMount() {
    console.log(this.props.location.state.email);

    const getPackagesUrl =
      "https://us-central1-mydb-34040.cloudfunctions.net/api/packages";

    Axios.get(getPackagesUrl)
      .then(res => {
        for (var i = 0; i < res.data.length; i++) {
          this.state.packages.push(res.data[i]);
        }
      })
      .catch(err => {
        console.log(err);
      });

    const getAllUsersUrl =
      "https://us-central1-mydb-34040.cloudfunctions.net/api/getallusers";
    Axios.get(getAllUsersUrl)
      .then(res => {
        for (var i = 0; i < res.data.length; i++) {
          this.state.users.push(res.data[i]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Tenant Home Page</h1>
        <div>
          <p> Package ID: {this.state.packageID}</p>
        </div>
        <Logout />
      </div>
    );
  }
}

export default tenantHome;

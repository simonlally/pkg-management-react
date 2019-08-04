import React from "react";
import Axios from "axios";

import Logout from "../components/Logout";
import { ListItemText, ListItem, ListSubheader } from "@material-ui/core";

class tenantHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: []
    };
  }

  // show all packages where packages.tenantName === users.handles

  componentDidMount() {
    const userHandle = this.props.location.state.handle;

    const user = {
      handle: userHandle
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    const getPackagesUrl =
      "https://us-central1-mydb-34040.cloudfunctions.net/api/getpackages";

    Axios.post(getPackagesUrl, user, headers)
      .then(res => {
        this.setState({
          packages: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default tenantHome;

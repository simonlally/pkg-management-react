import React from "react";
import Axios from "axios";

import Logout from "../components/Logout";
import { ListItemText, ListItem, Container } from "@material-ui/core";
import { Check, Package } from "react-feather";

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
        console.log(this.state.packages);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <div>
          <ul>
            {this.state.packages.map(pkg => {
              return (
                <ListItem
                  key={pkg.packageId}
                  style={{
                    backgroundColor: pkg.isPickedUp ? "aliceblue" : "#ffd70070",
                    margin: "15px"
                  }}
                >
                  {pkg.isPickedUp && <Check style={{ padding: "12px" }} />}
                  {!pkg.isPickedUp && <Package style={{ padding: "12px" }} />}
                  <ListItemText
                    primary={pkg.packageDescription}
                    secondary={pkg.receivedAt}
                  />
                  <p />
                  <p>Received by staff: {pkg.staffName}</p>
                </ListItem>
              );
            })}
          </ul>
        </div>
        <Logout />
      </Container>
    );
  }
}

export default tenantHome;

import React from "react";
import Axios from "axios";

import Logout from "../components/Logout";
import { Link } from "react-router-dom";

import { Check } from "react-feather";

// Material UI
// import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
// import Grid from '@material-ui/core/Grid';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import ListSubheader from "@material-ui/core/ListSubheader";
import { Checkbox, Container } from "@material-ui/core";
//import FormControlLabel from "@material-ui/core/FormControlLabel";

class showPackages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pkgs: []
    };
  }

  componentDidMount() {
    console.log("packages component mounted");
    const url =
      "https://us-central1-mydb-34040.cloudfunctions.net/api/packages";
    Axios.get(url)
      .then(res => {
        console.log(res);
        this.setState({
          pkgs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Button
          component={Link}
          to="/manager"
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        <div>
          <ul>
            {this.state.pkgs.map(pkg => {
              return (
                <ListItem
                  key={pkg.packageId}
                  style={{
                    backgroundColor: pkg.isPickedUp ? "aliceblue" : "#ffd70070",
                    margin: "15px"
                  }}
                >
                  {pkg.isPickedUp && <Check style={{ padding: "12px" }} />}
                  {!pkg.isPickedUp && <Checkbox style={{ padding: "12px" }} />}
                  <ListItemText
                    primary={pkg.packageDescription}
                    secondary={pkg.receivedAt}
                  />
                  <p>For tenant: {pkg.tenantName}</p>
                  <br></br>
                  <p> &nbsp; </p>
                  <p> Received by staff: {pkg.staffName}</p>
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

export default showPackages;

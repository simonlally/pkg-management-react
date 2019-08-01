import React from "react";
import Axios from "axios";

// Material UI
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class showPackages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pkgs: []
    };
  }

  componentDidMount() {
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
    return this.state.pkgs.map(pkg => {
      return (
        <React.Fragment key={pkg.id}>
          <ListItem key={pkg.id} divider={true}>
            <ListItemText
              primary={pkg.packageDescription}
              secondary={pkg.tenantName}
            />
            <ListSubheader>Received by staff: {pkg.staffName}</ListSubheader>
            <ListSubheader>Date received: {pkg.receivedAt}</ListSubheader>
            <FormControlLabel
              control={<Checkbox value="checkedB" color="primary" />}
              label="Picked Up"
            />
          </ListItem>
        </React.Fragment>
      );
    });
  }
}

export default showPackages;

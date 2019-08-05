import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Linwood Package Management
          </Typography>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/login">
            Login
          </Button>
          <Button component={Logout} to="/logout">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;

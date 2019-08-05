import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Package } from "react-feather";

class home extends React.Component {
  render() {
    return (
      <div>
        <h1>Linwood Management Home {<Package/>}</h1>
        
        <p>Welcome to the Package Management System</p>
        <p>Tenants and Staff may login below:</p>
        <Button
          component={Link}
          to="/login"
          color="secondary"
          variant="contained"
        >
          Login
        </Button>
      </div>
    );
  }
}

export default home;

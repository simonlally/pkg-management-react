import React from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

// Material UI
import Button from "@material-ui/core/Button";

class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // probably should rename this variable sooner than later
      test: false
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    var url = "https://us-central1-mydb-34040.cloudfunctions.net/api/logout";
    //var url = 'http://localhost:5000/mydb-34040/us-central1/api/logout';
    console.log("plz");
    Axios.get(url).then(res => {
      console.log(res);
      if (res.status === 200) {
        this.setState({ test: true });
      } else {
        // err
      }
    });
    console.log("done");
  }

  render() {
    return (
      <div>
        <Button onClick={this.logout} variant="contained" color="secondary">
          Log Out
        </Button>
        {this.state.test && (
          <Redirect
            to={{
              pathname: "/login"
            }}
            push
          />
        )}
      </div>
    );
  }
}

export default Logout;

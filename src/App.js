import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import home from "./pages/home";
import login from "./pages/login";
import tenantHome from "./pages/tenantHome";
import register from "./pages/register";
import newPackage from "./pages/newPackage";

import manager from "./pages/manager";
import showPackages from "./pages/showPackages";
// import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          {/* <Navbar/> */}
          <Container className="main-div">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/register" component={register} />
              <Route exact path="/newpkg" component={newPackage} />
              <Route exact path="/showpkgs" component={showPackages} />
              <Route exact path="/tenanthome" component={tenantHome} />
              <Route exact path="/manager" component={manager} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;

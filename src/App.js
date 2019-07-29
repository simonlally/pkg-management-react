import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import home from './pages/home';
import register from './pages/register';
import login from './pages/login';
import tenantHome from './pages/tenantHome';

import Navbar from './components/Navbar';
import manager from './pages/manager';


class App extends React.Component { 
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/register" component={register}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/tenanthome" component={tenantHome}/>
            <Route exact path="/manager" component={manager}/>
          </Switch>
          </div>

        </Router>
      </div>
    )
  }
}

export default App;

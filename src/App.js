import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import home from './pages/home';
import register from './pages/register';
import login from './pages/login';

import Navbar from './components/Navbar';


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
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;

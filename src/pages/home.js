import React from 'react';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class home extends React.Component { 
  render() {
    return (
      <div>
        <h1>Linwood Management Home</h1>
        <p>Welcome to the Package Management System</p>
        <Button 
          component={Link} 
          to="/login"
          color="secondary"
          variant="contained"
        >Login</Button>
      </div>
    )
  }
}

export default home;

import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends React.Component {
    render() {
        return(
            <AppBar>
                <Toolbar>
                    <Button component={Link} to="/login">Login</Button>
                    <Button component={Link} to="/">Home</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;
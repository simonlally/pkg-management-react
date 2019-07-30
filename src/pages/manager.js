import React from 'react';
import './manager.css';

// Components
import Register from '../components/Register';
import Logout from '../components/Logout';

// Material UI
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class manager extends React.Component { 

    constructor(props) {
        super(props);

        this.state = {
            newTenant: false,
            newPackage: false,
            viewAllPackages: false,
        }
    }

    render() {
        return (
            <div>
                <h1>Linwood Management Frontdesk</h1>
                <h2>Package Management System</h2>
                <div className="container">
                    <h3>Add a new package</h3>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={(event) => {this.setState({newTenant: true, viewAllPackages: false, newPackage: false})} }
                            >Create New Tenant Account</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={(event) => {this.setState({newPackage: true, viewAllPackages: false, newTenant: false})} }
                            >Enter New Package</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={(event) => {this.setState({viewAllPackages: true, newTenant: false, newPackage: false})} }
                            >View All Packages</Button>
                        </Grid>
                        <Grid item xs={16}>
                            <Logout />
                        </Grid>
                    </Grid>
                </div>
                <div className="container2">
                    {this.state.newTenant && (
                        <Register/>
                    )}
                </div>
                
            </div>
        )
    }
}

export default manager;
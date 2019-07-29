import React from 'react';
import Logout from '../components/Logout';

// Material UI
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class manager extends React.Component { 


    render() {
        return (
            <div>
                <h1>Frontdesk Staff Home</h1>
                <div className="container">
                    <h3>Add a new package</h3>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField 
                                margin="normal"
                                onChange={(event) => this.setState()}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                onChange={(event) => this.setState()}>
                            </TextField>
                        </Grid>
                    </Grid>
                </div>
                <Logout />
            </div>
        )
    }
}

export default manager;
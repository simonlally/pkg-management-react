import React from 'react';
import Axios from 'axios';

import { Redirect } from 'react-router-dom';

// Material UI 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class newPackage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tenantName: "",
            staffName: "",
            packageDetails: "",
            isPickedUp: false,
            receivedAt: new Date().toISOString,
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form className="new-package-form" > 
              <Grid 
                direction="column"
                container
                alignItems="center"
                justify="center"
                spacing={3}>
                <h3>Enter New Package Information</h3>
                <Grid item xs={12}> 
                  <TextField
                    type="text"
                    placeholder="Tenant Name"
                    > 
                  </TextField>
                </Grid>
                <Grid item xs={12}> 
                  <TextField
                    type="text"
                    placeholder="Frontdesk Staff Name"
                    > 
                  </TextField>
                </Grid>
                <Grid item xs={12}> 
                    <TextField
                      label="Package Details"
                      rowsMax="4"
                      margin="normal"
                      variant="outlined"
                    >
                    </TextField>
                </Grid>
                <Button 
                  color="secondary" 
                  variant="contained"
                >Submit New Package</Button>
              </Grid> 
            
            </form>
            {this.state.success && (
              <Redirect to="manager"
              />
            )}
          </div>
        )
    }

}

export default newPackage;
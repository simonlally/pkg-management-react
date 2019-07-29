import React from 'react';
import Axios from 'axios';

import { Redirect } from 'react-router-dom';

class Logout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // probably should rename this variable sooner than later
            test: false,
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        console.log("plz");
        Axios.get('https://us-central1-mydb-34040.cloudfunctions.net/api/logout')
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    this.setState({test: true});
                } else {
                    // err
                }
            })
        console.log("done");
    }

    render() {
        return (
            <div>
              <button onClick={this.logout}>Log Out</button>
              {this.state.test && (
                <Redirect to={{
                    pathname:"/login", 
                     }}
                    push />
                    )}
            </div>
        )
    }
}

export default Logout;
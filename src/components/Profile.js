import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user,isAuthenticated } = this.props.auth0;
    // const user = this.props.auth0.user;
    // const isAuthenticated = this.props.auth0.isAuthenticated;

    return isAuthenticated && (
        <>
        <img src={user.picture} alt="test"/>
        <div>Hello {user.name}</div>
        <div>Hello {user.email}</div>
        </>
    )
  }
}

export default withAuth0(Profile);
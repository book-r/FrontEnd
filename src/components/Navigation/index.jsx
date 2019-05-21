import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkAuth, logout } from '../../actions';

const Navigation = (props) => {
  // props.checkAuth();

  const handleLogOut = () => {
    // TODO: Refactor once auth is available on the backend
    props.logout();
    props.history.push('/');
  }

  return (
    <nav>
      <div>
        Navigation Component
      </div>
      {
        props.auth ? <span onClick={handleLogOut}>Log Out</span> : <span>Log In</span>
      }
    </nav>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});
 
export default withRouter(connect(mapStateToProps, { checkAuth, logout })(Navigation));

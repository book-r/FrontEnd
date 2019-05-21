import React from 'react';
import { connect } from 'react-redux';

import { checkAuth } from '../../actions';

const Navigation = (props) => {
  props.checkAuth();

  return (
    <nav>
      <div>
        Navigation Component
      </div>
      {
        props.auth ? <span>Logged In</span> : <span>Logged Out</span>
      }
    </nav>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});
 
export default connect(mapStateToProps, { checkAuth })(Navigation);

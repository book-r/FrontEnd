import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions';
import logo from '../../assets/bookr_logo_white.png';
import style from './Navigation.module.scss';

const Navigation = (props) => {

  const handleLogOut = () => {
    props.logout();
    props.history.push('/');
  }

  const Join = () => {
    return (
      <Link className={style.Navigation__join} to='/join'>Sign Up</Link>
    )
  }

  return (
    <div className={style.Navigation}>
      <nav>
        <Link to='/' className={style.Navigation__logo}>
          <img src={logo} alt='booker logo' />
        </Link>
        {
          props.auth ? <span className={style.Logout} onClick={handleLogOut}>Log Out</span> : <Route path='/featured' component={Join} /> // : <Link to='/login'>Log In</Link>
        }
      </nav>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});
 
export default withRouter(connect(mapStateToProps, { logout })(Navigation));

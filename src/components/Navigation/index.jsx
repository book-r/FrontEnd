import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions';
import logo from '../../assets/bookr_logo_white.png';
import style from './Navigation.module.scss';

const Navigation = (props) => {

  const handleLogOut = () => {
    props.logout();
    props.history.push('/');
  }

  return (
    <div className={style.Navigation}>
      <nav>
        <div className={style.Navigation__logo}>
          <img src={logo} alt='booker logo' />
        </div>
        {
          props.auth && <span className={style.Logout} onClick={handleLogOut}>Log Out</span> // : <Link to='/login'>Log In</Link>
        }
      </nav>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});
 
export default withRouter(connect(mapStateToProps, { logout })(Navigation));

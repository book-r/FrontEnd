import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import style from './App.module.scss';
import AuthForm from './AuthForm';
import Catalog from './Catalog';
import FeaturedBook from './FeaturedBook';
import BookDetail from './BookDetail';
import PrivateRoute from './PrivateRoute';
import Navigation from './Navigation';
import { checkAuth } from '../actions';

const App = (props) => {
  props.checkAuth();
  return (
    <div className={style.App}>
      <Navigation />

      <Switch>
        <Route path='/login' component={AuthForm} />
        <Route path='/join' component={AuthForm} />
        <Route path='/featured/:id' component={FeaturedBook} />
  
        <PrivateRoute path='/book/:id' component={BookDetail} />
        <PrivateRoute path='/' exact component={Catalog} />
  
        <Route render={() => <Redirect to='/'/>} />
      </Switch>
    </div>
  );
}

export default connect(null, { checkAuth })(App);

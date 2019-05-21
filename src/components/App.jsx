import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import AuthForm from './AuthForm';
import Catalog from './Catalog';
import FeaturedBook from './FeaturedBook';
import BookDetail from './BookDetail';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route path='/login' component={AuthForm} />
      <Route path='/join' component={AuthForm} />
      <Route path='/featured/:id' component={FeaturedBook} />

      <PrivateRoute path='/book/:id' component={BookDetail} />
      <PrivateRoute path='/catalog' component={Catalog} />
    </div>
  );
}

export default App;

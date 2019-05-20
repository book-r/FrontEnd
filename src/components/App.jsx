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
      <Catalog />

      <Route
        path='/login'
        component={AuthForm}
      />
      <PrivateRoute
        path='/book/:id'
        component={BookDetail}
      />
      <Route
        path='/featured/:id'
        component={FeaturedBook}
      />
    </div>
  );
}

export default App;

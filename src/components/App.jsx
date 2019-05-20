import React from 'react';

import './App.css';
import AuthForm from './AuthForm';
import FeaturedBook from './FeaturedBook';
import Catalog from './Catalog';

function App() {
  return (
    <div className="App">
      <AuthForm />
      <FeaturedBook />
      <Catalog />
    </div>
  );
}

export default App;

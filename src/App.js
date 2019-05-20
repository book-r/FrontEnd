import React from 'react';

import './App.css';
import AuthForm from './components/AuthForm';
import FeaturedBook from './components/FeaturedBook';
import Catalog from './components/Catalog';

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

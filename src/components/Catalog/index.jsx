import React, { Component } from 'react';
import Book from './Book';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    // Dispatch action to pull catalog data
  }

  render() { 
    return (
      <div className="Catalog">
        <h1>List of Books</h1>
        <Book />
      </div>
    );
  }
}
 
export default Catalog;

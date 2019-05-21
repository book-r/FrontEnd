import React, { Component } from 'react';
import { connect } from 'react-redux';

import Book from './Book';
import { getBooks } from '../../actions';

class Catalog extends Component {

  componentDidMount() {
    // Dispatch action to pull catalog data
    console.log('mounted');
    this.props.getBooks();
  }

  render() { 
    return (
      <div className="Catalog">
        <h1>List of Books</h1>
        {
          this.props.books.map(book => (
            <Book {...book} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books
});
 
export default connect(mapStateToProps, { getBooks })(Catalog);

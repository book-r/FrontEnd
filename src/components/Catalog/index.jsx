import React, { Component } from 'react';
import { connect } from 'react-redux';

import Book from './Book';
import { getBooks } from '../../actions';

class Catalog extends Component {

  componentDidMount() {
    // Dispatch action to pull catalog data
    this.props.getBooks();
  }

  render() { 
    return (
      <div className="Catalog">
        <h3>Catalog Page</h3>
        {
          this.props.books.map(book => (
            <Book {...book} key={book.id} />
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

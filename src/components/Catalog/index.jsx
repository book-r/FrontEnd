import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from '../../actions';
import Book from './Book';
import style from './Catalog.module.scss';


class Catalog extends Component {

  componentDidMount() {
    // Dispatch action to pull catalog data
    this.props.getBooks();
  }

  render() { 
    return (
      <div className={style.Catalog}>
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

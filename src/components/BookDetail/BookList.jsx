import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './BookDetail.module.scss';
import { getBySubject } from '../../actions';

class BookList extends Component {
  
  componentDidMount() {
    getBySubject();
  }

  render() {
    const subject = this.props.subjects ? this.props.subjects[0].name : '';
    return (
      <div className={style.BookList}>
        <h3>Other {subject} Books</h3>
        {
          this.props.relatedBooks.map(books => <div>{books.title}</div>)
        }
      </div>
    );
  }
}

const mapStateToProps = ({ relatedBooks }) => ({
  relatedBooks,
})

export default connect(mapStateToProps, { getBySubject })(BookList);

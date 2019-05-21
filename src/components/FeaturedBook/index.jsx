import React from 'react';
import { connect } from 'react-redux';

import BookDetail from '../BookDetail';
import { getBook } from '../../actions';

const FeaturedBook = (props) => {
  const { match, getBook } = props;
  getBook(match.params.id);
  return (
    <div className="FeaturedBook">
      <h3>Featured Book Page, renders Book Detail</h3>
      <p>Has additional business logic to restrict books to only featured</p>
      {
        props.featured
          ? <BookDetail />
          : <div>You must login to view this book</div>
      }
    </div>
  );
}

const mapStateToProps = ({ bookDetail }) => ({
  featured: bookDetail.featured,
});
 
export default connect(mapStateToProps, { getBook })(FeaturedBook);

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import BookDetail from '../BookDetail';
import { getBook } from '../../actions';

const FeaturedBook = (props) => {
  const { match, getBook } = props;
  getBook(match.params.id);

  const redirectToJoin = () => {
    props.history.push('/join');
  }

  return (
    <div className="FeaturedBook">
      {
        props.auth && <Redirect to={`/book/${match.params.id}`} />
      }
      {
        props.featured
          ? <BookDetail redirectToJoin={redirectToJoin} />
          : <Redirect to='/join' />
      }
    </div>
  );
}

const mapStateToProps = ({ bookDetail: { featured = true }, auth }) => ({
  featured,
  auth,
});
 
export default connect(mapStateToProps, { getBook })(FeaturedBook);

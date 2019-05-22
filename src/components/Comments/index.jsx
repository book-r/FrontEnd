import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';

const Comments = (props) => {
  return (
    <div>
      Comment Box
      {props.reviews.map(review => <Comment {...review} key={review.id} />)}
    </div>
  );
}

const mapStateToProps = ({ bookDetail: { id, reviews } }) => ({
  id,
  reviews,
});

export default connect(mapStateToProps, { })(Comments);

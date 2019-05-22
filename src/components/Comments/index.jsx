import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';

const Comments = (props) => {
  return (
    <div>
      Comment Box
      {props.reviews.map(review => <Comment {...review} key={review.id} userId={props.userId} />)}
    </div>
  );
}

const mapStateToProps = ({ bookDetail: { id, reviews }, user: { id: userId } }) => ({
  id,
  reviews,
  userId,
});

export default connect(mapStateToProps, { })(Comments);

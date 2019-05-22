import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import style from './Comments.module.scss'

const Comments = (props) => {
  return (
    <div className={style.Comments}>
      <h3>Reviews</h3>
      {props.reviews.map(review => review.comment && <Comment {...review} key={review.id} userId={props.userId} />)}
    </div>
  );
}

const mapStateToProps = ({ bookDetail: { id, reviews }, user: { id: userId } }) => ({
  id,
  reviews,
  userId,
});

export default connect(mapStateToProps, { })(Comments);

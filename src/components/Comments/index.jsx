import React from 'react';
import { connect } from 'react-redux';

import { deleteReview } from '../../actions';
import Comment from './Comment';
import style from './Comments.module.scss'

const Comments = (props) => {
  return (
    <div className={style.Comments}>
      <h3>Reviews</h3>
      <div className={style.Comments__create} onClick={props.handleToggleReview}>
        {
          props.user_review ? 'Edit Review' : 'Write a Review'
        }
      </div>
      {props.reviews.map(review => review.comment && <Comment{...review} key={review.id} deleteReview={props.deleteReview} userId={props.userId} />)}
    </div>
  );
}

const mapStateToProps = ({ bookDetail: { id, reviews }, user: { id: userId } }) => ({
  id,
  reviews,
  userId,
});

export default connect(mapStateToProps, { deleteReview })(Comments);

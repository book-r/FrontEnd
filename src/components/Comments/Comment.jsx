import React from 'react';
import ReactStars from 'react-stars';
import style from './Comments.module.scss';

const Comment = (props) => {
  const deleteReview = () => {
    console.log(props);
    props.deleteReview(props.id);
  }
  return (
    <div className={style.Comment}>
      <span className={style.Comment__username}>{props.username} {props.userId === props.user_id && '(You)'}</span>
      <ReactStars
        className={style.Comment__rating}
        value={props.rating}
        edit={false}
        size={24}
      />
      <div className={style.Comment__comment}>
        {props.comment}
      </div>
      { props.userId === props.user_id && <span onClick={deleteReview} className={style.Comment__delete}>&times;</span> }
    </div>
  );
}
 
export default Comment;

import React from 'react';
import ReactStars from 'react-stars';
import style from './Comments.module.scss';

const Comment = (props) => {
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
    </div>
  );
}
 
export default Comment;

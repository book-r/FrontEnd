import React from 'react';

const Comment = (props) => {
  return (
    <div>
      <div>
        {props.rating}
      </div>
      <div>
        {props.comment}
      </div>
      <span>by {props.username} {props.userId === props.id && '(You)'}</span>

    </div>
  );
}
 
export default Comment;

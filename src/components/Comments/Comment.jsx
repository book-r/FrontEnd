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
      <span>by {props.username}</span>

    </div>
  );
}
 
export default Comment;

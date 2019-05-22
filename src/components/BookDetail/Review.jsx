// Modal for reviewing a book
import React from 'react';

const Review = (props) => {

  const handleOnSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      Review Component
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          placeholder='Comment'
        />
      </form>
    </div>
    
  );
}
 
export default Review;

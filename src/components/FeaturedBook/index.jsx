import React from 'react';

import BookDetail from '../BookDetail';

const FeaturedBook = (props) => {
  return (
    <div className="FeaturedBook">
      <h3>Featured Book Page, renders Book Detail</h3>
      <p>Has additional business logic to restrict books to only featured</p>
      <BookDetail {...props} />
    </div>
  );
}
 
export default FeaturedBook;

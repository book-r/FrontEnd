import React from 'react';

import style from './Catalog.module.scss';

const Book = (props) => {
  console.log(props);
  return (
    <div className={style.Book}>
      <h3>Book Item</h3>

    </div>
    // Link to props.id
  );
}
 
export default Book;

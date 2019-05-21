import React from 'react';
import { Link } from 'react-router-dom';

import style from './Catalog.module.scss';

const Book = (props) => {
  return (
    <Link className={style.Book} to={`/book/${props.id}`}>
      <h3>{props.title}</h3>
    </Link>
  );
}
 
export default Book;

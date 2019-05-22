import React from 'react';
import { Link } from 'react-router-dom';

import style from './Catalog.module.scss';

const Book = (props) => {
  return (
    <Link className={style.Book} to={`/book/${props.id}`}>
      <img src={props.cover_url} alt={props.title} />
    </Link>
  );
}
 
export default Book;

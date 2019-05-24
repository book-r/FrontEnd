import React from 'react';
import { Link } from 'react-router-dom';

import style from './Catalog.module.scss';

const Book = (props) => {
  const imgError = (event) => {
    event.target.style.display = 'none';
  }
  return (
    <Link className={style.Book} to={`/book/${props.id}`}>
      <div className={style.Book__image}>
        <img src={props.cover_url} onError={imgError} alt={props.title} />
        <div className={style.Book__image__backup}>
          <div className={style.Book__image__title}>{props.title}</div>
        </div>
      </div>
    </Link>
  );
}
 
export default Book;

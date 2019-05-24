import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';

import { getBook, submitReview, deleteBook } from '../../actions';
import convertISBN from '../../helpers/isbn';
import Review from './Review';
import style from './BookDetail.module.scss';
import Comments from '../Comments';

class BookDetail extends Component {
  state = {
    reviewing: false,
  };
  
  componentDidMount() {
    const { match, getBook } = this.props;
    // const id = this.props.subjects ? this.props.subjects[0].id : null;
    if (match) {
      getBook(match.params.id);
    }
    // if (id) {
    //   this.props.getBySubject(id);
    // }
  }

  handleSubmitReview = review => {
    this.props.submitReview({
      ...review,
      book_id: this.props.id,
      user_id: this.props.userId,
    });
  }

  handleToggleReview = () => {
    if (!this.props.match) {
      this.props.redirectToJoin();
    } else {
      this.setState({
        ...this.state,
        reviewing: !this.state.reviewing,
      });
    }
  }

  imgError = (event) => {
    event.target.style.display = 'none';
  }

  onLoad = (event) =>  {
    event.target.style.display = 'block';
  }

  onDeleteBook = () => {
    this.props.deleteBook();
    this.props.history.push('/');
  }

  render() {
    console.log(this.props)
    return (
      <div className={style.BookDetail}>
        <div className={style.BookDetail__info}>
          <div className={style.BookDetail__image}>
            <img src={this.props.cover_url} onLoad={this.onLoad} onError={this.imgError} alt={this.props.title} />
            <div className={style.BookDetail__image__backup}>
              <div className={style.BookDetail__image__title}>{this.props.title}</div>
            </div>
            
          </div>

          <div className={style.BookDetail__info__block}>
            <h3 className={style.BookDetail__title}>
              {this.props.title}
            </h3>
            {
              this.props.authors.length > 0 && <div>By {this.props.authors.reduce((prev, current) => {
                if (prev) {
                  return prev + ', ' + current.name;
                }
                return current.name;
              }, '')}</div>
            }
            <div className={style.BookDetail__publisher}>Published By {this.props.publisher}</div>
            <div className={style.BookDetail__rating__wrapper}>
              <ReactStars
                value={this.props.average}
                count={5}
                size={18}
                edit={false}
                color2={'#ffd700'}
                className={style.BookDetail__rating}
              />
              <span className={style.BookDetail__review} onClick={this.handleToggleReview}>
                {
                  !this.props.user_review ? '(review)' : '(edit review)'
                }
              </span>
            </div>
            <div className={style.BookDetail__description}>{this.props.description}</div>
            { this.props.isbn
              && <a
                className={style.BookDetail__buyButton}
                target='_blank'
                rel='noopener noreferrer'
                href={`https://www.amazon.com/dp/product/${convertISBN(this.props.isbn.toString())}`}
              >Buy</a> }
          </div>
          {
            this.props.roles.indexOf('admin') >= 0
              && <span
                onClick={this.onDeleteBook}
                className={style.BookDetail__delete}
              >
                &times;
              </span>
          }
        </div>

        <Comments
          handleToggleReview={this.handleToggleReview}
          user_review={this.props.user_review}
        />
        {
          this.state.reviewing && <Review
            handleToggleReview={this.handleToggleReview}
            handleSubmitReview={this.handleSubmitReview}
            title={this.props.title}
            cover_url={this.props.cover_url}
            user_review={this.props.user_review}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ bookDetail, user: { id: userId, roles }, relatedBooks }) => ({
  ...bookDetail,
  userId,
  relatedBooks,
  roles,
});
 
export default connect(mapStateToProps, {
  getBook,
  submitReview,
  // getBySubject,
  deleteBook,
})(BookDetail);

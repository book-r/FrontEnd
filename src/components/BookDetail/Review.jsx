import React, { Component } from 'react';
import ReactStars from 'react-stars'

import style from './BookDetail.module.scss';

class Review extends Component {
  state = {
    rating: 1,
    comment: '',
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleBlur, false);
    
    if (this.props.user_review) {
      this.setState({
        ...this.state,
        rating: this.props.user_review.rating,
        comment: this.props.user_review.comment,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleBlur, false);
  }

  handleBlur = event => {
    if (!this.node.contains(event.target)) {
      this.props.handleToggleReview();
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.handleSubmitReview({
      ...this.state,
      id: this.props.user_review ? this.props.user_review.id : null,
    });
    this.props.handleToggleReview();
  }

  handleRating = rating => {
    this.setState({
      ...this.state,
      rating,
    });
  }

  handleComment = event => {
    this.setState({
      ...this.state,
      comment: event.target.value,
    });
  }

  render() {
    return (
      <div className={style.ReviewModal}>
        <div className={style.ReviewModal__overlay}>
          <div className={style.ReviewModal__form} ref={node => this.node = node}>
            <h2>Create Review</h2>
            <div className={style.ReviewModal__header}>
              <img className={style.ReviewModal__image__thumbnail} src={this.props.cover_url} alt={`${this.props.title} cover thumbnail`}/>
              <h3 className={style.ReviewModal__title}>{this.props.title}</h3>
            </div>
            <h3>Rating</h3>
            <ReactStars
              value={this.state.rating}
              count={5}
              onChange={this.handleRating}
              size={42}
              color2={'#ffd700'}
              className={style.ReviewModal__form__stars}
            />
            <h3>Write your review</h3>
            <form onSubmit={this.handleOnSubmit}>
              <textarea
                className={style.ReviewModal__form__comment}
                name="comment"
                id="comment"
                placeholder='This book was...'
                value={this.state.comment}
                onChange={this.handleComment}
              />
              <div className={style.ReviewModal__form__buttons}>
                <input
                  className={style.ReviewModal__form__cancel}
                  type='button'
                  value='Cancel'
                  onClick={this.props.handleToggleReview}
                />
                <input
                  className={style.ReviewModal__form__submit}
                  type='submit'
                  value={ !this.props.user_review ? 'Submit Review' : 'Edit Review' }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Review;

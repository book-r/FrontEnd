import React, { Component } from 'react';
import ReactStars from 'react-stars'

import style from './BookDetail.module.scss';

class Review extends Component {
  state = {
    rating: 0,
    comment: '',
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleBlur, false);
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
    console.log('payload:', {...this.state});
    this.props.handleAddReview({
      ...this.state,
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
            <img className={style.ReviewModal__thumbnail} src={this.props.cover_url} alt={`${this.props.title} cover thumbnail`}/>
            <span className={style.ReviewModal__title}>{this.props.title}</span>
            <hr />
            <h3>Rating</h3>
            <ReactStars
              value={this.state.rating}
              count={5}
              onChange={this.handleRating}
              size={24}
              half={false}
              color2={'#ffd700'}
              className={style.ReviewModal__form__stars}
            />
            <h3>Write your review</h3><span>(optional)</span>
            <form onSubmit={this.handleOnSubmit}>
              <textarea
                className={style.ReviewModal__form__comment}
                name="comment"
                id="comment"
                placeholder="This book was..."
                value={this.state.comment}
                onChange={this.handleComment}
              />
              <input
                type='submit'
                value='Submit Review'
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Review;

import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';

import { getBook, addReview } from '../../actions';
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
    if (match) {
      getBook(match.params.id);
    }
  }

  handleAddReview = review => {
    this.props.addReview({
      ...review,
      book_id: this.props.id,
      user_id: this.props.userId,
    });
  }

  handleToggleReview = () => {
    this.setState({
      ...this.state,
      reviewing: !this.state.reviewing,
    });
  }

  render() { 
    return (
      <div className={style.BookDetail}>
        <h3>
          Single Book Detail Page
        </h3>
        <div className={style.BookDetail__title}>
          {this.props.title}
          <ReactStars
            value={this.props.average}
            count={5}
            size={18}
            edit={false}
            color2={'#ffd700'}
            className={style.BookDetail__rating}
          />
        </div>
        <img src={this.props.cover_url} alt={this.props.title} />
        <div className={style.BookDetail__review} onClick={this.handleToggleReview}>Review</div>
        { this.props.isbn && <a target='_blank' rel='noopener noreferrer' href={`https://www.amazon.com/dp/product/${convertISBN(this.props.isbn.toString())}`}>Buy</a> }
        <div>{this.props.description}</div>
        <Comments />
        {
          this.state.reviewing && <Review
            handleToggleReview={this.handleToggleReview}
            handleAddReview={this.handleAddReview}
            title={this.props.title}
            cover_url={this.props.cover_url}
          />
        }
      </div>
    );
  }
}

// TODO: Cleanup ownProps or use them

const mapStateToProps = ({ bookDetail, user: { id: userId } }) => ({
  ...bookDetail,
  userId,
});
 
export default connect(mapStateToProps, { getBook, addReview })(BookDetail);

import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';


import { getBook, getComments } from '../../actions';
import Review from './Review';
import style from './BookDetail.module.scss';
import Comments from '../Comments';

class BookDetail extends Component {
  state = {
    reviewing: false,
  };
  
  componentDidMount() {
    const { match, getBook, getComments } = this.props;
    if (match) {
      getBook(match.params.id);
      getComments();
    }
  }

  handleToggleReview = (event) => {
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
        <div>{this.props.description}</div>
        <Comments />
        {
          this.state.reviewing && <Review handleToggleReview={this.handleToggleReview} />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ bookDetail }, ownProps) => ({
  ...bookDetail,
  t: ownProps,
});
 
export default connect(mapStateToProps, { getBook, getComments })(BookDetail);

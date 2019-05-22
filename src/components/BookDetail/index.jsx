import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBook } from '../../actions';
import Review from './Review';
import style from './BookDetail.module.scss';

class BookDetail extends Component {
  state = {
    reviewing: false,
  };
  
  componentDidMount() {
    const { match, getBook } = this.props;
    // Dispatch action to get details for this book on props.
    console.log(this.props);
    if (match) {
      getBook(match.params.id);
    }
  }

  handleOnClick = (event) => {
    console.log(this.props);
    this.setState({
      ...this.state,
      reviewing: !this.state.reviewing,
    });
  }

  render() { 
    return (
      <div>
        <h3>
          Single Book Detail Page
        </h3>
        <div>{this.props.title} <span>{this.props.average}</span></div>
        <img src={this.props.cover_url} alt={this.props.title} />
        <div className={style.review} onClick={this.handleOnClick}>Review</div>
        <div>{this.props.description}</div>
        {
          this.state.reviewing && <Review />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ bookDetail }, ownProps) => ({
  ...bookDetail,
  t: ownProps,
});
 
export default connect(mapStateToProps, { getBook })(BookDetail);

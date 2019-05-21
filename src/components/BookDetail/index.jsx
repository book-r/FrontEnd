import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';

import Review from './Review';

class BookDetail extends Component {
  state = {
    reviewing: false,
  };
  
  componentDidMount() {
    // Dispatch action to get details for this book on props.
    // this.props.getBook(props.id);
  }

  handleOnClick = (event) => {
    this.setState({
      ...this.state,
      reviewing: !this.state.reviewing,
    });
  }

  render() { 
    return (
      <div>
        Single Book Detail Page
        <span onClick={this.handleOnClick}>Review</span>
        {
          this.state.reviewing && <Review />
        }
      </div>
    );
  }
}
 
export default BookDetail;
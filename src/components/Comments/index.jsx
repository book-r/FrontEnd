import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import { getComments } from '../../actions';

const Comments = (props) => {
  console.log(props);
  return (
    <div>
      Comment Box
      {props.reviews.map(review => <Comment {...review} />)}
    </div>
  );
}

const mapStateToProps = ({ bookDetail: { id, reviews } }) => ({
  id,
  reviews,
});

export default connect(mapStateToProps, { getComments })(Comments);

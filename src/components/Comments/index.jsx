import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import { getComments } from '../../actions';

const Comments = (props) => {
  // TODO: this will hopefully require an id to get all comments for this specific book
  
  return (
    <div>
      Comment Box
      {props.comments.map(comment => <Comment {...comment} />)}
    </div>
  );
}

const mapStateToProps = ({ bookDetail: { id, comments } }) => ({
  id,
  comments,
});

export default connect(mapStateToProps, { getComments })(Comments);

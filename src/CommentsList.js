import React from 'react';
import Comment from './CommentContainer';
import './styles/ComentsList.css';

const CommentsList = ({comments}) => <ul className="CommentsList">{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;
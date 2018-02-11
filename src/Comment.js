import React from 'react';
import { removeComment } from './actions';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li>
    {text} <span>votes: {votes}</span> 
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb Down</button>
    <button onClick={() => removeComment(id)}>X</button>
  </li>;

export default Comment;
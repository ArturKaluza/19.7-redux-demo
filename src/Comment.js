import React from 'react';
import './styles/Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li className="Comment">
    <div className="text">
      <p>{text}</p>
    </div>
    <div> 
      <span className="votes">votes: {votes}</span>
      <button className="btn" onClick={() => thumbUpComment(id)}>Thumb up</button>
      <button className="btn" onClick={() => thumbDownComment(id)}>Thumb Down</button>
      <button className="btn btn--remove" onClick={() => removeComment(id)}>X</button>
    </div>
  </li>;

export default Comment;
import React from 'react';
import { addComment } from './actions';
import store from './store';
import './styles/AddComment.css'

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.newComment = this.newComment.bind(this);
  }
  
  newComment(e) {
    e.preventDefault();
    if (!!e.target.elements.comment.value.trim()) {
      let text =e.target.elements.comment.value;
      store.dispatch(addComment(text));
      e.target.elements.comment.value = '';
    }     
  };

  render() {
  return (
    <form className="form" onSubmit={this.newComment}>
      <input placeholder='add comment' name="comment" />
      <button>Add</button> 
    </form> 
  )};
  
};

export default AddComment;
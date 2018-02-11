import React from 'react';
import './styles/App.css';
import CommentsListContainer from './CommentsListContainer';
import AddComment from './AddComment';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <AddComment />
    </div>
  );
};

export default App;
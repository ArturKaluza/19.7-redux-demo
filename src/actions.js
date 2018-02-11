import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
};

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id: id
  }
};

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id
  }
};

const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  };
};

export {ADD_COMMENT, addComment, THUMB_UP_COMMENT, thumbUpComment, THUMB_DOWN_COMMENT, thumbDownComment, REMOVE_COMMENT, removeComment};

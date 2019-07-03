const uuidv4 = require("uuid/v4");

const getComment = (parent, { id }, { comments }) => {
  return comments.filter(comment => {
    return comment.id === id;
  })[0];
};

const getComments = (parent, args, { comments }) => {
  if (args.id) {
    let id = args.id;
    return comments.filter(comment => {
      return comment.id === id;
    });
  } else return comments;
};

const addComment = (
  parent,
  { dishId, rating, comment, author },
  { comments }
) => {
  const newComment = {
    id: parseInt(uuidv4()),
    dishId: dishId,
    rating: rating,
    comment: comment,
    author: author,
    date: new Date()
  };
  // comments.push(newComment)
  return newComment;
};

module.exports = {
  getComment,
  getComments,
  addComment
};

const commentsResolver = {
  Query: {
    comments: (parent, args, { comments }) => {
      if (args.id) {
        let id = args.id;
        return comments.filter(comment => {
          return comment.id === id;
        });
      } else return comments;
    },
    comment: (parent, { id }, { comments }) => {
      return comments.filter(comment => {
        return comment.id === id;
      })[0];
    }
  },
  Mutation: {
    addComment: (parent, { dishId, rating, comment, author }, { comments }) => {
      const newComment = {
        id: uuidv4(),
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author,
        date: new Date()
      };
      comments.push(newComment);
      return newComment;
    },
    deleteComment: (parent, { id }, { comments }) => {
      let newComments = comments.filter(comment => {
        return comment.id !== id;
      });
      if (comments.length === newComments.length) return false;
      comments = newComments;
      return true;
    }
  }
};

module.exports = {
  commentsResolver
};

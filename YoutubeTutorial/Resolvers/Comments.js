const uuidv4 = require("uuid");
const { Comments } = require("../Models/Comments");

const commentsResolver = {
  Query: {
    comments: async (parent, args, { comments }) => {
      if (args.id) {
        let id = args.id;
        return await comments.find({ id: id });
      } else return await comments.find({});
    },
    comment: async (parent, { id }, { comments }) => {
      return (await comments.find({ id: id }))[0];
    }
  },
  Mutation: {
    addComment: async (
      parent,
      { dishId, rating, comment, author },
      { comments }
    ) => {
      const newComment = {
        id: uuidv4(),
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author,
        date: new Date()
      };
      let commentObj = new Comments(newComment);
      return await commentObj
        .save()
        .then(result => {
          return true;
          return result;
        })
        .catch(err => {
          return false;
          return err;
        });
      
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

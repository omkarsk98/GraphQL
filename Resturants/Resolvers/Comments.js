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
        })
        .catch(err => {
          return false;
        });
    },
    deleteComment: async (parent, { id }, { comments }) => {
      return await comments
        .deleteOne({ id: id })
        .then(res => {
          return true;
        })
        .catch(err => {
          return false;
        });
    }
  }
};

module.exports = {
  commentsResolver
};

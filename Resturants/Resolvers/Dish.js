const dishResolver = {
  Query: {
    dish: async (parent, args, { dishes }) => {
      let id = args.id;
      return (await dishes.find({ id: id }))[0];
    },
    dishes: async (parent, args, { dishes }) => {
      if (args.id) {
        return await dishes.find({ id: args.id });
      }
      if (args.name) {
        let name = args.name;
        return await dishes.find({ name: name });
      } else return await dishes.find({});
    }
  },
  Dish: {
    comments: async (parent, args, { comments }) => {
      return await comments.find({ dishId: parent.id });
    }
  }
};

module.exports = {
  dishResolver
};

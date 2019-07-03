const dishResolver = {
  Query: {
    dish: (parent, args, { dishes }) => {
      let id = args.id;
      return dishes.filter(dish => {
        return dish.id === id;
      })[0];
    },
    dishes: async (parent, args, { dishes }) => {
      return await dishes.find({});
      // if (args.name) {
      //   let name = args.name;
      //   return dishes.filter(dish => {
      //     return dish.name === name;
      //   });
      // } else return dishes;
    }
  },
  Dish: {
    comments: (parent, args, { comments }) => {
      return comments.filter(comment => {
        return comment.dishId === parent.id;
      });
    }
  }
};

module.exports = {
  dishResolver
};

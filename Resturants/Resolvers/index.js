const { dishResolver } = require("./Dish");
const { commentsResolver } = require("./Comments");

const resolvers = [dishResolver, commentsResolver];

module.exports = {
  resolvers
};

const { gql } = require("apollo-server-express");
const { dishSchema } = require("./Dish");
const { commentsSchema } = require("./Comments");

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

const schema = [linkSchema, dishSchema, commentsSchema];

module.exports = {
  schema
};


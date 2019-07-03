const { gql } = require("apollo-server-express");
const { userSchema } = require("./user");
const { messageSchema } = require("./message");

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

const schema = [linkSchema, userSchema, messageSchema];

module.exports = schema;


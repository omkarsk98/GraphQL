const { gql } = require("apollo-server-express");

const commentsSchema = gql`
  extend type Query {
    comment(id: String!): Comment
    comments(id: String): [Comment]
  }
  extend type Mutation {
    addComment(
      dishId: Int!
      rating: Int!
      comment: String!
      author: String!
    ): Comment!
    deleteComment(id: String!): Boolean!
  }
  type Comment {
    id: String!
    dishId: Int
    rating: Int
    comment: String
    author: String
    date: String
  }
`;

module.exports = {
  commentsSchema
};

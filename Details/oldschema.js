const { gql } = require("apollo-server-express");

const schema = gql`
  type Query {
    users: [User!]
    me: User
    user(id: ID!): User
    messages: [Message!]!
    message(id: ID!): Message!
  }

  type User {
    id: ID!
    username: String
    place: String
    age: Int
    messages: [Message!]
  }

  type Message {
    id: ID!
    text: String
    user:User!
  }

  type Mutation {
    createMessage(text: String!): Message!
  }
`;

module.exports = {
  schema
}
const { gql } = require("apollo-server-express");

const dishSchema = gql`
  extend type Query {
    dish(id: Int!): Dish
    dishes(name: String): [Dish]
  }
  type Dish {
    id: Int!
    name: String
    category: String
    label: String
    price: String
    description: String
    comments: [Comment!]
  }
`;

module.exports = {
  dishSchema
}
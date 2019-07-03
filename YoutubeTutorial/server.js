const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { getDish, getDishes, getComments, getComment, addComment } = require("./Functions");
const { dishes, comments } = require("./DataStore");

// GraphQL Schema
const app = express();

const schema = gql`
  type Query {
    message: String
    dish(id: Int!): Dish
    dishes(name: String): [Dish]
    comment(id: Int!): Comment
    comments(id: Int): [Comment]
  }
  type Mutation {
    addComment(dishId:Int!,rating:Int!, comment:String!, author:String!):Comment!
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
  type Comment {
    id: Int
    dishId: Int
    rating: Int
    comment: String
    author: String
    date: String
  }
`;

const resolvers = {
  Query: {
    message: () => "Hello World!!",
    dish: getDish,
    dishes: getDishes,
    comments: getComments,
    comment: getComment
  },
  Mutation: {
    addComment: addComment
  },
  Dish: {
    name: (parent, args, { comments }) => {
      return "Cool Name";
    },
    comments: (parent, args, { comments }) => {
      let temp = comments.filter(comment => {
        return comment.dishId === parent.id;
      });
      console.log(typeof(temp))
      return temp;
    }
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    dishes: dishes,
    comments: comments
  }
});

server.applyMiddleware({ app, path: "/graphql" });

let port = 3000;
app.listen({ port: port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
});

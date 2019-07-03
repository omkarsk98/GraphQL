const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { dishes, comments } = require("./DataStore");
const { schema } = require("./Schema");
const { resolvers } = require("./Resolvers");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// GraphQL Schema
const app = express();
const db = "mongodb://localhost:27017/Restaurants";
mongoose.connect(db);
const Dishes = mongoose.model("Dish", {});

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    dishes: Dishes,
    comments: comments
  }
});

server.applyMiddleware({ app, path: "/graphql" });

let port = 3000;
app.listen({ port: port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
});

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { schema } = require("./Schema");
const { resolvers } = require("./Resolvers");
const { Dishes } = require("./Models/Dish");
const { Comments } = require("./Models/Comments");
const mongoose = require("mongoose");

const app = express();
const db = "mongodb://localhost:27017/Restaurants";
mongoose.connect(db);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    dishes: Dishes,
    comments: Comments
  }
});

server.applyMiddleware({ app, path: "/graphql" });

let port = 3000;
app.listen({ port: port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
});

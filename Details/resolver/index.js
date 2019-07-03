const { userResolvers } = require("./users");
const { messageResolvers } = require("./messages");

export default [userResolvers, messageResolvers];

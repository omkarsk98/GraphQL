const users = require("./datastore/users");
const messages = require("./datastore/messages");

// console.log(messages);

const resolvers = {
  Query: {
    users: (parent, args, { data }) => {
      return Object.values(data.users);
    },
    me: (parent, args, { me }) => {
      return me;
    },
    user: (parent, { id }, { data }) => {
      return data.users[id];
    },
    messages: (parent, args, { data }) => {
      return Object.values(data.messages);
    },
    message: (parent, { id }, { data }) => {
      return data.messages[id];
    }
  },
  User: {
    messages: (user, args, { data }) => {
      return Object.values(data.messages).filter(
        message => message.userId === user.id,
      );
    },
  },
  Message: {
    user: message => {
      return users[message.userId];
    }
  },
  Mutation: {
    createMessage: (parent, { text }, { me, data }) => {
      let id = uuidv4();
      let message = {
        id,
        text,
        userId: me.id
      };
      data.messages[id] = message;
      data.users[me.id].messageIds.push(id);
      return message;
    },
    deleteMessage: (parent, { id }, { data }) => {
      const { [id]: message, ...otherMessages } = data.messages;

      if (!message) {
        return false;
      }

      data.messages = otherMessages;

      return true;
    }
  }
};

module.export = { resolvers };

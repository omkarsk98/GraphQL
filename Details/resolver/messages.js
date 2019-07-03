const uuidv4 = require("uuid/v4");

const messageResolver = {
  Query: {
    messages: (parent, args, { data }) => {
      return Object.values(data.messages);
    },
    message: (parent, { id }, { data }) => {
      return data.messages[id];
    }
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
      if (!message) return false;
      data.messages = otherMessages;
      return true;
    }
  }
};

module.exports = {
  messageResolver
};

const usersResolver = {
  Query: {
    users: (parent, args, { data }) => {
      return Object.values(data.users);
    },
    me: (parent, args, { me }) => {
      return me;
    },
    user: (parent, { id }, { data }) => {
      return data.users[id];
    }
  },
  User: {
    messages: (user, args, { data }) => {
      return Object.values(data.messages).filter(
        message => message.userId === user.id
      );
    }
  }
};

module.exports = {
  usersResolver
}
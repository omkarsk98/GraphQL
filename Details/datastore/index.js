let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
    user: {
      id: "30",
      username: "Tony",
      place: "New York",
      age: 40
    }
  },
  2: {
    id: "2",
    text: "Bye World",
    userId: "2",
    user: {
      id: "31",
      username: "Steve",
      place: "Brooklyn",
      age: 100
    }
  }
};

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
    age: 21,
    messageIds: [1]
  },
  2: {
    id: "2",
    username: "Dave Davids",
    messageIds: [2]
  }
};

module.exports = {
  users,
  messages
}
const getDish = (parent, args, { dishes }) => {
  let id = args.id;
  return dishes.filter(dish => {
    return dish.id === id;
  })[0];
};

const getDishes = (parent, args, { dishes }) => {
  if (args.name) {
    let name = args.name;
    return dishes.filter(dish => {
      return dish.name === name;
    });
  } else return dishes;
};

module.exports = {
  getDish,
  getDishes
};

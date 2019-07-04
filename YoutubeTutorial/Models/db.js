const db = "mongodb://localhost:27017/Restaurants";
mongoose.connect(db);

module.exports = {
  db
}
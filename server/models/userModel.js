const mongoose = require("mongoose").connect('mongodb://localhost/lapvar',{
  useMongoClient: true,
  /* other options */
});
const Schema = mongoose.Schema;

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('connect');
// });

const userSchema = new Schema({
  fb_id     : Number,
  email     : String,
  name      : String,
  profile   : String,
  createdAt : {
      type  : Date,
      default : new Date()
  }
});

const User = mongoose.model("User",userSchema);

module.exports = User;

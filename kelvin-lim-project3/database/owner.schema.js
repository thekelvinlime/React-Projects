const Schema = require('moongoose').Schema;

exports.OwnerSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  password: String,
}, {collection: 'users'});
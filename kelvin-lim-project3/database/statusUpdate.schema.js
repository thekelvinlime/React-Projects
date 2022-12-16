const Schema = require('mongoose').Schema;

exports.StatusUpdateSchema = new Schema({
  statusUpdate: String,
  user: String,
  created: { type: Date, default: Date.now()},
}, {collection: 'statusUpdates'})
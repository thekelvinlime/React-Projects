const mongoose = require('mongoose');

const StatusUpdateSchema = require('./statusUpdate.schema').StatusUpdateSchema;

const StatusUpdateModel = mongoose.model("statusUpdate", StatusUpdateSchema);

function createStatusUpdate(statusUpdate) {
  return StatusUpdateModel.create(statusUpdate);
}

function getStatusUpdatesByOwner(owner) {
  return StatusUpdateModel.find({
    owner: owner,
  }).exec();
}

function getAllStatusUpdates() {
  return StatusUpdateModel;
}

module.exports = {
  createStatusUpdate,
  getStatusUpdatesByOwner,
  getAllStatusUpdates,
}
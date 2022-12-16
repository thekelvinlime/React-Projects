const express = require("express");

const StatusUpdateModel = require("../database/statusUpdate.model").default;

const router = express.Router();

const statusUpdates = [];

router.get("/", function (req, res) {
  return StatusUpdateModel.getAllStatusUpdates()
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
});

router.get("/owner", function (req, res) {
  const owner = req.cookies.owner;

  if (owner) {
    return StatusUpdateModel.getStatusUpdatesByOwner(owner)
      .then(function (data) {
        res.send(data);
      })
      .catch(function (err) {
        res.status(400).send(err);
      });
  } else {
    return res.status(400).send("No token available");
  }
});

router.get("/owner/:owner", function (req, res) {
  const owner = req.params.owner;

  return StatusUpdateModel.getStatusUpdatesByOwner(owner).then(function (data) {
    return res.send(data);
  });
});

router.post("/", function (req, res) {
  const boy = req.body;

  return StatusUpdateModel.createStatusUpdate(body)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
});

module.exports = router;

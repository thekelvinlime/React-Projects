const express = require('express');

const OwnerModel = require('../database/owner.model');

const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', function(req, res) {
  const owner = req.body;

  return UserModel.createOwner(owner).then(function(ownerData) {
    const cookie = {
      ownerName: ownerData.name,
    }
    const token = jwt.sign(cookie, "secretToken", {
      expiresIn: '14d'
    })

    return res.cookie('jwt_token', token, {httpOnly: true}).status(200).send({username: ownerData.name});
  })
  .catch(function(error) {
    console.log(error);
    return res.status(400).send("Error: User cannot be created!");
  })
})

router.post('/authenticate', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  OwnerModel.getOwnerByName(username).then((owner) => {
    if(owner.password === password) {
      const cookie = {
        ownerName: owner.name
      }
      const token = jwt.sign(cookie, "secretToken", {
        expiresIn: '14d'
      })

      return res.cookie('jwt_token', token, {httpOnly: true}).status(200).send({username});
    } else {
      return res.status(400).send("The user does not exist or the password does not match that username");
    }
  })
})

router.get('/isLoggedIn', function(req, res) {
  const jwt_token = req.cookies.jwt_token;

  if (!jwt_token) {
    return res.status(401).send('No token present!');
  }

  return jwt.verify(jwt_token, "secretToken", function(err, decoded) {
    if (err) {
      return res.status(400).send("Invalid token!");
    } else {
      const ownerName = decoded.ownerName;
      return res.status(200).send("Successfully logged in!");
    }
  })
})

router.post('/logOut', function(req, res) {
  return res.cookie('jwt_token', {}, {
    maxAge: 0,
  }).send("Successfully logged out!")
})

module.exports = router;
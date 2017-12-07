const mongoose = require('mongoose').connect('mongodb://localhost/agustinus')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const All = (req, res) => {
  User.find({})
  .then(Users => {
    res.send(Users)
  })
  .catch(err => {
    console.log(err)
  })
}

const createUser = (req, res) => {
  let input = req.body
  const saltRounds = 10
  User.findOne({
    username: input.username
  })
  .then(user => {
    if(!user) {
      bcrypt.hash(input.password, saltRounds).then(function(hash) {
        let newUser = new User({
          name: input.name,
          username: input.username,
          password: hash 
        })
        newUser.save((err => {
          if(err) {
            console.log(err)
          }
          res.send({
            msg: 'Success create User'
          })
        }))
      })
    } else {
      res.send({
        msg: 'User sudah ada BOSS'
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
}

const checkLogin = (req, res) => {
  console.log('MAUSK SINI', req.body)
  let check = req.body
  User.findOne({
    username: check.username
  })
  .then(user => {
    console.log(user)
    if(user) {
      bcrypt.compare(check.password, user.password)
      .then(function(respon) {
        if(respon) {
          jwt.sign({
            id: user._id,
            name: user.name,
            username: user.username
          }, 
          'inisercetyaaa', 
          (err, token) => {
            if(!err) {
              res.send({token: token})
            } else {
              console.log(err)
            }
          })
        } else {
          res.send({
            msg: 'Username or Password Wrong'
          })
        }
      })
    } else {
      res.send({
        msg: 'Username or Password Wrong'
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
}
module.exports = {
  checkLogin,
  All,
  createUser
}
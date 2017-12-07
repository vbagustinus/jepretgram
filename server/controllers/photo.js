const mongoose = require('mongoose').connect('mongodb://vbagustinus:anakjalanan@smartshop-shard-00-00-hibsb.mongodb.net:27017,smartshop-shard-00-01-hibsb.mongodb.net:27017,smartshop-shard-00-02-hibsb.mongodb.net:27017/agustinus?ssl=true&replicaSet=smartshop-shard-0&authSource=admin')
// const mongoose = require('mongoose').connect('mongodb://localhost/agustinus')
const Photo = require('../models/Photo')

const allPhotos = (req, res) => {
  Photo.find({})
  .populate('user')
  .then(photos => {
    res.send(photos)
  })
  .catch(err => {
    console.log(err)
  })
}

const postPhoto = (req, res) => {
  let input = req.body
  console.log('ke CREATE ga NIH', req.file)
  addPhoto = new Photo({
    caption: input.caption,
    url: req.file.cloudStoragePublicUrl,
    user: input.user_id
  })
  addPhoto.save((err, data) => {
    if(!err) {
      res.send({
        msg: 'Post great for created',
        data: data
      })
    }
    console.log(err)
  })
}

const editPhoto = (req, res) => {
  let edit = req.body
  Photo.findOne({
    _id: req.params.id
  })
  .then(photo => {
    if(photo) {
      photo.caption = edit.caption
      photo.url = req.file.cloudStoragePublicUrl
      photo.save(err => {
        if(!err) {
          res.send({
            msg: 'Succes Update Photo Caption'
          })
        }
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
}

const deletePhoto = (req, res) => {
  let id = req.params.id
  Photo.findByIdAndRemove(id, (err) => {
    if(!err) {
      res.send({
        msg: 'Success delete your caption'
      })
    }
  })
}

const getPhoto = (req, res) => {
  Photo.findById({
    _id: req.params.id
  })
  .then(photo => {
    res.send(photo)
  })
  .catch(err => {
    console.log(err)
  })
}

const lovePhoto = (req, res) => {
  let id = req.body.id
  Photo.findById({
    _id: id
  })
  .then(photo => {
    if(photo.user.indeOf(id) == -1) {
      photo.user.push(id)
      res.send({
        msg: 'You Loved'
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports = {
  allPhotos,
  postPhoto,
  editPhoto,
  deletePhoto,
  getPhoto,
  lovePhoto
}
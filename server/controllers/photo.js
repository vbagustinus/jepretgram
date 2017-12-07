const mongoose = require('mongoose').connect('mongodb://localhost/agustinus')
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
  addPhoto = new Photo({
    caption: input.caption,
    url: req.file.cloudStoragePublicUrl,
    user: []
  })
  addPhoto.save((err) => {
    if(!err) {
      res.send({
        msg: 'Post great for created'
      })
    }
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

module.exports = {
  allPhotos,
  postPhoto,
  editPhoto,
  deletePhoto,
  getPhoto
}
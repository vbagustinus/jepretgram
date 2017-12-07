var express = require('express');
var router = express.Router();
const photoControllers = require('../controllers/photo')
const Helper = require('../helpers/upload')
const upload = Helper.multer.single('image')

/* GET home page. */
router.get('/', photoControllers.allPhotos)
router.get('/:id', photoControllers.getPhoto)
router.post('/', (req, res, lanjut) => {
  console.log('MASUK GA INI')
  upload(req, res, (err => {
    if(!err) {
      lanjut()
    }
  }))
}, Helper.sendUploadToGCS, (req, res, next) => {
  photoControllers.postPhoto(req, res, next)
})
router.put('/:id', photoControllers.editPhoto)
router.delete('/:id', photoControllers.deletePhoto)
router.put('/love/:id', photoControllers.lovePhoto)

module.exports = router;

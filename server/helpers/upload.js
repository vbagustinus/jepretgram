const path = require('path');
const Storage = require('@google-cloud/storage');
const CLOUD_BUCKET = 'storage-jepretgram';
const Multer = require('multer')

const storage = Storage({
  projectId: 'ecommerce',
  keyFilename: 'keygoogle.json'
})

const bucket = storage.bucket(CLOUD_BUCKET);

const getPublicUrl = filename => {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}

const sendUploadToGCS = (req, res, next) => {
  if (!req.file) {
    return next()
  }
  const gcsname = Date.now() + req.file.originalname
  const file = bucket.file(gcsname)

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  })
  stream.on('error', (err) => {
    req.file.cloudStorageError = err
    next(err)
  })
  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    file.makePublic().then(() => {
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
      next()
    })
  })
  stream.end(req.file.buffer)
}

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: function (req, file, cb) {
    let filetypes = /jpeg|jpg|png/;
    let mimetype = filetypes.test(file.mimetype);
    let extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: File type not supported");
  }
})

module.exports = {
  multer,
  sendUploadToGCS,
  getPublicUrl
}
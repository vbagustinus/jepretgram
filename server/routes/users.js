var express = require('express');
var router = express.Router();
const userConstrollers = require('../controllers/users')
/* GET users listing. */
router.get('/', userConstrollers.All)
router.post('/', userConstrollers.createUser)

module.exports = router;

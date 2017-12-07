const express = require('express');
const router = express.Router();
const userConstrollers = require('../controllers/users')
/* GET users listing. */
router.post('/', userConstrollers.checkLogin);

module.exports = router;

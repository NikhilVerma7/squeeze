const express = require('express');
const router = express.Router(); 
const {handelGenerateNewUrl} = require("../controllers/urlconstroller");

router.post('/',handelGenerateNewUrl);

module.exports = router;
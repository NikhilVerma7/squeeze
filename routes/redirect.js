const express = require('express');
const router = express.Router(); 
const {handelRedirect} = require("../controllers/redirectController");

router.get('/',handelRedirect);

module.exports = router;
const express = require('express');
const {handelanalytics} = require("../controllers/analyticsController");

const router = express.Router();

router.get('/', handelanalytics);

module.exports = router;
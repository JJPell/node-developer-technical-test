const express = require('express');

const router = express.Router();
const variationsController = require('../controllers/variations');

router.get('/:pokemon', variationsController.get);

module.exports = router;

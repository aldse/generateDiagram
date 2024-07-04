const express = require('express');
const router = express.Router();
const UploadController = require('../controller/uploadController');

router
    .post('/upload', UploadController.uploadFile);

module.exports = router;

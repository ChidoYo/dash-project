'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
const Medium = require('../models/medium');

router.get('/', (req, res, next) => {
  Medium.find( (err, media) => {
    res.json(media);
  });
});


router.post('/', (req, res) => {
  let { title, url, directory } = req.body;
    new Medium({
      title,
      url,
      directory
    }).save( (err, medium) => {
    res.json(medium)
  });
});

module.exports = router;

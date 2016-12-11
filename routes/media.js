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

router.delete('/:id', (req, res) => {
  Medium.findById(req.params.id, (err, medium) => {
    medium.remove();
    res.status(200).send({success: true});
  });
});

module.exports = router;

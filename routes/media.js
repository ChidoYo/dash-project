var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Media = require('../models/media');

router.post('/', function (req, res) {
    var title = req.body.title;
    var url = req.body.url;
    var directory = req.body.directory;

    new Media({
      title: title,
      url: url,
      directory: directory,

    }).save( function(media) {
    res.redirect("/media")
    })
});


router.get('/', function(req, res, next) {
  console.log('IN PROFILES');
  Media.find( function(err, media) {
    console.log(err)
    res.render('media', { media: media });
  });
});

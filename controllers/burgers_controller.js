var express = require("express");

var router = express.Router();
var path = require("path");
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.json(path.join(__dirname, "../views/index.handlebars"));
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers", function(req, res) {
    burger.insertOne([
    'burger_name'
    ], [
    req.body.burger_name
    ],
    function(result) {
      res.redirect('/');
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    console.log("this hit");
    var condition = "id = " + req.params.id;
    burger.updateOne(condition, function(result) {
        res.end();
      
    });
  });

  module.exports = router;
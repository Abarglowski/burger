var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
      res.json(path.join(__dirname, "public/index.html"))
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
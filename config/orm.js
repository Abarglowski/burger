var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    //INSERT INTO burgers(burger_name)VALUES('hamburger'),
    queryString += " (";
    queryString += cols;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?";
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  updateOne: function(table, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += "devoured = 1";
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  deleteOne: function(table, condition, cb) {
    var queryString = "DELETE " + table;

    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function(err,result) {
      if(err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
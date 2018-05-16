var mysql = require('mysql')


var connection = mysql.createPool({
    host: "us-cdbr-iron-east-04.cleardb.net" || "localhost",
   // port: process.env.PORT || 3306,
    user: "b14a9598a17f0a" || "root",
    password: "375092dc" || "jaz",
    database: "heroku_5f39a1926054948" || "burgers_db"
});

//var connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect(function(err){
    if(err){
        console.error("error:", err.stack);
        return;
    }
    console.log("connected as id", connection.threadId)
});

module.exports = connection;
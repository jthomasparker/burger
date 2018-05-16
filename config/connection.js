var mysql = require('mysql')


var connection = mysql.createPool({
    host: "us-cdbr-iron-east-04.cleardb.net",
    user: "b14a9598a17f0a",
    password: "375092dc",
    database: "heroku_5f39a1926054948"
});


connection.getConnection(function(err, connection){  
if(err){
        console.error("error:", err.stack);
        return;
    }
    console.log("connected as id", connection.threadId)
});


module.exports = connection;
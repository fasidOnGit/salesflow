var mysql = require('mysql');

var Connection = mysql.createConnection({
    host:'localhost',
    user:'salesflow-admin',
    password:'LSFAdmin-101',
    database:'salesflow'
});
Connection.connect();
    
var users={
    username:"sameem",
    username:"sameem",
    name:"Sameem Kuthus"
}

var query = Connection.query('INSERT INTO users SET ?', users, function(err, result){
if (err){
    console.error(err);
    return;
}
console.error(result);
});
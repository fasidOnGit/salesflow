var app = require('express')();
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var Connection = mysql.createConnection({
    host:'localhost',
    user:'salesflow-admin',
    password:'LSFAdmin-101',
    database:'salesflow'
});
Connection.connect() 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages/enquiry.html'));
  });
  
  app.post('/enquiry_data', function(req, res) {
    console.log(req.body.reci_date);
    console.log(req.body.project);
    console.log(req.body.project);
    // Add these values to your MySQL database here
  });
  
  app.listen(3000);


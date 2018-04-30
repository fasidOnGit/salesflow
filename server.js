const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var mysql = require('mysql');


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}


app.use((req , res , next) => {
  res.setHeader(`Access-Control-Allow-Origin` , `*`);
  res.setHeader(`Access-Control-Allow-Credentials` , `true`);
  res.setHeader(`Access-Control-Allow-Methods` , `GET, HEAD , OPTIONS, POST , DELETE`);
  res.setHeader(`Access-Control-Allow-Headers`, `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers`);

 next();  
});


app.use(express.static(__dirname + '/'));


app.get('/index', function(req, res) {
	console.log(__dirname)
  res.sendFile(path.join(__dirname + '/index.html'));
});


var Connection = mysql.createConnection({
    host:'localhost',
    user:'salesflow-admin',
    password:'LSFAdmin-101',
    database:'salesflow'
});
Connection.connect()   

app.post('postEnquiry',function(req,res){
    
})

   



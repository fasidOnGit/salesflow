const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var sql = require('mssql');


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS

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
// Instruct the app
// to use the forceSSL
// middleware
// app.use(forceSSL());

app.use((req , res , next) => {
  res.setHeader(`Access-Control-Allow-Origin` , `*`);
  res.setHeader(`Access-Control-Allow-Credentials` , `true`);
  res.setHeader(`Access-Control-Allow-Methods` , `GET, HEAD , OPTIONS, POST , DELETE`);
  res.setHeader(`Access-Control-Allow-Headers`, `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers`);

 next();  
});


// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/'));


app.get('/index', function(req, res) {
	console.log(__dirname)
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/getEnquiry', function(req,res){
    var result = [{
        name:'haloo',
        age:21,
        dob:123123
    }];

    res.send(result)
})
// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 8080);
console.log('listening on port 8080')


const config = {
//     user: 'Administrator',
//     password: 'dzineINK*14294',
//     server: '127.0.0.1', // You can use 'localhost\\instance' to connect to named instance
//     database: 'salesflow',
//     port:3306
// }

// sql.connect(config)
//     .then(data=>{
//         console.log('data')
//         // data.query('select * from lol')
//     }).catch(console.log)

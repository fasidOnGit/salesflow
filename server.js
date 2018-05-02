var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var async = require("async");
const router = express.Router();



app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var dateformat = require('dateformat');
var now = new Date();

app.set('view engine', 'ejs');

app.use(express.static('vendor'));
app.use(express.static('/bootstrap/css'));
app.use(express.static('/bootstrap/fonts'));
app.use(express.static('/bootstrap/js'));
app.use(express.static('/font-awesome/fonts'));
//js
app.get('/vendor/jquery/jquery.min.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/jquery/jquery.min.js"));
});
// app.get('/vendor/bootstrap/js/bootstrap.js', (req, res)=>{
//   res.sendFile(path.join(__dirname + "/vendor/bootstrap/js/bootstrap.js"));
// });
app.get('/vendor/metisMenu/metisMenu.min.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/metisMenu/metisMenu.min.js"));
});
app.get('/vendor/raphael/raphael.min.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/raphael/raphael.min.js"));
});
app.get('/vendor/datatables/js/jquery.dataTables.min.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/datatables/js/jquery.dataTables.min.js"));
});
app.get('/vendor/datatables-plugins/dataTables.bootstrap.min.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/datatables-plugins/dataTables.bootstrap.min.js"));
});
app.get('/vendor/datatables-responsive/dataTables.responsive.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/datatables-responsive/dataTables.responsive.js"));
});
app.get('/js/sb-admin-2.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/js/sb-admin-2.js"));
});
app.get('/vendor/morrisjs/morris.min.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/morrisjs/morris.min.js"));
});
app.get('/data/morris-data.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/data/morris-data.js"));
});
app.get('/vendor/jquery.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/jquery.js"));
});
//css
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.svg', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.svg"));
});
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.eot', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.eot"));
});
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf"));
});
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff"));
});
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2"));
});

app.get('/vendor/font-awesome/fonts/fontawesome-webfont.eot', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.eot"));
});
app.get('/vendor/font-awesome/fonts/fontawesome-webfont.svg', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.svg"));
});
app.get('/vendor/font-awesome/fonts/fontawesome-webfont.ttf', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.ttf"));
});
app.get('/vendor/font-awesome/fonts/fontawesome-webfont.woff', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.woff"));
});
app.get('/vendor/font-awesome/fonts/fontawesome-webfont.woff2', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.woff2"));
});
app.get('/vendor/font-awesome/fonts/Fontawesome.otf', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/Fontawesome.otf"));
});


app.get('/vendor/datatables/images/sort_asc.png', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/datatables/images/sort_asc.png"));
});
app.get('/vendor/bootstrap/css/bootstrap.min.css', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/css/bootstrap.min.css"));
});
app.get('/vendor/bootstrap/css/bootstrap4.min.css', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/css/bootstrap.4min.css"));
});
app.get('/vendor/bootstrap/css/bootstrap4.min.css', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/css/bootstrap.4min.css"));
});
app.get('/vendor/metisMenu/metisMenu.css', (req, res)=>{
  res.sendFile(path.join(__dirname, "/vendor/metisMenu/metisMenu.css"));
});
app.get('/less/sb-admin-2.css', (req, res)=>{
  res.sendFile(path.join(__dirname, "/less/sb-admin-2.css"));
});
app.get('/dist/css/sb-admin-2.css', (req, res)=>{
  res.sendFile(path.join(__dirname, "/dist/css/sb-admin-2.css"));
});
app.get('/vendor/datatables/css/dataTables.bootstrap.css', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/datatables/css/dataTables.bootstrap.css"));
});
app.get('/vendor/datatables-plugins/dataTables.bootstrap.css', (req, res)=>{
  res.sendFile(path.join(__dirname + "/vendor/datatables-plugins/dataTables.bootstrap.css"));
});
app.get('/vendor/datatables-responsive/dataTables.responsive.css', (req, res)=>{
  res.sendFile(path.join(__dirname, "/vendor/datatables-responsive/dataTables.responsive.css"));
});
app.get('/vendor/font-awesome/css/font-awesome.min.css', (req, res)=>{
  res.sendFile(path.join(__dirname, "/vendor/font-awesome/css/font-awesome.min.css"));
});

app.get('/vendor/morrisjs/morris.css', (req, res)=>{
  res.sendFile(path.join(__dirname, "/vendor/morrisjs/morris.css"));
});
// app.use(express.static(__dirname + '/vendor'));
// app.use(express.static(__dirname + '/dist'));
// app.use(express.static(__dirname + '/data'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));

//css directory declaration
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


const con = mysql.createConnection({
  host:"localhost",
  user:"salesflow-admin",
  password:"LSFAdmin-101",
  database:"salesflow"
});

const siteTitle = "SalesFlow | Luftek";
const baseURL = "http://localhost:4000"

app.get('/', function (req,res) {
  con.query("SELECT * FROM enquiries ORDER BY job_ref DESC", function (err, result){
    res.render('pages/index',{
      siteTitle : siteTitle,
      pageTitle : "Enquiry List",
      items : result
    });
  });
});

//   const testFolder = '/PLESKVHOST/vhosts/luftek.in/sales.luftek.in';
// const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     app.get(file, (req, res)=>{
//       res.sendFile(path.join(__dirname + file));
//     });
//   });
// });
// });




// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }


// app.use((req , res , next) => {
//   res.setHeader(`Access-Control-Allow-Origin` , `*`);
//   res.setHeader(`Access-Control-Allow-Credentials` , `true`);
//   res.setHeader(`Access-Control-Allow-Methods` , `GET, HEAD , OPTIONS, POST , DELETE`);
//   res.setHeader(`Access-Control-Allow-Headers`, `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers`);

//  next();  
// });


// app.use(express.static(__dirname + '/'));


// app.get('/index', function(req, res) {
// 	console.log(__dirname)
//   res.sendFile(path.join(__dirname + '/index.html'));
// });


// var Connection = mysql.createConnection({
//     host:'localhost',
//     user:'salesflow-admin',
//     password:'LSFAdmin-101',
//     database:'salesflow'
// });
// Connection.connect()   


// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'pages/enquiry.html'));
// });

// app.post('/enquiry_data', function(req, res) {
//   console.log(req.body.reci_date);
//   console.log(req.body.project);
//   // Add these values to your MySQL database here
// });

var server = app.listen(4000,function(){
  console.log("Server started on 4000....");
});

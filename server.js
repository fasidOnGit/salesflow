var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var async = require("async");
const router = express.Router();



app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/vendor/jquery/jquery.min.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/jquery/jquery.min.js"));
});
// app.get('/vendor/bootstrap/js/bootstrap.js', (req, res)=>{
//   res.sendFile(path.join(__dirname + "/vendor/bootstrap/js/bootstrap.js"));
// });
app.get('/vendor/metisMenu/metisMenu.min.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/metisMenu/metisMenu.min.js"));
});
app.get('/vendor/raphael/raphael.min.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/raphael/raphael.min.js"));
});
app.get('/vendor/datatables/js/jquery.dataTables.min.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/datatables/js/jquery.dataTables.min.js"));
});
app.get('/vendor/datatables-plugins/dataTables.bootstrap.min.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/datatables-plugins/dataTables.bootstrap.min.js"));
});
app.get('/vendor/datatables-responsive/dataTables.responsive.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/datatables-responsive/dataTables.responsive.js"));
});
app.get('/js/sb-admin-2.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/js/sb-admin-2.js"));
});
app.get('/vendor/morrisjs/morris.min.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/morrisjs/morris.min.js"));
});
app.get('/data/morris-data.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/data/morris-data.js"));
});
app.get('/vendor/jquery.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/jquery.js"));
});
//css
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.svg', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.svg"));
});
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.eot', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.eot"));
});
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf"));
});
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff"));
});
app.get('/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2"));
});

app.get('/vendor/font-awesome/fonts/fontawesome-webfont.eot', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.eot"));
});
app.get('/vendor/font-awesome/fonts/fontawesome-webfont.svg', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.svg"));
});
app.get('/vendor/font-awesome/fonts/fontawesome-webfont.ttf', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.ttf"));
});
app.get('/vendor/font-awesome/fonts/fontawesome-webfont.woff', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.woff"));
});
app.get('/vendor/font-awesome/fonts/fontawesome-webfont.woff2', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/fontawesome-webfont.woff2"));
});
app.get('/vendor/font-awesome/fonts/Fontawesome.otf', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/font-awesome/fonts/Fontawesome.otf"));
});


app.get('/vendor/datatables/images/sort_asc.png', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/datatables/images/sort_asc.png"));
});
app.get('/vendor/bootstrap/css/bootstrap.min.css', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/css/bootstrap.min.css"));
});
app.get('/vendor/bootstrap/css/bootstrap4.min.css', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/css/bootstrap.4min.css"));
});
app.get('/vendor/bootstrap/css/bootstrap4.min.css', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/bootstrap/css/bootstrap.4min.css"));
});
app.get('/vendor/metisMenu/metisMenu.css', (req, res) => {
  res.sendFile(path.join(__dirname, "/vendor/metisMenu/metisMenu.css"));
});
app.get('/less/sb-admin-2.css', (req, res) => {
  res.sendFile(path.join(__dirname, "/less/sb-admin-2.css"));
});
app.get('/dist/css/sb-admin-2.css', (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/css/sb-admin-2.css"));
});
app.get('/vendor/datatables/css/dataTables.bootstrap.css', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/datatables/css/dataTables.bootstrap.css"));
});
app.get('/vendor/datatables-plugins/dataTables.bootstrap.css', (req, res) => {
  res.sendFile(path.join(__dirname + "/vendor/datatables-plugins/dataTables.bootstrap.css"));
});
app.get('/vendor/datatables-responsive/dataTables.responsive.css', (req, res) => {
  res.sendFile(path.join(__dirname, "/vendor/datatables-responsive/dataTables.responsive.css"));
});
app.get('/vendor/font-awesome/css/font-awesome.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, "/vendor/font-awesome/css/font-awesome.min.css"));
});

app.get('/vendor/morrisjs/morris.css', (req, res) => {
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
  host: "localhost",
  user: "salesflow-admin",
  password: "LSFAdmin-101",
  database: "salesflow"
});

const siteTitle = "SalesFlow | Luftek";
const baseURL = "http://localhost:4000"

app.get('/', function (req, res) {
  con.query("SELECT * FROM enquiries ORDER BY job_ref DESC", function (err, result) {
    res.render('pages/index', {
      siteTitle: siteTitle,
      pageTitle: "Enquiry List",
      items: result
    });
  });
});

//Add New Event
app.get('/addenquiry', function (req, res) {
  con.query("SELECT * FROM enquiries ORDER BY job_ref DESC", function (err, result) {
    res.render('pages/add-enquiry.ejs', {
      siteTitle: siteTitle,
      pageTitle: "New Enquiry",
      items: ''
    });
    con.query("SELECT date_format(reci_date, '%d-%m-%y') FROM `salesflow`.`enquiries`", function (err, result) { });
    con.query("SELECT date_format(sent_date, '%d-%m-%y') FROM `salesflow`.`enquiries`", function (err, result) { });
  });
});
con.query("SELECT date_format(reci_date, '%d-%m-%y') FROM `salesflow`.`enquiries`", function (err, result) { });
con.query("SELECT date_format(sent_date, '%d-%m-%y') FROM `salesflow`.`enquiries`", function (err, result) { });
app.post('/addenquiry', function (req, res) {
  var query = "INSERT INTO `enquiries`(project, location, project_type, consultant, contractor, client, customer_type, customer, contact_per, contact_num, product, qty, amount,reci_date,sent_date,  sales_per, app_engg) VALUES (";
  query += " '" + req.body.project + "',";
  query += " '" + req.body.location + "',";
  query += " '" + req.body.project_type + "',";
  query += " '" + req.body.consultant + "',";
  query += " '" + req.body.contractor + "',";
  query += " '" + req.body.client + "',";
  query += " '" + req.body.customer_type + "',";
  query += " '" + req.body.customer + "',";
  query += " '" + req.body.contact_per + "',";
  query += " '" + req.body.contact_num + "',";
  query += " '" + req.body.product + "',";
  query += " '" + req.body.qty + "',";
  query += " '" + req.body.amount + "',";
  query += " '" + dateformat(req.body.reci_date, "yyyy-mm-dd") + "',";
  query += " '" + dateformat(req.body.sent_date, "yyyy-mm-dd") + "',";
  query += " '" + req.body.sales_per + "',";
  query += " '" + req.body.app_engg + "')";
  con.query(query, function (err, result) {
    res.redirect(baseURL);
  });

});

app.get('/editenquiry/:id', function (req, res) {
  con.query("SELECT * FROM enquiries WHERE job_ref = '" + req.params.id + "'", function (err, result) {
    result[0].reci_date = dateformat(result[0].reci_date, "yyyy-mm-dd");
    result[0].sent_date = dateformat(result[0].sent_date, "yyyy-mm-dd");
    res.render('pages/editenquiry', {
      siteTitle: siteTitle,
      pageTitle: "Editing Enquiry : " + result[0].project,
      item: result
    });
  });
});


app.post('/editenquiry/:id', function (req, res) {
  var query = "UPDATE `enquiries` SET";
  query += "`project`='" +req.body.project+ "',";
  query += "`location`='" +req.body.location+ "',";
  query += "`project_type`='" +req.body.project_type+ "',";
  query += "`consultant`='" + req.body.consultant + "',";
  query += "`contractor`='" + req.body.contractor + "',";
  query += "`client`='" + req.body.client + "',";
  query += "`customer_type`='" + req.body.customer_type + "',";
  query += "`customer`='" + req.body.customer + "',";
  query += "`contact_per`='" + req.body.contact_per + "',";
  query += "`contact_num`='" + req.body.contact_num + "',";
  query += "`product`='" + req.body.product + "',";
  query += "`qty`='" + req.body.qty + "',";
  query += "`amount`='" + req.body.amount + "',";
  query += "`reci_date`='" + req.body.reci_date + "',";
  query += "`sent_date`='" + req.body.sent_date + "',";
  query += "`sales_per`='" + req.body.sales_per + "',";
  query += "`app_engg`='" + req.body.app_engg + "',";
  query += "`status`='" + req.body.status + "',";
  query += "`offer_file`='" + req.body.offer_file + "',";
  query += "`tds_file`='" + req.body.tds_file + "',";
  query += "WHERE `enquiries`.`job_ref`="+req.body.job_ref + "";

  con.query(query, function (err, result) {
    if (result.affectedRows) 
    {
      res.redirect(baseURL);
    }
    else{
      console.log("Something went wrong...")
    }

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

var server = app.listen(4000, function () {
  console.log("Server started on 4000....");
});

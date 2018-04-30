// //1.
// var sql = require('mssql');

// var
// //2.
// var dbconfig = {
//     server: "localhost",
//     database: "salesflow",
//     user: "WIN-JUNHUH164Q\Administrator",
//     password: "dzineINK*14294",
    
// };
// //3.
// function loadEnquiry() {
//     //4.
//     var conn = new sql.Connection(dbconfig);
//     var req=new sql.Request(conn);
//     conn.connect(function (err){
//         if(err){
//             console.log(err);
//             return;
//         }
//         req.query("SELECT * FROM enquiry", function (err,recordset){
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             else{
//                 console.log(recordset);
//             }
//             conn.close();
//         });
    
//     //5.
    
//     });
// }
// //10.
// loadEnquiry();

// const sql = require('mssql')
 
// async () => {
//     try {
//         const pool = await sql.connect('mssql://Administrator:dzineINK*14294@localhost/salesflow')
//         const result = await sql.query`SELECT * FROM dbo.enquiry WHERE job_ref = ${value}`
//         console.dir(result)
// } catch (err) {
//     // ... error checks
// }
// }

var mysql = require('mysql');

var Connection = mysql.createConnection({
    host:'localhost',
    user:'salesflow-admin',
    password:'LSFAdmin-101',
    database:'salesflow'
});


Connection.connect(function(err){
    if(!err) {
        console.log("Database is Connected Successfully");
    } else {
        console.log("Failed to Connect Database");
    }
    });
    


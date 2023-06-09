const mysql = require('mysql');
const express = require("express");
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
const port = 2020;

//Create connection
const db = mysql.createPool({
    connectionLimit  : 10,
    host             : 'localhost',
    user             : 'root',
    password         : 'root',
    database         : 'resultmanagement'
});

db.getConnection(function(err){
    if(err)throw err;
    var sql="CREATE TABLE results(rollno int PRIMARY KEY Auto_Increment,name varchar(255),dob varchar(255),score varchar(255))";
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
    });
});

module.exports = db;

app.use(bodyparser.urlencoded({extended: false}));

//Parse application /json
app.use(bodyparser.json());
app.use(express.static('public'));

//Templating engine
app.engine('hbs', exphbs.engine( {extname: '.hbs' }));
app.set('view engine', 'hbs');

//Routes
const teacherRoutes = require("./routes/teacherlogin")
const studentRoutes = require("./routes/studentlogin")
app.use("/teacher",teacherRoutes)
app.use("/student",studentRoutes)

// app.get("/", (req, res) => {
//   res.render("index");
// });
app.get("/", (req, res) => {
    res.render("index");
  });

app.get("*", (req, res) => {
  res.render("error", {
    errorcomment: "Ooops page not found....:(",
  });
});


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

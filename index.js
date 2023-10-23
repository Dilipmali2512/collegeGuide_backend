var mysql=require('mysql');
var express=require('express');
var app=express();
var cors = require('cors')
app.use(cors());
app.use(express.json());

var con=mysql.createConnection({
    host:"localhost",
    user:"yourusername",
    password:"yourpassword",
    database:"collage"
});




con.connect(function(err) {
    app.post('/',function(req,res){
        if (err) throw err;
    const {merit,collegetype,fees,numbercourse}=req.body;
    var lower=0;
    if(fees==250000)
    lower=100000;

    if(fees==500000)
     lower=250000;

 

    var limit=parseInt(numbercourse);
    console.log(limit);
    var sql = 'SELECT * FROM details2 WHERE AverageFees <? && CollegeType=? && AverageFees>=? LIMIT ?';
    con.query(sql,[fees,collegetype,lower,limit], function (err, result, fields) {
      if (err) throw err;
    res.json(result);
    });
    })
    
    
})


app.listen(5507,()=>{
    console.log("run");
})
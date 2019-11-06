var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sampath',
    database:'employeedb'
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log("Db connection failed\n Error:"+JSON.stringify(err,undefined,2));
    }
    else{
        console.log("DB connection established");
    }
});



app.get("/employees",(req,res)=>{
    mysqlConnection.query("Select * from employee",(err,rows,fields)=>{
        if(!err){
            console.log(rows);
        }
        else{
            console.log(err);
        }
    })
})
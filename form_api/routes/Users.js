const express=require('express');
const users=express.Router();
const cors=require('cors');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const User=require("../model/UserModel.js");
const EmployeeData=require("../model/UserData.js");
users.use(cors());

process.env.SECRET_KEY='secret';

//Register
users.post('/register',(req,res)=>{
    const today= new Date();
    const userData={
        username:req.body.username,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password,
        confirm_password:req.body.confirm_password,
        created:today
    }

    User.findOne({
        where:{
            username:req.body.username
        }
    })

        .then(user=>{
             if(!user){
                 const hash=bcrypt.hashSync(userData.password,10)
                 userData.password=hash
                 userData.confirm_password=hash
                 console.log(userData.password,"CP",userData.confirm_password)
                 User.create(userData)
                 .then(user=>{
                     let token=jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                         expiresIn: 1440
                     })
                     res.json({token:token})
                 })
             }else{
                 res.json({err:'User already exists'})
             }
        })
        .catch(err=>{
            res.send('error:' +err)
        })

})

//Login
users.post('/login',(req,res)=>{
    User.findOne({
        where:{
            username:req.body.username
        }
    })
        .then(user=>{
            if(bcrypt.compareSync(req.body.password,user.password)){
                let token=jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.json({token:token})
            }else{
                res.send('User does not exist')
            }
        })
        .catch(err=>{
            res.send("error:"+err)
        })
})


//Data
users.post('/userdata',(req,res)=>{
    const today= new Date();

    const employeeData={
        Emp_Name:req.body.Emp_Name,
        Emp_Code:req.body.Emp_Code,
        phone:req.body.phone,
        email:req.body.email,
        Emp_Title:req.body.Emp_Title,
        Salary:req.body.Salary,
        Job_Type:req.body.Job_Type,
        Visa_Status:req.body.Visa_Status,
        Client:req.body.Client,
        Date_of_joining:req.body.Date_of_joining,
        created:today
    }

    User.findOne({
        where:{
            Emp_Code:req.body.Emp_Code
        }
    })

    .then(user=>{
        console.log(user);
        if(!user){
            User.create(employeeData)
            .then(user=>{
                res.json(user)
            })            
        }else{
            res.send('Employee already exists')
        }
    })
    .catch(err=>{
        res.send("Error:"+err)
    })
})


users.get('/userdata',(req,res)=>{

    var decoded=jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

    User.findOne({
        where:{
            id:decoded.id
        }
    })
    .then(user=>{
        if(user){
            
            
        }
    })
    .catch(err=>{
        res.send("Error:" +err)
    })
})

module.exports=users;


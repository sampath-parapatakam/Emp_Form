const Sequelize= require('sequelize');
const db=require('../database/db.js');

module.exports=db.sequelize.define(
    'employee',
    {
        EmpID:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        Emp_Name:{
            type: Sequelize.STRING,
            unique: true
        },
        Emp_Code:{
            type: Sequelize.STRING
        },
        Phone:{
            type: Sequelize.INTEGER
        },
        email:{
            type: Sequelize.STRING
        },
        Emp_Title:{
            type: Sequelize.STRING
        },
        Salary:{
            type: Sequelize.INTEGER
        },
        Job_Type:{
            type: Sequelize.STRING
        },
        Visa_Status:{
            type: Sequelize.STRING
        },
        Client:{
            type: Sequelize.STRING
        },
        Date_of_joining:{
            type: Sequelize.DATE
        },
        created:{
            type:Sequelize.DATE,
            defaultValue:Sequelize.Now
        }
    },
    {
        timestamps:false
    }
)


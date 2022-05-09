var express = require('express');
var router = express.Router();
var EmployeeModal = require('../models/employees')

router.get('/', function(req,res){
    console.log("GET all Employee");
    res.json();
})

router.post('/new', async function(req,res){
    
    try{
        const{ name, gender,email} = req.body;
        const employee = await EmployeeModal({name, gender,email})

        const result = await employee.save();
        console.log(result);
        res.sendStatus(201);
    }catch(error){
        console.log("error while adding new employee", error)
        res.status(400).send('Error while adding new employee');
    }
    
})

router.get('/all', async function(req,res){
    try{
        const employees = await EmployeeModal.find();
        console.log("employees", employees);
        res.send(employees)
    }catch(error){
        console.log("Error while fetching", error)
    }
})

router.patch('/:id', async function(req,res){
    try{
        // const employeesId = 
        console.log("update", req.params.id)
        const {name, gender, email} = req.body;
        console.log("name gender email", name, gender,email)
        const doc = await EmployeeModal.findOne({_id: req.params.id })
        const employeeUpdate = await EmployeeModal.updateOne({_id: req.params.id}, {name,gender,email});

        // await doc.save();
        // const result = employeeUpdate.save();
        console.log(employeeUpdate.acknowledged)
        if (employeeUpdate.acknowledged === true)
            res.sendStatus(200);
        else
            res.sendStatus(400);
        console.log("employee update",employeeUpdate);
    }catch(error){
        console.log("Error while fetching", error)

    }
})

router.delete('/:id', async function(req, res){
    try{
        const deleteEmp = await EmployeeModal.deleteOne({_id: req.params.id})
        if (deleteEmp.acknowledged === true)
            res.sendStatus(200);
        else
            res.sendStatus(400);
    }catch(error){
        console.log("error while deleting")
    }
})

module.exports = router;
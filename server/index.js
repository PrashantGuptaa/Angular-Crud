const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const employeeRecords = require('./records');
const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


let maxId = 5;

app.get('/fetchAllEmployee', (req, res) => {
    res.status(200).json(employeeRecords);
});

app.get('/fetchEmployeeById/:employeeId', (req, res) => {
    const { employeeId } = req.params;
    const employee = employeeRecords.find(employee => employee.id == employeeId);
    return employee ? res.status(200).json(employee) : res.status(404).json({ message: 'Employee not found' });
})

// app.get('/employee/getAllEmployee', (req, res) => {
//     res.status(200).json(employeeRecords);
// });

// app.get('/employee/getEmployeeDetailById', (req, res) => {
//     const result = employeeRecords.find(employee => employee.id == req.query.employeeId);
//     console.log(req.query.employeeId, result);
//     res.status(200).json(result);
// })

// app.post('/employee/saveEmployee', (req, res) => {
//     console.log(req.body);
//     const employee = req.body;

//     employee.id = maxId++;
//     employeeRecords.push(employee);
//     res.status(200).json({message: "Record saved successfully"});
// })

app.listen(8100, () => console.log("Server is running on port 8100"));
const express = require('express');
const app = express();
const db = require('./db.js');
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/employees', function(req, res){
  db.getAllEmployees(function(rows){
    console.log('All employees sent');
    res.send(rows);
  });
});

app.get('/departments/:dept_id' , function(req, res){
  db.getEmployeesByDepartment(req.params.dept_id, function(rows){
    console.log('Employees sent for department ' + req.params.dept_id);
    res.send(rows);
  })
})

app.get('/EmployeeByName', function(req, res){
  db.getEmployeesByName(req.data.name, function(rows){
    console.log('Employees sent for name ' + req.data.name);
    res.send(rows);
  })
})

app.post('/add-employees', function(req, res){
  console.log(req.body);
  const empFName = req.body.fname;
  const empLName = req.body.lname;
  const empHouseNo = req.body.house_number;
  const empSName = req.body.street;
  const empTown = req.body.town;
  const empPostcode = req.body.postcode;
  const nin = req.body.nin;
  const bic = parseInt(req.body.bank_acc_info_id);
  var salary = parseInt(req.body.start_salary);
  var deptID = parseInt(req.body.dept_id);
  console.log("employee accessed");
  
    db.addEmployee(empFName,empLName, empHouseNo, empSName, empTown, empPostcode, nin, bic, salary, deptID, function(message){
                   res.send(message);
      console.log("employee added");
    });
});


app.listen(8001, function() {
  console.log('API listening on port 8001');
});


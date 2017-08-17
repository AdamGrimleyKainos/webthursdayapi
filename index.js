const express = require('express');
const app = express();
const db = require('./db.js');
var cors = require('cors');
app.use(cors());
//var bodyParser = require('body-parser');

app.get('/employees', function(req, res){
  db.getAllEmployees(function(rows){
    console.log('All employees sent');
    res.send(rows);
  });
});

app.get('/departments', function(req, res){
  db.getEmployeesByDepartment(req.body.dept_id, function(rows){
    console.log('Employees sent for department ' + req.body.dept_id);
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
  const empFName = req.body.fname;
  const empLName = req.body.lname;
  const empHouseNo = req.body.houseNumber;
  const empSName = req.body.streetname;
  const empTown = req.body.town;
  const empPostcode = req.body.postcode;
  const nin = req.body.nin;
  const bic = req.body.bank_acc_info_id;
  const salary = req.body.start_salary;
  const deptID = req.body.dept_id;
  
  if(empFName && empLName && empHouseNo && empSName && empTown && empPostcode && nin && bic && salary && deptID){
    db.addEmployee(empFName,empLName, empHouseNo, empSName, empTown, empPostcode, nin, bic, salary, deptID, function(message){
                   res.send(message);
    });
  };
});


app.listen(8001, function() {
  console.log('API listening on port 8001');
});


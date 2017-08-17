const express = require('express');
const app = express();
const db = require('./db.js');
//var bodyParser = require('body-parser');

app.get('/employees', function(req, res){
  db.getAllEmployees(function(rows){
    employee = rows;
    let jsonEmployee = JSON.stringify(employee);
    console.log('Request processed');
    res.send(jsonEmployee);
  });
});
/*
app.post('/employees', function(req, res){
  const empFName = req.body.fname;
  const empLName = req.body.lname;
  const empHouseNo = req.body.houseNumber;
  const empSName = req.body.streetname;
  const empTown = req.body.town;
  const empPostcode = req.body.postcode;
  const nin = req.body.nin;
  const bic = req.body.bank_acc_info_id;
  const salary = req.body.start_salary;
  
  if(empFName && empLName && empHouseNo && empSName && empTown && empPostcode && nin && bic && salary){
    db.addEmployee(empFName,empLName, empHouseNo, empSName, empTown, empPostcode, nin, bic, salary, function(message){
                   res.send(message);
    });
  };
}); */


app.listen(8001, function() {
  console.log('API listening on port 8001');
});


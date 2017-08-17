const mysql = require('mysql');
var obj = {}

const db = mysql.createConnection({
  host: '192.168.1.111',
  user: 'thursday',
  password: 'bunnies',
  database: 'employees'
});

db.connect(function(err){
  if(err) throw err;
  console.log("Connected to mysql");
});

exports.getAllEmployees = function(callback){
  db.query(
    "SELECT * FROM employee",
    function(err, rows){
      if(err) throw err;
      callback(rows);
      console.log("Rows sent");
    }
  );
}

exports.addEmployee = function(empFName,empLName, empHouseNo, empSName, empTown, empPostcode, nin, bic, salary, callback){
  db.query(
    "INSERT INTO employees(fname, lname, House_number, street_name, town, postcode, nin, bank_acc_info_id, startSalary) VALUES (?,?,?,?,?,?,?,?,?)",
    [empFName],
    [empLName],
    [empHouseNo],
    [empSName],
    [empTown],
    [empPostcode],
    [nin],
    [bic],
    [salary],
    function(err, rows){
      if(err) throw err;
      callback(rows);
    });
};

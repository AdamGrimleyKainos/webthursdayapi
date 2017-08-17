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

exports.getEmployeeByName = function(eName, callback){
  db.query(
    "SELECT * FROM employee WHERE fname = ?",
    [eName],
    function(err, rows){
      if(err) throw err;
      callback(rows);
      console.log("Rows sent");
    }
  );
}

exports.getEmployeesByDepartment = function(deptID, callback){
  db.query(
    "SELECT * FROM employee WHERE dept_id = ?",
    [deptID],
    function(err,rows){
      if(err) throw err;
      callback(rows);
    }
  )
}

exports.addEmployee = function(empFName,empLName, empHouseNo, empSName, empTown, empPostcode, nin, bic, salary, deptID, callback){
  db.query(
    "INSERT INTO employee(fname, lname, House_number, street, town, postcode, nin, bank_acc_info_id, start_salary, dept_id) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [empFName, empLName, empHouseNo, empSName, empTown, empPostcode, nin, bic, salary, deptID],
    function(err, rows){
      if(err) throw err;
      callback(rows);
    });
};

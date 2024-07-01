// Problem 1
let employeeJSON = [
  {
    "first name" : "Sam",
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : 40000,
    "raise eligible" : true
  },
  {
    "first name" : "Mary",
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : 18500,
    "raise eligible" : true
  },
  {
    "first name" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "raise eligible" : false
  }
];
console.log(employeeJSON);

//Problem 2
let companyJSON = {
  "company name" : "Tech Stars",
  "website" : "www.techstars.site",  
};
companyJSON["employees"] = employeeJSON
console.log(companyJSON);

//Problem 3
let annaJSON = {
    "first name" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raise eligible" : false
    };
//console.log(annaJSON)
employeeJSON[3] = annaJSON;
console.log(employeeJSON);

//Problem 4
let totalSalary = 0;
for (let i = 0; i < employeeJSON.length; i++) {
    let employeeObj = employeeJSON[i]
    //console.log(employeeObj.salary);
    totalSalary = totalSalary + employeeObj.salary
};
console.log(totalSalary);

//Problem 5
for (let x = 0; x < employeeJSON.length; x++) {
    //console.log(companyJSON["employees"][x]["raise eligible"]);
    let employeeData = employeeJSON[x] 
    if (employeeData["raise eligible"] == true) {
        employeeData["salary"] = employeeData["salary"] + (0.1 * employeeData["salary"])
        employeeData["raise eligible"] = false 
    }
    //console.log(employeeData["salary"])
};
console.log(companyJSON);

//Problem 6

for (y = 0; y < employeeJSON.length; y++) {
    employeeObj = employeeJSON[y];
    //console.log(employeeObj)
    employeeObj["wfh"] = false
    if (employeeObj["first name"] == "Anna") {
        employeeObj["wfh"] = true;
        //console.log(employeeObj["first name"])
    }
    else if (employeeObj["first name"] == "Sam") {
        employeeObj["wfh"] = true;
        //console.log(employeeObj["first name"]);
    };
}
console.log(companyJSON)
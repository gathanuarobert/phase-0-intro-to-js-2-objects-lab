// Write your solution in this file
let employee = {
    name: "Derek Hale",
    streetAddress:"Broadway 29"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee}
    newEmployee[key] = value

    return newEmployee
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value

    return employee
}

function  deleteFromEmployeeByKey(employee, key){
    const worker = {...employee}

    delete worker[key]

    return worker
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]

    return employee
}


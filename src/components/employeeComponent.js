import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import EmployeeService from "../services/employeeService.js"
import ValidityService from "../services/ValidityService.js"


console.log("Customer component yüklendi")

let logger1 = new MongoLogger()
let validityService=new ValidityService();

let employeeService=new EmployeeService();

console.log("--------------------------")


let employeeToAdd1=new Customer(1,"Fadime","Gökkaya","Muğla",23, "45879621");
employeeToAdd1.type="employee"
 let employeeToAdd2=new Customer(1,"Mehmet","Çelik","İzmir",30, "45698721");
 employeeToAdd2.type="employee"
 employeeService.addEmployee(employeeToAdd1)
 employeeService.addEmployee(employeeToAdd1)
 (employeeToAdd2)
console.log("------------employees list---------------------")
 console.log(employeeService.getAllEmployees())

console.log("------------sorted employees list-------------")
console.log(employeeService.getEmployeesSorted())
console.log("------------list of employees from users-------------")
employeeService.load()
console.log(employeeService.employees)
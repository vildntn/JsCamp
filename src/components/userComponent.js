import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import CustomerService from "../services/customerService.js"
import UserService from "../services/userService.js"
import ValidityService from "../services/ValidityService.js"


console.log("User component yüklendi")

let logger1 = new MongoLogger()
let validityService=new ValidityService();
let userService = new UserService(logger1)
let customerService=new CustomerService(validityService)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

// console.log(userService.list())
// console.log(userService.getById(2))




let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("--------------------------")
// userService.load()

let customerToAdd1=new Customer(1,"Seda","Yılmaz","Ankara",20, "1548964");
 customerToAdd1.type="customer"
 let customerToAdd2=new Customer(1,"Okan","Kurt","İstanbul",28, "25694425");
 customerToAdd2.type="customer"
// userService.add(customerToAdd)
// console.log(userService.customers)
// console.log(userService.employees)
// console.log(userService.errors)
// console.log(userService.getCustomersSorted())
customerService.addCustomer(customerToAdd1)
customerService.addCustomer(customerToAdd2)
console.log("------------customers list---------------------")
 console.log(customerService.getAllCustomers())
console.log("------------errors list------------------------")
console.log(customerService.errors)
console.log("------------sorted customers list-------------")
console.log(customerService.getCustomersSorted())
console.log("------------list of customers from users-------------")
customerService.load()
console.log(customerService.customers)


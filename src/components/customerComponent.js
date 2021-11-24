import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import CustomerService from "../services/customerService.js"
import Validator from "../validate/validator.js"


console.log("Customer component yüklendi")

let logger1 = new MongoLogger()
let validator=new Validator()

let customerService=new CustomerService(validator)

console.log("--------------------------")


let customerToAdd1=new Customer(1,"Seda","Yılmaz","Ankara",20, "1548964");
 customerToAdd1.type="customer"
 let customerToAdd2=new Customer(1,"Okan","Kurt","İstanbul",28, "25694425");
 customerToAdd2.type="customer"
customerService.addCustomer(customerToAdd1)
customerService.addCustomer(customerToAdd2)
console.log("------------customers list---------------------")
 console.log(customerService.getAllCustomers())

console.log("------------sorted customers list-------------")
console.log(customerService.getCustomersSorted())
console.log("------------list of customers from users-------------")
customerService.load()
console.log(customerService.getAllCustomers())

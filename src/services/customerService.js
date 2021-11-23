import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class CustomerService {
  constructor(validityService) {
    this.customers = [];
    this.type = "customer";
    this.validityService=validityService;
    this.errors=validityService.errors
   
  }

  load() {
      for (const user of users) {
          if(this.checkCustomerTypeIsTrue(user) && !this.checkCustomerValidityForErrors(user)){
            this.customers.push(user);
          }
      }
  }

  addCustomer(customer) {
    if ( this.checkCustomerTypeIsTrue(customer)) {
        if(!this.checkCustomerValidityForErrors(customer) && !this.validityService.checkAgeIsValid(customer)){
            this.customers.push(customer);
        }
    }
    else{
        this.errors.push(
            new DataError("This user can not be added.Wrong user type", customer)
          );
    }
  }

  getAllCustomers() {
    return this.customers;
  }

  getCustomerByid(id) {
    return this.customers.find((c) => c.id === id);
  }

  getCustomersSorted() {
    return this.customers.sort((customer1, customer2) => {
     return this.validityService.compareTo(customer1.firstName, customer2.firstName)
    });
  }

  //This method has been written to make it more understandable what is done.
  checkCustomerTypeIsTrue(customer) {
    return (this.validityService.compareTo(this.type,customer.type)==0);
  }

  checkRequiredFields(){
      
  }

  checkCustomerValidityForErrors(customer) {
    let requiredFields = "id firstName lastName age city creditCardNumber".split(" ");
    let hasErrors=false
    for (const field of requiredFields) {
      if (!customer[field]) {
        hasErrors=true
        this.errors.push(
          new DataError(`Validation problem, ${field} is required`, customer)
        );
      }
    }
    
    return hasErrors;
  }




}

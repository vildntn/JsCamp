import ErrorDataResult from "../core/results/errorDataResult.js";
import ErrorResult from "../core/results/errorResult.js";
import SuccessDataResult from "../core/results/successDataResult.js";
import SuccessResult from "../core/results/successResult.js";
import { users } from "../data/users.js";


export default class CustomerService {
  constructor(validator) {
    this.customers = [];
    this.type = "customer";
    this.validator = validator;
    this.requiredFields=["id","firstName" ,"lastName" ,"city","age" ,"creditCardNumber"]
  }

  load() {
    for (const user of users) {
      if (
        this.checkCustomerTypeIsTrue(user) &&
        this.validator.checkValidityForErrors(user,this.requiredFields)
      ) {
        this.customers.push(user);
       
      }
    }
    return new SuccessResult("Added all customers from user data.")
  }

  addCustomer(customer) {
    if (this.checkCustomerTypeIsTrue(customer)) {
      if (
        this.validator.checkValidityForErrors(customer,this.requiredFields) &&
        this.validator.checkAgeIsValid(customer)
      ) {
        this.customers.push(customer);
        return new SuccessResult("customer added")
      }
    }
     return new ErrorDataResult(customer,"This user can not be added.Wrong user type");
    
  }

  getAllCustomers() {
    return new SuccessDataResult(this.customers,"Customers Listed")
  }

  getCustomerByid(id) {
    return new SuccessDataResult(this.customers.find((c) => c.id === id), "Data Listed")
  }

  getCustomersSorted() {
    return new SuccessDataResult( this.customers.sort((customer1, customer2) => {
      return this.validator.compareTo(
        customer1.firstName,
        customer2.firstName
      );
    }), "Customers List Sorted");
  }

  //This method has been written to make it more understandable what is done.
  checkCustomerTypeIsTrue(customer) {
    return this.validator.compareTo(this.type, customer.type) == 0
  }


}

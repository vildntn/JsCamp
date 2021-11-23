import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
  constructor(loggerService) {
    this.employees = [];
    this.customers = [];
    this.errors = [];
    this.loggerService = loggerService;
  }

  load() {
    // for (const user of users) {
    //   switch (user.type) {
    //     case "customer":
    //       if (!this.checkCustomerValidityForErrors(user)) {
    //         this.customers.push(user);
    //       }
    //       break;
    //     case "employee":
    //       if (!this.checkEmployeeValidityForErrors(user)) {
    //         this.employees.push(user);
    //       }

    //       break;
    //     default:
    //       this.errors.push(new DataError("Wrong user type", user));
    //       break;
    //   }
    // }
  }


  

  add(user) {
    // switch (user.type) {
    //   case "customer":
    //     if (!this.checkCustomerValidityForErrors(user)) {
    //         this.customers.push(user);
    //       }
    //     break;

    //   case "employee":
    //     if (!this.checkEmployeeValidityForErrors(user)) {
    //         this.employees.push(user);
    //       }
    //     break;
    //     default:
    //         this.errors.push(new DataError("This user can not be added.Wrong user type", user));
    //         break;
    // }
    this.loggerService.log(user);
  }

  
}

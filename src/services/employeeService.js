import ErrorDataResult from "../core/results/errorDataResult.js";
import SuccessDataResult from "../core/results/successDataResult.js";
import SuccessResult from "../core/results/successResult.js";
import { users } from "../data/users.js";

export default class EmployeeService {
  constructor(validator) {
    this.employees = [];
    this.type = "employee";
    this.validator = validator;
    this.requiredFields=["id","firstName" ,"lastName" ,"city","age" ,"salary"]
  }

  load() {
    for (const user of users) {
      if (
        this.checkEmployeeTypeIsTrue(user) &&
       this.validator.checkValidityForErrors(user,this.requiredFields)
      ) {
        this.employees.push(user);
        return new SuccessResult("Added all employees from user data.")
      }
    }
  }
  addEmployee(employee) {
    if (this.checkEmployeeTypeIsTrue(employee)) {
      if (
        this.validator.checkValidityForErrors(employee,this.requiredFields) &&
        this.validator.checkAgeIsValid(employee)
      ) {
        this.employees.push(employee);
        return new SuccessResult("employee added")
      }
    } 
    return new ErrorDataResult(employee,"This user can not be added.Wrong user type")
    }
  

  getAllEmployees() {
    return new SuccessDataResult(this.employees,"All Employees Listed");
  }

  getEmployeeByid(id) {
    return new SuccessDataResult(this.employees.find((e) => e.id === id), "Employee Founded");
  }

  getEmployeesSorted() {
    return new SuccessDataResult( this.employees.sort((employee1, employee2) => {
      return this.validator.compareTo(
        employee1.firstName,
        employee2.firstName
      );
    }), "Employees List Sorted");
  }


   //This method has been written to make it more understandable what is done.
  checkEmployeeTypeIsTrue(employee) {
  return (this.validator.compareTo(this.type,employee.type)==0);
}
}

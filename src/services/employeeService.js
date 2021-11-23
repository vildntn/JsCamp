import { users } from "../data/users";

export default class EmployeeService {
  constructor(validityService) {
    this.employees = [];
    this.type = "employee";
    this.validityService = validityService;
    this.errors = this.validityService.errors;
  }

  load() {
    for (const user of users) {
      if (
        this.checkEmployeeTypeIsTrue(user) &&
        !this.checkEmployeeValidityForErrors(user)
      ) {
        this.employees.push(user);
      }
    }
  }
  addEmployee(employee) {
    if (this.checkEmployeeTypeIsTrue(employee)) {
      if (
        !this.checkEmployeeValidityForErrors(employee) &&
        !this.validityService.checkAgeIsValid(employee)
      ) {
        this.employees.push(employee);
      }
    } else {
      this.errors.push(
        new DataError("This user can not be added.Wrong user type", employee)
      );
    }
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployeeByid(id) {
    return this.employees.find((e) => e.id === id);
  }

  getEmployeesSorted() {
    return this.employees.sort((employee1, employee2) => {
      return this.validityService.compareTo(
        employee1.firstName,
        employee2.firstName
      );
    });
  }

  checkEmployeeValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }
    return hasErrors;
  }

   //This method has been written to make it more understandable what is done.
  checkEmployeeTypeIsTrue(employee) {
  return (this.validityService.compareTo(this.type,employee.type)==0);
}
}

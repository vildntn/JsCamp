import DataError from "../models/dataError.js";

export default class ValidityService {
  constructor() {
    this.errors = [];

  }

  checkAgeIsValid(user){
      let hasErrors=false;
    if (Number.isNaN(Number.parseInt(+user.age))) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem ${user.age} is not a number`, user)
        );
      }
      return hasErrors;
  }

  compareTo(comparable1,comparable2){
      if(comparable1>comparable2){
          return 1;
      }else if(comparable1===comparable2){
         return 0;
      }else{
          return -1;
      }
  }
}

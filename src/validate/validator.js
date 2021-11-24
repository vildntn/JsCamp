import ErrorDataResult from "../core/results/errorDataResult.js";
import SuccessDataResult from "../core/results/successDataResult.js";
import SuccessResult from "../core/results/successResult.js";

export default class Validator {
    constructor() {
  
    }
  
    checkAgeIsValid(user){
      if (Number.isNaN(Number.parseInt(+user.age))) {
         return new ErrorDataResult(user,`Validation problem ${user.age} is not a number`)
        }
        return new SuccessResult();
    }

    checkValidityForErrors(user, requiredFields) {
        for (const field of requiredFields) {
          if (!user[field]) {
            return new ErrorDataResult(user,`Validation problem, ${field} is required`)
          }
        }
    
        return new SuccessDataResult();
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
  
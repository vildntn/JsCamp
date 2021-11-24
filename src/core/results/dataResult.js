import Result from "./result.js";

export default class DataResult extends Result{

    constructor(data, success,message){
        super(success,message)
        this.data=data
    }
}
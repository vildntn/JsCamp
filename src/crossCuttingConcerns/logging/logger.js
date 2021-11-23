//elastic search loglar için mi?
export  class BaseLogger{

    log(data){
        console.log("default logger "+data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to elastic "+data)
    }
}


export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to mongo "+data)
    }
}
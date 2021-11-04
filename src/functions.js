
//Is the number prime or not?
function isNumberPrime(number){

    if(number<=1){
        return false;
    }
    for (let i = 2; i < number; i++) {
        if(number%i==0){
            return false;     
        }  
    }
    return true;
}


//positive divisors of number
function posDivisors(number){
    let total=0;
    for (let i = 1; i < number; i++) { 
       if(number%i==0){
           total+=i;
       }   
    }
    return total;
}



//------------Prime number or not-----------------

function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
       if(isNumberPrime(numbers[i])){
        console.log(`${numbers[i]} is a prime number`);
    } else {
        console.log(`${numbers[i]} is a not prime number`);
    }
        
    }
}
findPrime(2,5,8,21, 13)



//------------Friend numbers or not-------------------------

let friendNumbers=(s1,s2)=>{
    if(posDivisors(s1)==s2 || posDivisors(s2)==s1){
        console.log(`${s1} and ${s2} are friend numbers`)
    }
    else{
        console.log(`${s1} and ${s2} aren't friend numbers`)
    }
}
friendNumbers(66928, 66992)


//---------------Perfect Numbers up to 1000------------------------------
console.log("Perfect Numbers up to 1000 are : ")
let perfectNumbers=function (){
    for (let i = 1; i < 1000; i++) {
       if((posDivisors(i)+i)==i*2){
           console.log(i)
       }
    }
}

perfectNumbers()

//---------------Prime Numbers up to 1000------------------------------
console.log("Prime Numbers up to 1000 are :")

function primeNumbers(){
    for (let i = 0; i < 1000; i++) {
        if(isNumberPrime(i)){
            console.log(i);
        } 
    }
}

primeNumbers()
// starting with Error Handling

try{
    let car= newCar;
}
catch(error){
    console.log(error)
}
console.log('continue');

//using finally
try{
    let car= newCar;
}
catch(error){
    console.log(error)
}
finally{
    console.log('continue');
}

// throw error
try{
    throw new Error("Test");
    //Error is build in object in js
}
catch(error){
    console.log(error)
}
finally{
    console.log('continue');
}

//Promise
let promise= new Promise(
    function(resolve,reject){
        setTimeout(resolve, 100, 'Resolved');
    }
)

promise.then(
    value=>console.log('Resolved:' + value),
    error=>console.log('Rejected:' + error)
)

let promise1= new Promise(
    function(resolve,reject){
        setTimeout(reject, 100, 'rejected');
    }
)

promise1.then(
    value=>console.log('Resolved:' + value),
    error=>console.log('Rejected:' + error)
)

/* 
Objects
object and name value pair called properties
*/
let person={
    name:"Ankur", //this is property
    age:32,
    parttime:false
}
console.log(person.name, person.age, person.parttime, typeof(person))

person.age=40;//changing object
console.log(person.age);
/*
some build in object
*/
console.log(typeof(Math))
console.log(typeof(String))
console.log(typeof(Date))
console.log(typeof(Number))


//Type of

console.log(typeof(1));//number
console.log(typeof(true));//boolean
console.log(typeof("True"));//string
console.log(typeof(function(){}));//function
console.log(typeof({}));//object
console.log(typeof(null));//object
console.log(typeof(undefined));//undefined
console.log(typeof(NaN));//number

//Converstion
//anything to string

//convert to string
let foo123=123;
console.log(foo123.toString(), typeof(foo123.toString()));

//convert string to interger

console.log(Number.parseInt('55'), typeof(Number.parseInt('55')));
console.log(Number.parseFloat('55.98'), typeof(Number.parseFloat('55.98')));
//this will skip characters 
console.log(Number.parseInt('55ABC'), typeof(Number.parseInt('55ABC'))); //55
console.log(Number.parseInt('ABC55ABC'), typeof(Number.parseInt('ABC55ABC'))); //NaN


//Construction Function
//declarations
function Car(id){
    this.carId=id, // properties
    this.start=function() // method
    {
        console.log('start: ' + this.carId)
    };
}
// create
let c= new Car(456);
c.start();
//prototype
//declarations
function CarP(id){
    this.carId=id // properties
    
}

//Adding Prototype
// Prottyping save memory by adding menthod directly to the prototype instead of function itself
CarP.prototype.start=function() // method
    {
        console.log('start: ' + this.carId)
    };

// create
let cP= new CarP(342);
cP.start();








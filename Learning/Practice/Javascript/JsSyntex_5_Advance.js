
//Constant

const conVar=100;

console.log(conVar);
try
{
    conVar=200;
}
catch(exception)
{
    console.log("constant cannot be changed");
}

//const unintilized; (this is wrong; "constant must be intilized.")

//let and var
try
{
    console.log(carId);//error
    let carId=42;
}
catch(exception)
{
    console.log(exception)
}

try
{
    console.log(carId);//undefined (not an error)
    var carId=42;
}
catch(exception)
{
    console.log(exception)
}

//scope let is local scope or block scope
if(true)
{
    let foo=9;
}
try{
    console.log(foo);
}
catch(exception)
{
    console.log(exception)
}
if(true)
{
    var foo1=9;
}
try{
    console.log(foo1);
}
catch(exception)
{
    console.log(exception)
}


/*Rest Parameter
Convert Values into array
Should be the last Parameter
*/

function RestFunction(...Ids)
{
    console.log(typeof(Ids));
    console.log(Ids)
}
RestFunction(1,2,3);

/*Destructuring Array
Convert Array into values

*/

let Ids=[1,2,3]
let [id1,id2,id3]=Ids;
console.log(id1, typeof(id1));

//including element as remaining which will be array (type of object)
let SomeIds=[1,2,3]
let idnew, rem;
[idnew, ...rem]=SomeIds;
console.log(idnew, typeof(idnew));
console.log(rem, typeof(rem));

//skiping first element
let [, ...rem1]=SomeIds;
console.log(rem1, typeof(rem1));


//Destructing objects
let mycar={mycarid:1, name:'mycar'};
console.log(mycar);

let {mycarid,name} = mycar; // Destructing Objects
console.log(mycarid, name);

/*
Like Array you cannot declare and intialized object in seperate line
Should be done in same line as {} also means block
Below is not allowed
let mycarid,name;
{mycarid,name} = mycar; 
So to do that use brackets as below
*/

//let mycar1={mycarid:1, name:'mycar'};// for below code this will give undefine undefine
let mycar1={mycarid1:1, name1:'mycar'};// for below code this will give undefine undefine
let mycarid1,name1;
({mycarid1,name1} = mycar1); // brackets to manage object initilization is seperate line
console.log(mycarid1, name1);

/*spread syntax
it take array and convert it into values (parameter of functions)
This is opposite to rest parameter
*/
function myNumbers(number1, number2, number3)
{
    console.log(number1,number2, number3);

}

let numbers=[1,2,3]

myNumbers(...numbers);
console.log(typeof(numbers));

// in Javascripts both string and array are iteratables
let mystring='abc'
myNumbers(...mystring);



console.log(11111)


//Foreach for Array

let carIds= [
    {carId:1, Name:"A"},
    {carId:2, Name:"B"},
    {carId:3, Name:"C"}
];

carIds.forEach(car=>console.log(car));
carIds.forEach((car,index)=>console.log(car, index));


//filter
var result=carIds.filter(car=>car.carId===1);
console.log(result, typeof(result));

//every
result=carIds.every(car=>car.carId>1); //is all element has this conditions
console.log(result, typeof(result), "every");

//finf
result=carIds.find(car=>car.carId>1);
console.log(result, typeof(result));



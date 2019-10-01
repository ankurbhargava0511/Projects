/*Functions*/

//Define
function showMessage()
{
    console.log('its function')
}
//execution
showMessage();

//with param
function showMyMessage(message)
{
    console.log(message)
}

showMyMessage('My message')

//with return valur
function DoSomething(message)
{
    return message + message;
}
let retValue=DoSomething("test");
console.log(retValue);

//variable scope
let _v=111;
function scopevalue()
{
    let _v=123;
    console.log(_v);
}
scopevalue();
console.log(_v);




//Advance scope check 

function myfunction(val)
{
    let message="start";
    //message= start
    let startFn=function overridefn()
    {
        let message="override";
        console.log(message);
        //message=override
    }
    startFn();
    console.log(message);
    //message= start
}
myfunction(1); 
//output=== start;
//above message override is in block scope of overridefn
//for block scope use let


if(5===5)
{
    let message='test';
}
try
{
    console.log(message); // undefined
}
catch(ex)
{
    console.log(ex);
}
// Hoisting
if(5===5)
{
    var message1='hoisting message';
}
console.log(message1); // This is call hoisting

// Their is no block scope for var keyword
/*
when Javascript compiles all of your code, 
all variable declarations using var are hoisted/lifted to the top of their functional/local scope 
(if declared inside a function) or to the top of their global scope 
(if declared outside of a function) regardless of where the actual declaration has been made.
*/

//iife
//imediately invoke
(function() {
        let messageiife='This is IIfE';
        console.log(messageiife);
    })();
//function expression mean assining into variable
let app=(function() {
    let messageiife='This is IIfE';
    console.log(messageiife);
    return {};
})();

console.log(app);


//closure 
//
let app1=(function() {
    let id=1;
    return { id:id};
    // if i remove this you cannot excess inner values, 
    //this return is required to hold reference to inner items
    // once function is execute its variable go out of scope . but closure keep them persisted
})();

console.log(app1 ,app1.id);

let app2=(function() {
    let id=1;
    let idnew1=function()
    {
        return id;
    };
    return { myid:idnew1()};
})();

console.log(app2, app2.myid);



//this keyword

let o=
{
    id:123,
    name: function ()
    {
        let name1="test";
        console.log(this);
        return name1;
    }
}
let vv1=o.name();
console.log(o, o.name(), o.name().name1, vv1, o.id); 


let oi={
    carId:123,
    getId:function(){
        console.log(this);
        return this.carId;
    }
}
console.log(oi.getId());
// change context on object (this)
//call use to to call function with new context

let newCar={carId:456};
console.log(oi.getId.call(newCar));
//Apply = with Apply you can pass arguments as array 
let oi1={
    carId:123,
    getId:function(prefix){
        return prefix +this.carId;
    }
}
console.log(oi1.getId.apply(newCar,['ID: ']));

//bind :we make copy of function and bind the contexts
// call and bind will not copy function but change 'this'

let newCar1={carId:512};
let newFn=oi.getId.bind(newCar1);
console.log(newFn());

//Arrow function --> function delaration more concise
// arraw function do not have thir 'this', this refer to 
//enclosing context
let getId=()=>123;
console.log(101,getId());

let getIdPar= Param => Param + 1;
console.log(102,getIdPar(123));

let getIdSum= (num1, num2) => {return num1 + num2};
console.log(103,getIdSum(123,123));


//Default Parameter
let car= function(carId, city='NY')
{
    console.log(carId, city);
}

console.log(car(1234));
console.log(car(1234, 'AB'));



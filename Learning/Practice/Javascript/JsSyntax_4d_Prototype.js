'use strict'

var arr=[1,2,3]
var last=arr[arr.length-1];

console.log(last);

// we extend this by defining property to its prototype

Object.defineProperty(Array.prototype,'last',{get:function(){
    return this[this.length-1];
}});

console.log(arr.last);

var arrstr=['A', 'b', 'c'];
console.log(arrstr.last)

// What is prototype
// below function will become prototype for all instance created from it
var myfunc=function(){} 
console.log(myfunc.prototype) //{}

// its will have a prototype of object from where it is inherited
var obj={name:'myobject'}
console.log(obj.prototype); // undefined
console.log(obj.__proto__); //object {constructor:}

//

function Cat(name, color)
{
    this.name=name
    this.color=color
}

var mycat= new Cat('mycat','col')
console.log(Cat.prototype) // object{}
console.log(Cat.__proto__)  //function
console.log(mycat.prototype) // undefine
console.log(mycat.__proto__) //object{} 

console.log(Cat.prototype===mycat.__proto__);

Cat.prototype.age=3;
console.log(Cat.prototype) // object{age:3}
console.log(mycat.__proto__) //object{age:3}

mycat.age=5;
// here we are only adding age propety to instance not to its prototype
console.log(mycat.age) // 5
console.log(mycat.__proto__.age) //3

console.log(mycat.hasOwnProperty('age')); //true

// how it  work
/*
Every function/object (ex Cat) when create js will add a prototype property to it
When we create instance of object Js will add __proto__ to it
this this case __proto__ : Cat
When we use any instance it first chech if it has property if not check prototype
*/
/*
All objects start with null --> object{}-->so on
*/
console.log(mycat.__proto__) //Object{age:}
console.log(mycat.__proto__.__proto__) //object{}
console.log(mycat.__proto__.__proto__.__proto__) //null


// inheritance via functions
// base
function Animal(voice)
{
    this.voice=voice||'grunt'
}
// additing method to animal
Animal.prototype.speak=function()
{
    console.log(this.voice);
}

function Dog(name, color)
{
    Animal.call(this,'boh') // this is how you call Animal constructor
    this.name=name
    this.color=color
}
// creating Animal as Dg prototype
Dog.prototype=Object.create(Animal.prototype)
// we use object.create just to add prototype . if we use new it will initilize Animal
Dog.prototype.constructor=Dog 
// this will call Dog constructor else it would have called Animal constructor

var mydog= new Dog('mydog', 'kkk');
console.log(mydog);
mydog.speak();

console.log(mydog.__proto__);// Animal
console.log(mydog.__proto__.__proto__);//object{constructor:}
console.log(mydog.__proto__.__proto__.__proto__);//object{}
console.log(mydog.__proto__.__proto__.__proto__.__proto__); // null


// we can do the same with class syntax


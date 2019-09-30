'use strict'

function logValue(obj)
{
    console.log(obj);
}
//Object literals

var cat={name:'cat', color:'white'}
logValue(cat);
logValue(cat.name);

//Adding properties in dynamic language
cat.age=3;
logValue(cat);
//Adding Methods
cat.speak=function(){console.log('speak')};
cat.speak();

//We can create object literals as below
var cat1= {name:'cat', color:'white', age:4,speak:function(){console.log('c1 speak')}};

logValue(cat1);cat1.speak();

//construction function to create multiple instance
function Dog()
{
    this.name='myDog',
    this.color='White'
}
//this is just function not object
function DogFn()
{
    let name='myDog';
    let color='White';
}

var dog= new Dog();
logValue(dog);

// what if I remove 'new' . It will not construct the object and return undefine
try
{
    var dog1= Dog(); // Here 'this' keyword will refer to global object and so properties will be undefined
    logValue(dog);
}
catch(ex)
{
    logValue(ex);
}
var d=DogFn();
logValue(d);

// Now let create good construction function
function DogCo(name, color)
{
    this.name=name;
    this.color=color;
}
var mydog=new DogCo('MyDog', 'Black');
logValue(mydog);

// Object.create 
// this is actually what happen internallly when you used Object literal or contruction function

var catObj= Object.create(Object.prototype,{
    name:{
        value:'Cat',
        enumerable:true,
        writable:true,
        configurable:true
    },
    color:{
        value:'White and Black',
        enumerable:true,
        writable:true,
        configurable:true
    }
})
logValue(catObj);
// ES6 Classes
class classCat
{
    constructor(name, color)
    {
        this.name=name;
        this.color=color;
    }
}
var cclass= new classCat('catclass', 'NA');
logValue(cclass);

class classCatWithMethod
{
    constructor(name, color)
    {
        this.name=name;
        this.color=color;
    }
    speak(){
        console.log('say');
    }
}

var classCatMethod= new classCatWithMethod('methodcat', 'color');
logValue(classCatMethod);
classCatMethod.speak();

/*Object Properties*/
// Using Bracket Notation

var horse={
    name:'Horse',
    color:'Brown'
}

logValue(horse.color);
logValue(horse['color']);// Same as above

horse['leg']=4;
logValue(horse);

// Get Property Descriptor
logValue(Object.getOwnPropertyDescriptor(horse,'name')); //Object {value: "Horse", writable: true, enumerable: true, configurable: true}

horse.name='ChangedHorse';
logValue(horse);

// Writable
Object.defineProperty(horse, 'name', {writable:false});
try{
    horse.name='ChangeHorse1';// TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    // this error comes only in strict mode
}
catch(ex)
{
    logValue(ex);
}
// Look at below example
var horse1={
    name:{first:'myhorse', last:'last'},
    color:'Brown'
}
Object.defineProperty(horse1, 'name', {writable:false});
try{
    horse1.name='ChangedHorse1';// TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    // this error comes only in strict mode
}
catch(ex)
{
    logValue(ex);
}

// but see i can change first evn though name is writable =false as it only look the top level pointer not the object below
horse1.name.first='ChangedHorse1';

logValue(horse1);
logValue(horse1.name.first);

// to block that we need to freeze entire property
Object.freeze(horse1.name);
try{
    horse.name.first='ChangeHorse2';// TypeError: Cannot assign to read only property 'first' of object '#<Object>'
    // this error comes only in strict mode
}
catch(ex)
{
    console.log(ex, 'freeze');
}
// Enumerable
var myobject={
    name:{first:'first', last:'last'},
    color:'color'
}

// 'for... in' loop
for(var propName in myobject)
{
    console.log(propName + ':' + myobject[propName], 'enumerable'); // use of bracket notation 
    //name:[object Object] 
    //color:color 
}
console.log(Object.keys(myobject), 'enumerable');// Array(2) ["name", "color"]
console.log(JSON.stringify(myobject), 'enumerable');// {"name":{"first":"first","last":"last"},"color":"color"} 


Object.defineProperty(myobject, 'name', {enumerable:false});
for(var propName in myobject)
{
    console.log(propName + ':' + myobject[propName], 'non enumerable'); // use of bracket notation 
    //color:color 
}
console.log(Object.keys(myobject), 'non enumerable');// Array(1) ["color"]
console.log(JSON.stringify(myobject), 'non enumerable');// {"color":"color"}

// configurable
var sheep={
    name:{first:'first', last:'last'},
    color:'color'
}
Object.defineProperty(sheep, 'name', {writable:false}) // Allowed
Object.defineProperty(sheep, 'name', {enumerable:false}) // Allowed

console.log(sheep,'before delete');// Object {color: "color", name: Object}
delete sheep.color;
console.log(sheep,'after delete');//Object {name: Object}

sheep['color']='Changed color';//Object {color: "Changed color", name: Object}
logValue(sheep);

Object.defineProperty(sheep, 'name', {writable:true}) // Allowed
Object.defineProperty(sheep, 'name', {enumerable:true}) // Allowed

// now making property non configurable
Object.defineProperty(sheep, 'name', {configurable:false})
try{
    Object.defineProperty(sheep, 'name', {enumerable:false}) //not allowed
}
catch(ex)
{
    console.log(ex, 'configuration=false') //TypeError: Cannot redefine property: name
}
try{
    
    Object.defineProperty(sheep, 'name', {configurable:true})//not allowed
}
catch(ex)
{
    console.log(ex, 'configuration=false') //TypeError: Cannot redefine property: name
}
Object.defineProperty(sheep, 'color', {configurable:false})
try{
    
 delete sheep.color;//not allowed
}
catch(ex)
{
    console.log(ex, 'configuration=false')// TypeError: Cannot delete property 'color' of #<Object>
}


// getters and setters

var person={
    name:{first:'first', last:'last'}
}
Object.defineProperty(person, 'fullname',
{
    get:function(){
        return this.name.first + ' ' + this.name.last;
    },
    set:function(value){
        var parts= value.split(' ');
        this.name.first=parts[0];
        this.name.last=parts[1];
    }
})

console.log(person, person.fullname, person.name.first, person.name.last);
/*Object {name: Object, fullname: <accessor>}
first last
first
last
*/
person.fullname='first1 last123';
console.log(person, person.fullname, person.name.first, person.name.last);
/*Object {name: Object, fullname: <accessor>}
first1 last123
first1
last123
*/
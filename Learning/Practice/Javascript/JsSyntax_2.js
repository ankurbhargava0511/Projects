/*
Flows
*/

//If
let value=5
if(value===5)
    console.log("is five")
value=12
if(value>10)
    console.log("greater the 10")
value=1
if(value<10)
    console.log("less the 10")
if(value!==10)
    console.log("not 10")

//truthy and falsy
if(false)
    console.log("its falsy")
else if(0)
    console.log("its falsy")
else if("") //empty string
    console.log("its falsy")
else if(null)
    console.log("its falsy")
else if(undefined)
    console.log("its falsy")
else if(NaN)
    console.log("its falsy")
else
    console.log("now its truthy")

//switch
let switchvalue="Test"
switch(switchvalue)
{
    case "test":
        console.log("test");
        break;
    case "Test":
            console.log("Test");
            break;
    default:
        console.log("default");
        break;
}

//for
console.log('for for')
for(let i=0;i<3;i++)
{
    console.log(i)
}

//while
console.log('for while')
let cn=1
while(cn<5)
{
    console.log(cn);
    cn++;
}

//Controlling loop
//you dont need to keep intilized in  for loop but then you have to keep
// intilized before loop
//break statement will exit the loop as sson as it hit break
console.log('for break')
let i=0;
for (; i<12;i++)
{
    if(i===8)
    {
        break;
    }
}
console.log(i);

//Continue will only skip current iteration.
// in below statement it will skip 2
console.log('for continue');

for (let i=0; i<4;i++)
{
    if(i===2)
    {
        continue;
    }
    console.log(i);
}


/*
Operators
--Equality 
*/

console.log(1=="1")   // do type conversion 
console.log(1==="1") // false // no type conversion
console.log(1===1)
console.log(2!="1")
console.log(2!="2") //false as this is consider equal
console.log(2!=="1")

//unary
let var1=1;
console.log(++var1); // increment before //2
console.log(var1++); // incremented after //2
console.log(var1);//3
console.log(--var1); // increment before //2
console.log(var1--); // incremented after //1
console.log(var1);//1

let newVal="1"
console.log(typeof(newVal))

console.log(+newVal, typeof(+newVal))
console.log(-newVal, typeof(-newVal))


//logical (boolean) &&(AND) ||(OR)  !(NOT)  

if(5===5 && 3 ===3) // All conditions true
    console.log("truthy &&");
if(5===5 || 3===6 ) // one condition true
    console.log("truthy ||");
if(!(5===7 || 3===6 ))  // no condition true 
    console.log("truthy !");
//truthy and false
let usersetting =null; // falsy
let newsetting={name:"test"}; // truthy
let defaultsetting={name:"default"};

console.log(usersetting||newsetting|| defaultsetting); //test

//Relation operator > < >= <=

//conditional opertor
console.log((5>4) ? 'yes':'no'); //yes
console.log((4>5) ? 'yes':'no'); //no

//Asignment operator 
let aVar=50;
console.log(aVar +=10);  //50 + 10 =60
console.log(aVar -=10);  //60 - 10 =50
console.log(aVar /=10);  //50 / 10 =5
console.log(aVar *=10);  //5  * 10 =50
console.log(aVar %=10);  //50 % 10 =0
aVar=50;
console.log(aVar <<=1);//100
aVar=50;
console.log(aVar >>=1);//25
aVar=50;
console.log(aVar >>>=1) //keep the sign
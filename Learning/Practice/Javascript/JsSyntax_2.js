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
for(let i=0;i<3;i++)
{
    console.log(i)
}

//while
let cn=1
while(cn<5)
{
    console.log(cn);
    cn++;
}


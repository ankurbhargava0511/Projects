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
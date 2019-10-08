'use strict';
//undefined
console.log(productId);
var productId=12; 

//ReferenceError: productId is not defined
console.log(productId);
let productId=12;

//12
let productId=12;
console.log(productId);

//undefined
let productId;
console.log(productId);

//Block Scoping
//12
letproductId=12;
{let productId=2000;}
console.log(productId);

//Reference Error: productIdis not defined
{let productId=2000;}
console.log(productId);

//12
function updateProductId()
{productId=12;}
letproductId=null;
updateProductId();
console.log(productId);
 
//42
let productId=42;
for(let productId=0;productId<10;productId++)
{}
console.log(productId);
 
//2  because a closour is created and at the end it return 2
let updateFunctions=[];
for(vari=0;i<2;i++)
{updateFunctions.push(function(){returni;});}
console.log(updateFunctions[0]());
 
//0
let updateFunctions=[];
for(leti=0;i<2;i++){updateFunctions.push(function(){returni;});}
console.log(updateFunctions[0]());

//100
const MRKUP_PCT=100;
console.log(MRKUP_PCT);

//SyntaxError: Unexpected token ;  // As not intilized
const MRKUP_PCT;
console.log(MRKUP_PCT);

//TypeError: Assignment to constant variable.
const MRKUP_PCT=100;
MRKUP_PCT=10;
console.log(MRKUP_PCT);

//100 its allowed as its a block scope
const MRKUP_PCT=100;
if(MRKUP_PCT>0){
constMRKUP_PCT=10;
}
console.log(MRKUP_PCT);

//Arrow Functions

//function 
var getPrice=()=>5.99;
console.log(typeof(getPrice));

//5.99
var getPrice=()=>5.99;
console.log(getPrice());

//8
var getPrice=count=>count*4.00;
console.log(getPrice(2));

//8.56
var getPrice=(count,tax)=>count*4.00*(1+tax);
console.log(getPrice(2,.07));

//8.56 // as we have a block we need to add return statement
var getPrice=(count,tax)=>
{var price=count*4.00;
price*=(1+tax);
return price;
}
console.log(getPrice(2,.07));

// this keyword 
//#document
document.addEventListener('click',function(){console.log(this);
});

//Window {...}
document.addEventListener('click',()=>console.log(this));


//Object {number: 123}
var invoice={number:123,process:function()
{
  console.log(this);
}};
invoice.process();

//Window { ... }
var invoice={number:123,process:()=>console.log(this)};
invoice.process();

//123
var invoice={number:123,process:function()
{
	return()=>console.log(this.number);
 }};
invoice.process()();

//123  you connot bind context (object ) to an arrow function
var invoice={number:123,process:function(){return()=>console.log(this.number);
}};
var newInvoice={number:456};
invoice.process().bind(newInvoice)();

//123
var invoice={number:123,process:function()
{
	return()=>console.log(this.number);
}};
var newInvoice={number:456};
invoice.process().call(newInvoice);

//SyntaxError: unexpected token =>
// you cannot at => in new line
var getPrice=()
=>5.99;
console.log(typeofgetPrice);

//false
var getPrice=()=>5.99;
console.log(getPrice.hasOwnProperty("prototype"));

//Default Function Parameters
//1000
var getProduct=function(productId=1000)
{console.log(productId);
};
getProduct();

//1000, hardware // for undefined javascript use default
var getProduct=function(productId=1000,type='software'){console.log(productId+','+type);
};
getProduct(undefined,'hardware');

//5.35  // default can access function
var getTotal=function(price,tax=price*0.07){console.log(price+tax);
};
getTotal(5.00);

//5.35  //its allowed , js can access variable in context
var baseTax=0.07;
var getTotal=function(price,tax=price*baseTax){console.log(price+tax);
};
getTotal(5.00);

//5.35
var generateBaseTax=()=>0.07;
var getTotal=function(price,tax=price*generateBaseTax()){console.log(price+tax);
};
getTotal(5.00);

//1 // javascript skip deafult parameters
var getTotal=function(price,tax=0.07){console.log(arguments.length);
};
getTotal(5.00);

//SyntaxError: Use before declaration
var getTotal=function(price=adjustment,adjustment=1.00) {console.log(price+adjustment);
};
getTotal();

//6
var getTotal=function(price=adjustment,adjustment=1.00) {console.log(price+adjustment);
};
getTotal(5.00);

//20 // Dynamic functions
var getTotal=new Function("price=20.00","returnprice;");
console.log(getTotal());

//Rest and Spread

//true
var showCategories=function(productId,...categories)
{console.log(categories instanceof Array);
};
showCategories(123,'search','advertising');

 
//['search', 'advertising']
var showCategories=function(productId,...categories)
{console.log(categories);
};
showCategories(123,'search','advertising'); 

//[]
var showCategories=function(productId,...categories)
{console.log(categories);
};
showCategories(123);

//1 Javascript ignore rest parameter in length
var showCategories=function(productId,...categories){};
console.log(showCategories.length);

//3
var showCategories=function(productId,...categories)
{console.log(arguments.length);
};
showCategories(123,'search','advertising');

//['search', 'advertising']
var showCategories=
newFunction("...categories","return categories;");
console.log(showCategories('search','advertising'));

//Spread
//20
var prices=[12,20,18];
var maxPrice=Math.max(...prices);
console.log(maxPrice);

//[12, 20, 18]
var prices=[12,20,18];
var newPriceArray=[...prices];
console.log(newPriceArray);

//[undefined, undefined] 
var newPriceArray=Array(...[,,]);
console.log(newPriceArray);

//[undefined, undefined] 
var newPriceArray= [...[,,]];
console.log(newPriceArray);

//4
var maxCode=Math.max(..."43210");
console.log(maxCode);

//["","B","C","D","E"]
var codeArray=["",..."BCD","E"];
console.log(codeArray);

//Object Literal Extensions

//{price: 5.99,quantity: 30}
var price=5.99,quantity=30;
var productView={price,quantity};
console.log(productView);

//59.900000000000006
var price=5.99,quantity=10;
var productView={
	price,
	quantity,
	calculateValue(){
	return this.price*this.quantity}};
console.log(productView.calculateValue());

//59.900000000000006
var price=5.99,quantity=10;
var productView={
	price: 7.99,
	quantity: 1,
	calculateValue(){
		returnthis.price*this.quantity
		}};
console.log(productView.calculateValue());

//59.900000000000006 // with dynamic function
var price=5.99,quantity=10;
var productView={
	price,
	quantity,
	"calculatevalue"(){
		returnthis.price*this.quantity
		}};
console.log(productView["calculatevalue"]());

//{dynamicField: 5.99} // with dynamic field
var field='dynamicField'
var price=5.99;
var productView={[field]:price};
console.log(productView);

//{dynamicField-001: 5.99}
var field='dynamicField'
var price=5.99;
var productView={[field+"-001"]:price};
console.log(productView);

//in a method
var method='doIt'
var productView={
	[method+"-001"]()
	{console.log("inamethod");
}};
productView['doIt-001']();

//true
var ident='productId';
var productView={
	get[ident](){
		return true;},
	set[ident](value){}};
console.log(productView.productId);

//for ... of Loops
/* 
hardware
software
vaporware*/
var categories=['hardware','software','vaporware'];
for(var itemofcategories){console.log(item);
}
/*
undefined
undefined */
var categories=[,,];
for(var item of categories){console.log(item);
}

//5
var codes="ABCDF";
var count=0;
for(var codeofcodes){count++;
}console.log(count);

//Octal and Binary Literals
//8
var value=0o10;
console.log(value);

//8
var value=0O10;
console.log(value);

//2
var value=0b10;
console.log(value);

//2
var value=0B10;
console.log(value);

//Template Literals
//Invoice Number: 1350
let invoiceNum='1350';
console.log(`InvoiceNumber:${invoiceNum}`);

//Invoice Number: 1350
let invoiceNum='1350';
console.log(`InvoiceNumber:${invoiceNum}`);

//Invoice Number: ${invoiceNum} 
// no intepretation take place due to escaping char
let invoiceNum='1350';
console.log(`InvoiceNumber:\${invoiceNum}`);

/*A
B
C*/
// interpolation mentain whitespace etc.
let message=`A
B
C`;
console.log(message);
// we are allowed to have expression
/*Invoice Number:
INV-1350 */
let invoiceNum='1350';
console.log(`InvoiceNumber:${"INV-" + invoiceNum}`);

//Invoice Number: 1350
// interpolation take first before function call
function showMessage(message){
	let invoiceNum='99';
    console.log(message);
}
let invoiceNum='1350';
showMessage(`InvoiceNumber:${invoiceNum}`);
 

//["template"]
function processInvoice(segments){
	console.log(segments);
}
processInvoice`template`;

//["Invoice: ", " for ", ""]
//[1350, 2000]
function processInvoice(segments,...values){
	console.log(segments);
	console.log(values);
}
let invoiceNum='1350';
let amount='2000';
processInvoice`Invoice:${invoiceNum}for${amount}`;

//Destructuring
// means take apart items from an structure
// for Array its element, for object it properties,
// for string its character
//50000
let salary=['32000','50000','75000'];
let [low,average,high]=salary;
console.log(average);

//undefined
let salary=['32000','50000'];
let [low,average,high]=salary;
console.log(high);

//75000
let salary=['32000','50000','75000'];
let [low,,high]=salary;
console.log(high);

//["50000", "75000"]
let salary=['32000','50000','75000'];
let[low,...remaining]=salary;
console.log(remaining);

//88000
let salary=['32000','50000'];
let[low,average,high='88000']=salary;
console.log(high);

//88000
let salary=['32000','50000',['88000','99000']];
let[low,average,[actualLow,actualHigh]]=salary;
console.log(actualLow);

// 88000
let salary=['32000','50000'];
let low,average,high;
[low,average,high='88000']=salary;
console.log(high);

//50000
function reviewSalary([low,average],high='88000'){
	console.log(average);
}
reviewSalary(['32000','50000']);
// for objects
//75000
let salary={low:'32000',average:'50000',high:'75000'};
let{low,average,high}=salary;
console.log(high);

//75000
let salary={low:'32000',average:'50000',high:'75000'};
let{low:newLow,average:newverage,high:newHigh}=salary;
console.log(newHigh);

//Syntax Error becuase {} also define block scope
let salary={low:'32000',average:'50000',high:'75000'};
let newLow,newverage,newHigh;
{low:newLow,average:newverage,high:newHigh}=salary;
console.log(newHigh);

//75000
let salary={low:'32000',average:'50000',high:'75000'};
let newLow,newverage,newHigh;
({low:newLow,average:newverage,high:newHigh}=salary);
console.log(newHigh);

//min: Z max: A
let[maxCode,minCode]='Z';
console.log(`min:${minCode}max:${maxCode}`);

//Advanced Destructuring

/*high: undefined
low: undefined */
let[high,low]=[,];
console.log(`high:${high}low:${low}`);

// below because destructuring require a iterator
//Runtime Error: Unable to get property 'Symbol.iterator' of undefined or null reference
let[high,low]=undefined;
console.log(`high:${high}low:${low}`);
 
//Runtime Error: Unable to get property 'Symbol.iterator' of undefined or null reference
let[high,low]=null;
console.log(`high:${high}low:${low}`);

//TypeError
try{
	//let[high,low,]=undefined;
}
catch(e)
{
	console.log(e.name);
}
//high: 500 low: 200
let [high,low,]=[500,200];
console.log(`high:${high}low:${low}`);

//5 10
/*
for(let [a,b] of [[5,10]]){
	console.log(`${a}${b}`);
}
*/
//5 10
//1
/*
let count=0;
for(let[a,b] of [[5,10]]){
	console.log(`${a}${b}`);
	count++;
}
console.log(count); 
*/
//123 message
/*
try
{
	throw [123,'message'];
}
catch(
	[invoiceNum,errorMessage]){console.log(`${invoiceNum}${errorMessage}`);
}
*/
//{high: 500, low: 200}
function getResult(){
	lethigh,low;
	return{high,low}={high:500,low:200};
}
console.log(getResult());
 

//1000 20 400
let nums={high:1000,low:20,average:400};
let high,low,average;
({high,low}={average}=nums);

console.log(`${high}${low}${average}`);

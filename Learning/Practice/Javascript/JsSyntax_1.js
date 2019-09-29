/*
Basic 
*/
//variables
let var1="t"
let var2="tt"
console.log(var1,var2)

let var3="x"
let var4="xx"
console.log(var3,var4)
console.log(typeof("hello"))
console.log(typeof(1))

//string
console.log("Hello")
console.log("Hel'lo")
console.log('He""""llo')

//number
let price=5.00, price2=4.55;
console.log(price,price2)

//+sign
console.log(price+ price2)
console.log(var1 + var2)
//simple operations + - * / % ()
var number1=5
var number2=3

console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)
console.log(number1 % number2)

console.log(4+5 *2)
console.log((4+5) *2)

//some special values
console.log(10/0) //infinity
console.log(0/0) //NaN
console.log(0/10)
//typeof is number
console.log(typeof(10/0))
console.log(typeof(0/0))
console.log(typeof(0/10))
//Boolean 
console.log(typeof(true),typeof(false))

//undefine and null
//null is of type object
console.log(typeof(undefined), typeof(null))

//Array-- its of type object
let values=[]
console.log(typeof(values)) 
console.log(values[1]) //undefined

let values1=[1,2,3]
console.log(values1[1])
console.log(values1)//Array(3) [1, 2, 3]
console.log(values1.length)

//Adding at last
values.push(1)
console.log(values)
values.push(2)
console.log(values) //Array(2) [1, 2]
values.push(3)
console.log(values) //Array(3) [1, 2, 3]

//removing last elemnt
let result=values.pop()
console.log(result, values) //3 Array(2) [1, 2]
//removing first elemnt
result =values.shift()
console.log(result,values) //1 Array(1) [ 2]
values.push(3)
console.log(values) //Array(2) [ 2, 3]
values.push(1)
console.log(values) //Array(2) [2,3,1]
//delete an element
values.splice(0,1)// start, number of element to remove
console.log(values) //Array(2) [3,1]
values.splice(0,2,44,55,66) // start, number of element to remove, ...rest of number to insert
console.log(values) //Array(3) [44,55,66]
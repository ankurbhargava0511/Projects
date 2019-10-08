//New Types and Object Extensions
// symbols are unique, immutable primative type

//symbol

let eventSymbol=Symbol('resizeevent');
console.log(typeof eventSymbol);

//Symbol(resize event)
let eventSymbol=Symbol('resizeevent');
console.log(eventSymbol.toString());

//Symbol(calculate event)
const CALCULATE_EVENT_SYMBOL=Symbol('calculateevent');
console.log(CALCULATE_EVENT_SYMBOL.toString());

//Symbol(event)
let s=Symbol.for('event');
console.log(s.toString());

//false //Symbol are always unique
let s=Symbol('event');
let s2=Symbol('event');
console.log(s===s2);

//true
let s=Symbol.for('event');
let s2=Symbol.for('event');
console.log(s===s2);

//false
let s=Symbol.for('event');
let s2=Symbol.for('event2');
console.log(s===s2);

//event ----get key
let s=Symbol.for('event');
let description=Symbol.keyFor(s);
console.log(description);

//My Article
// Many time symbol is used as properties
let article={
	title:'Whiteface Mountain',
	[Symbol.for('article')]:'MyArticle'
};
let value=article[Symbol.for('article')];
console.log(value);

//['title']
// symbol cannot be access as properties
let article={
	title:'Whiteface Mountain',
	[Symbol.for('article')]:'MyArticle'
	};
console.log(Object.getOwnPropertyNames(article));

//[Symbol(article)]
let article={
	title:'WhitefaceMountain',
	[Symbol.for('article')]:'MyArticle'};
console.log(Object.getOwnPropertySymbols(article));

//Well-known Symbols
//[object Object]
let Blog=function(){};
let blog=newBlog();
console.log(blog.toString());

//[object Blog Class]
// toStringtag is well known symbol. it make tostring more raadable
let Blog=function(){};
Blog.prototype[Symbol.toStringTag]='BlogClass';
let blog=newBlog();
console.log(blog.toString());

//[8, 12, 16]
let values=[8,12,16];
console.log([].concat(values));

//[ [8, 12, 16] ]
// this symbol stop array to spread
let values=[8,12,16];
values[Symbol.isConcatSpreadable]=false;
console.log([].concat(values));

//8,12,16100
let values=[8,12,16];
let sum=values+100;
console.log(sum);

//default
//142
let values=[8,12,16];
values[Symbol.toPrimitive]=function(hint){
	console.log(hint);
return42;
};
let sum=values+100;
console.log(sum);

//Object Extensions
//2
let a={x:1};
let b={y:2};
Object.setPrototypeOf(a,b);
console.log(a.y);


//{a: 1, b: 2}
// it will populate target will all the values assign  a and b here
let a={a:1},b={b:2};
let target={};
Object.assign(target,a,b);
console.log(target);

//{a: 5, b: 2}
// b overwrite a
let a={a:1},b={a: 5, b:2};
let target={};
Object.assign(target,a,b);
console.log(target);

//{a: 5, b: 2} // because its not enaumerable
let a={a:1},b={a:5,b:2};
Object.defineProperty(b,'c',{value:10,enumerable:false});
let target={};
Object.assign(target,a,b);
console.log(target);

//{a: 5, b: 2} // assign only look at object assign not the prototype change
let a={a:1},b={a:5,b:2},c={c:20};
Object.setPrototypeOf(b,c);
let target={};
Object.assign(target,a,b);
console.log(target);

//false
let amount=NaN;
console.log(amount===amount);

//true to manage NaN below is ES6 syntax
// its a better value to compare objects
let amount=NaN;
console.log(Object.is(amount,amount));

//true
let amount=0,total=-0;
console.log(amount===total);

//false 
let amount=0,total=-0;
console.log(Object.is(amount,total));

//[Symbol(article)]
let article={
	title:'WhitefaceMountain',
	[Symbol.for('article')]:'MyArticle'};
console.log(Object.getOwnPropertySymbols(article));

//String Extensions

//true
let title='SantaBarbaraSurfRiders';
console.log(title.startsWith('Santa'));

//false
let title='SantaBarbaraSurfRiders';
console.log(title.endsWith('Rider'));

//true
let title='SantaBarbaraSurfRiders';
console.log(title.includes('ba'));

//Surfer's 🏄🏄Blog emosi character
var title="Surfer's\u{1f3c4}Blog";
console.log(title);

//2
var surfer="\u{1f3c4}";
console.log(surfer.length);

//3
//🌊🌊🏄🏄🐋🐋
var surfer="\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(Array.from(surfer).length);

console.log(surfer);

//Mazatlán9 // issue with ES5
var title="Mazatla\u0301n";
console.log(title+''+title.length);

//Mazatlán8 // Solution inES6 
var title="Mazatla\u0301n";
console.log(title+''+title.normalize().length);

//6e  normalise convert unicode to ascii
var title="Mazatla\u0301n";
console.log(title.normalize().codePointAt(7).toString(16));

//🏄🏄
console.log(String.fromCodePoint(0x1f3c4));

//Surfer \u{1f3c4}\n
// raw return the raw string
let title='Surfer';
let output=String.raw`${title}\u{1f3c4}\n`;
console.log(output);


//🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
// repeat function repeat the string
let wave='\u{1f30a}';
console.log(wave.repeat(10));

//Number Extensions

//true
//parseInt without Number is a global function and should be avoided
console.log(Number.parseInt===parseInt);

//true
console.log(Number.parseFloat===parseFloat);

//true
//false
let s='NaN';
console.log(isNaN(s));
console.log(Number.isNaN(s));

//true
//false
let s='8000';
console.log(isFinite(s));
console.log(Number.isFinite(s));

//false
let sum=408.2;
console.log(Number.isInteger(sum));

//false false false
//true
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(undefined));
console.log(Number.isInteger(3));

//true
//false
let a=Math.pow(2,53)-1;
console.log(Number.isSafeInteger(a));
a=Math.pow(2,53);
console.log(Number.isSafeInteger(a));

//2.220446049250313e-16
//9007199254740991
//-9007199254740991
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Math Extensions
/*
Hyperbolic Functions
cosh()
acosh()
sinh()
asinh()
tanh()
atanh()
hypot()
*/
/*
Arithmetic Functions
cbrt() -cube root
clz32() -count leading zeros (32 bit integers)
expm1() -equal to exp(x) -1
log2()-log base 2
log10() -log base 10
log1p() -equal to log(x + 1)
imul() -32 bit integer multiplication
*/

/*Miscellaneous Functions
sign() = the number's sign: 1, -1, 0, -0, NaN
trunc()=the integer part of a number
fround() =round to nearest 32 bit floating-point value
*/

/*0
-0 (0 in Edge)
-1
1
NaN */
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(-20));
console.log(Math.sign(20));
console.log(Math.sign(NaN));

//3
console.log(Math.cbrt(27));

//27
//-27
console.log(Math.trunc(27.1));
console.log(Math.trunc(-27.9));

//RegExpExtensions

//false //its look ok but not working. to make in working we need to use special char
let pattern=/\u{1f3c4}/;
console.log(pattern.test('🏄🏄'));

//true // special char is /u
let pattern=/\u{1f3c4}/u;
console.log(pattern.test('🏄🏄'));

//false
let pattern=/^.Surfer/;
console.log(pattern.test('🏄🏄Surfer'));

//true // same thing use of /u
let pattern=/^.Surfer/u;
console.log(pattern.test('🏄🏄Surfer'));
// /y  flag will search from back
//0
//false
let pattern=/900/y;
console.log(pattern.lastIndex);
console.log(pattern.test('800900'));

//true here we are settling last index as 3
let pattern=/900/y;
pattern.lastIndex= 3;
console.log(pattern.test('800900'));

// pattern as properties flag to show what flag is set on expression
//gy
//(Order will be "gimuy")
let pattern=/900/yg;
console.log(pattern.flags);

//Function Extensions
// this is a property name on function
//calc
let fn=function calc(){
	return 0;
};
console.log(fn.name);


//fn below function does not have name do it will take variable name
let fn=function(){
	return 0;
};
console.log(fn.name);

//fn
let fn=function(){
	return 0;
};
let newFn=fn;
console.log(newFn.name);


//Calculator
//add
class Calculator{
	constructor(){
		
	}
	add(){
		
	}}
let c=new Calculator();
console.log(Calculator.name);
console.log(c.add.name);

//Destructuring Arrays
let medals: string[] = ['gold', 'silver', 'bronze'];
//old Way
let first: string = medals[0];
let second: string = medals[1];
let third: string = medals[2];
//Destructuring
let[first, second, third] = medals;


Destructuring Objects
let person= {
	name: 'Audrey',
	address: '123 Main Street',
	phone: '555-1212'
};
//old Way
let name: string = person.name;
let address: string = person.address;
let phone: string = person.phone;
//Destructuring
let{ name, address, phone} = person;

//Spread Operator
let newBookIDs= [10, 20];
let allBookIDs= [1, 2, 3, ...newBookIDs]; // [ 1, 2, 3, 10, 20 ]

//Tuple Types
let myTuple: [number, string] = [10, 'Macbeth'];
myTuple[0] = 'Hamlet'; // ERROR
myTuple[1] = 20; // ERROR
myTuple[2] = 'Hamlet';
myTuple[2] = 20;
myTuple[2] =true //ERROR

//Good Example
interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}

let catalogLocation: KeyValuePair<string, Book> = ['A 123.456', book1];
catalogLocation[2] = 'some string';

//Union Types
function PrintIdentifier(id:string | number) {
// print things here
}

let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

let readingMaterial: Book | Magazine = allBooks[0];
function PrintTitle(item: Book | Magazine): void {
    console.log(item.title);
}

let readingMaterial: PrintMaterial = allBooks[0];
function PrintTitle(item: PrintMaterial): void {
    console.log(item.title);
}

// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);


//Intersection Types
// All Members (Prop + method ) from all types
function CreateCoolNewDevice():Phone & Tablet {
// phablet is born
}

let serialNovel: Book & Magazine = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: Category.Fiction, // from other types
    publisher: 'Serial Press' // From other Type Book
};


namespace Maxin
{
	class Employee {
		title: string;

		addToSchedule(): void {
			console.log('Employee added to schedule.');
		}

		logTitle(): void {;
			console.log(`Employee has the title ${this.title}.`);
		}
	}

	class Researcher {

		doResearch(topic: string): void {
			console.log(`Doing research on ${topic}.`);
		}
	}
	// We need to implement both Employee and Researcher
	// Class cannot inherit multiple class
	class UniversityLibrarian implements Interfaces.Librarian, Employee, Researcher {
		
		name: string;
		email: string;
		department: string;
		
		assistCustomer(custName: string) {
			console.log(this.name + ' is assisting ' + custName);
		}

		// implementation of the following to be provided by the mixing function
		title: string;
		addToSchedule: () => void;
		logTitle: () => void;
		doResearch: (topic: string) => void;    
	}

	
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(UniversityLibrarian, [Employee, Researcher]);

let newLibrarian = new UniversityLibrarian();
newLibrarian.doResearch('Economics');
	
}

//String Literal Types
let empCategory: 'Manager';
let empCategory: 'Manager' = 'Manager';
let empCategory: 'Manager' = 'Non-Manager'; // ERROR
let empCategory: 'Manager' | 'Non-Manager' = 'Manager';
let empCategory: 'Manager' | 'Non-Manager' = 'Non-Manager';

//Type Aliases
let empCategory: 'Manager' | 'Non-Manager' = 'Manager';
type EmployeeCategory= 'Manager' | 'Non-Manager';
let empCategory: EmployeeCategory= 'Manager';
let empCategory: EmployeeCategory= 'Non-Manager';
let empCategory: EmployeeCategory= 'Intern'; // ERROR


//Merge declaration

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface Book {
    publisher: string;
    hasIndex: boolean;
}

let mergedBook: Book;
mergedBook.publisher = 'Programming Press';

//typeof Type Guards
let x: string | number = 123;
if(typeof x === 'string') {
// x is a string
}
else{
// x is a number
}

//Type name may only be “string”, “number”, “boolean”, or “symbol”

function logVisitor(param: number | string) {
    if (typeof param === 'number') {
        console.log(`${param} new visitors arrived.`);
    }
    else {
        console.log(`${param.toUpperCase()} visited.`);
    }
}

// logVisitor(5);
// logVisitor('Leigh Ann');

//instanceof Type Guards
class Phone{
callSomeone() { console.log('make call'); }
}
class Tablet{
watchMovie() { console.log('watch movie'); }
}
let device: Phone | Tablet = newPhone();
if(device instanceof Phone) {
 device.callSomeone();
}
// let lib: Librarian = new PublicLibrarian();

// if (lib instanceof UniversityLibrarian) {
//     lib.assistFaculty();
// }
// if (lib instanceof PublicLibrarian) {
//     lib.teachCommunity();
// }
//User-Defined Type Guards
interface Vehicle{ numberOfWheels: number; }

function isVehicle(v: any): v is Vehicle{
	return(<Vehicle>v).numberOfWheels!== undefined;
}
let c= newCar();
if(isVehicle(c)) {
// it's a Vehicle
}

// function isBook(text: Book | Magazine): text is Book {
//     return (<Book>text).author !== undefined;
// }

// let readingMaterial: Book | Magazine = util.GetAllBooks()[0];

// if(isBook(readingMaterial)) {
//     console.log(`The book's author is ${readingMaterial.author}.`);
// }
// else {
//     console.log(`The magazine's publisher is ${readingMaterial.publisher}.`);
// }


// Symbols *******************



let mySymbol = Symbol('first_symbol');
let anotherSymbol = Symbol('first_symbol');

// console.log(mySymbol === anotherSymbol);
// console.log(typeof mySymbol);

let myObject = {
    [mySymbol]: 'value for my symbol key'
}

// console.log(myObject[mySymbol]);

export const CLASS_INFO = Symbol();

export class UniversityLibrarian implements Interfaces.Librarian, Employee, Researcher {
    
    name: string;
    email: string;
    department: string;

	// symbols
    [CLASS_INFO](): void {
        console.log('This class represents a UniversityLibrarian.');
    }

    static [Symbol.hasInstance](obj: Object) {
        return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer');
    }
    
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

    assistFaculty() {
        console.log('Assisting faculty.');
    }

	// implementation of the following to be provided by the mixing function
    title: string;
    addToSchedule: () => void;
    logTitle: () => void;
    doResearch: (topic: string) => void;    
}

let librarian = new UniversityLibrarian();
// librarian[CLASS_INFO]();

let libraryCustomer = {
    name: 'Thorne',
    assistCustomer: (custName: string) => console.log(`Assisting ${custName}`)
}

if (libraryCustomer instanceof UniversityLibrarian) {
    console.log('A helpful librarian.');
}
else {
    console.log('Not a librarian.');
}


//Decorator***********************

//Decorator Syntax
function uielement(target: Function) {// do uistuff }
function deprecated(t: any, p: string, d: PropertyDescriptor) {
	console.log('This method will go away soon.');
}

@uielement
classContactForm{
	@deprecated
	someOldMethod() { // ... }
}
//Decorator Factories
functionuielement(element: string) {
	return function(target: Function) {
	console.log(`Creating new element: ${element}`);
	}
}

@uielement('SimpleContactForm')
classContactForm{
// contact properties here
}
/*
Class Decorators
Class constructor will be passed as parameter to decorator
Constructor is replaced if there is a return value
Return void if constructor is not to be replaced
*/
// ClassDecoratortype
<TFunction extends Function>(target: TFunction) => TFunction| void;

//Examples

export function sealed(target: Function): void {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);    
    }
@sealed
class Myclass {
	Constructor()
	{
		
	}
	myMethod()
	{
		
	}
}
	
	
export function sealed(name: string) {
    return function(target: Function): void {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);    
    }
}

@sealed('MyClass') // this is Dacorator factory
class Myclass {
	Constructor()
	{
		
	}
	myMethod()
	{
		
	}
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
	let newConstructor: Function = function() {
        console.log(`Creating new instance.`);
        console.log(target);
    }    
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}


@logger //  this is  change the constructor
class Myclass {
	Constructor()
	{
		
	}
	myMethod()
	{
		
	}
}

/*
Property Decorators
First parameter is either constructor function or class prototype
Second parameter is the name of the decorated member
*/
function MyPropertyDecorator(target: Object, propertyKey: string) {
	// do decorator stuff
}


/*

Parameter Decorators
First parameter is either constructor function or class prototype
Second parameter is the name of the decorated member
Third parameter is the ordinal index of the decorated parameter
*/
function MyParameterDecorator(target: Object, propertyKey: string, parameterIndex: number) {
// do decorator stuff
}

/*Property Descriptors
Object that describes a property and how it can be manipulated
“value” property contains the function definition for class methods
“writable” property specifies if “value” is read -only
*/
interface PropertyDescriptor{
	configurable?: boolean;
	enumerable?: boolean;
	value?: any;
	writable?: boolean;
	get? ():any;
	set? (v:any): void;
}

/*Method and Accessor Decorators
First parameter is either constructor function or class prototype
Second parameter is the name of the decorated member
Third parameter is the property descriptor of the decorated member
*/
function MyMethodDecorator(target: Object,
propertyKey: string,
descriptor: PropertyDescriptor) {
// do decorator stuff
}

 export function readonly(target: Object,
                    propertyKey: string,
                    descriptor: PropertyDescriptor) {
        console.log(`Setting ${propertyKey}.`);
        descriptor.writable = false;
}

class Myclass {
	Constructor()
	{
		
	}
	@readonly
	myMethod()
	{
		
	}
}

export function writable(isWritable: boolean) {
    return function(target: Object,
                    propertyKey: string,
                    descriptor: PropertyDescriptor) {
        console.log(`Setting ${propertyKey}.`);
        descriptor.writable = isWritable;
    }
}




class Myclass {
	Constructor()
	{
		
	}
	@writable(true)
	myMethod()
	{
		
	}
	@writable(false)
	myMethod2()
	{
		
	}
}
let lib1 = new MyClass();


try {
	lib1.myMethod = () => console.log('assistFaculty replacement method');
    lib2.myMethod2 = () => console.log('teachCommunity replacement method');    
} catch (error) {
    console.log(error.message);
}

lib1.myMethod();
lib2.myMethod();


//Async Programming Patterns
//**********************************************************
// Callbacks demo

 interface LibMgrCallback {
 	(err: Error, titles: string[]): void;
 }

 function getBooksByCategory(cat: Category, callback: LibMgrCallback): void {

 	setTimeout(() => {
 		try {
 			let foundBooks: string[] = util.GetBookTitlesByCategory(cat);

 			if(foundBooks.length > 0) {
 				callback(null, foundBooks);
 			}
 			else {
 				throw new Error('No books found.');
 			}			
 		} catch (error) {
 			callback(error, null);
 		}
 	}, 2000);
 }

 function logCategorySearch(err: Error, titles: string[]): void {
 	if(err) {
 		console.log(`Error message: ${err.message}`);
 	}
 	else {
 		console.log(`Found the following titles:`);
 		console.log(titles);
 	}	
 }
 console.log('Beginning search...');
 getBooksByCategory(Category.Biography, logCategorySearch);
 console.log('Search submitted...');

//**********************************************************

//Creating a Promise
function doAsyncWork(resolve, reject) {
// perform asynccalls
	if(success) resolve(data);
	else reject(reason);
}
let p: Promise<string>= newPromise(doAsyncWork);

//Above can be written as below
let p: Promise<string>= newPromise((resolve, reject) => {
// perform asynccalls
if(success) resolve(data);
 else reject(reason);
});

//Handling Promise Results
let p: Promise<string>= MethodThatReturnsPromise();
p.then(stringData=> console.log(stringData))
.catch(reason => console.log(reason));

// Promises demo

 console.log('Beginning search...');
 getBooksByCategory(Category.Biography, logCategorySearch);
 console.log('Search submitted...');


 function getBooksByCategory(cat: Category): Promise<string[]> {

 	let p: Promise<string[]> = new Promise((resolve, reject) => {

 		setTimeout(() => {
 			let foundBooks: string[] = util.GetBookTitlesByCategory(cat);

 			if(foundBooks.length > 0) {
 				resolve(foundBooks);
 			}
 			else {
 				reject('No books found for that category.');
 			}
 		}, 2000);
 	});
 	return p;
 }
 
 console.log('Beginning search...');
 getBooksByCategory(Category.Fiction)
 	.then(titles => console.log(`Found titles: ${titles}`))
 	.catch(reason => console.log(`Error: ${reason}`));
 console.log('Search submitted...');
 
 // Chaning Promises

 console.log('Beginning search...');
 getBooksByCategory(Category.Fiction)
 	.then(titles => {
 		console.log(`Found titles: ${titles}`);
 		throw 'something bad happened';
 		return titles.length;
 	}, reason => { return 0; })
 	.then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
 	.catch(reason => console.log(`Error: ${reason}`));
 console.log('Search submitted...');

//**********************************************************

//async/await Syntax
async function doAsyncWork() {
	let results= awaitGetDataFromServer();
	console.log(results);
}
console.log('Calling server to retrieve data...');
doAsyncWork();
console.log('Results will be displayed when ready...');

// async/await demo
function getBooksByCategory(cat: Category): Promise<string[]> {

	let p: Promise<string[]> = new Promise((resolve, reject) => {

		setTimeout(() => {
			let foundBooks: string[] = util.GetBookTitlesByCategory(cat);

			if(foundBooks.length > 0) {
				resolve(foundBooks);
			}
			else {
				reject('No books found for that category.');
			}
		}, 2000);
	});
	return p;
}

async function logSearchResults(bookCategory: Category) {
	let foundBooks = await getBooksByCategory(bookCategory);
	console.log(foundBooks);
}

console.log('Beginning search...');
logSearchResults(Category.Biography)
	.catch(reason => console.log(reason));
console.log('Search submitted...');

// TSlint
npm install tslint typescript --save-device
npm install tslint typescript -g













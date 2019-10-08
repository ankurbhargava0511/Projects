//Enum

enumCategory{ Biography, Poetry, Fiction }; // 0, 1, 2
enumCategory{ Biography = 1, Poetry, Fiction }; // 1, 2, 3
enumCategory{ Biography = 5, Poetry = 8, Fiction = 9 }; // 5, 8, 9
let favoriteCategory: Category = Category.Biography;
console.log(favoriteCategory); // 5
let categoryString= Category[favoriteCategory]; // Biography

//Arrays
let strArray1: string[] = ['here', 'are', 'strings'];
let strArray2: Array<string> = ['more', 'strings', 'here'];
let anyArray: any[] = [42, true, 'banana'];

Tuples
let myTuple: [number, string] = [25, 'truck'];

letfirstElement= myTuple[0]; // 25
letsecondElement= myTuple[1]; // truck
// other elements can have numbers or strings

myTuple[2] = 100;
myTuple[2] = 'this works!’;
// In above tuple first element should be number and second should be string,
// rest element could be number or string

//Parameter Types and Return Types
function CreateCustomerID(name: string, id: number): string{
	returnname + id;
}

//Arrow Functions
let arr= allBooks.filter(function(book) {
 return book.author=== 'Herman Melville';
});
let arr= allBooks.filter(book => book.author=== 'Herman Melville');

//Arrow Function Syntax
myBooks.forEach(() => console.log('Done reading!'));
myBooks.forEach(title => console.log(title));
myBooks.forEach((title, idx, arr) => console.log(idx+ ' -'+ title));
myBooks.forEach((title, idx, arr) => {
console.log(idx+ ' -'+ title);
// do more stuff here
});

//Function Types
// Function type is only defination no body
// it is defined as parameter and return type
//Combination of parameter types and return type
function PublicationMessage(year: number): string{
	return 'Date published: ' + year;
}
let publishFunc: (someYear: number) => string; // function type
publishFunc= PublicationMessage;
let message: string= publishFunc(2016);

/*
Optional and Default Parameters
Optional parameters denoted with “?” after parameter name
Must appear after all required parameters
Default parameters may be set to a literal value or an expression
*/
function CreateCustomer(name: string, age?: number) { }
function GetBookByTitle(title: string= 'The C Programming Language') { }
function GetBookByTitle(title: string= GetMostPopularBook()) { }

/*
Rest Parameters
Collects a group of parameters into a single array
Denoted with an ellipsis prefix on last parameter
*/
function GetBooksReadForCust(name: string, ...bookIDs: number[]) { }
let books = GetBooksReadForCust('Leigh', 2, 5);
let books = GetBooksReadForCust('Daniel', 2, 5, 12, 42);

//function overload
function GetTitles(author: string): string[]; // this is function type
function GetTitles(available: boolean): string[]; // this is function type
// this is function overload
function GetTitles(bookProperty: any): string[] {
	if(typeofbookProperty== 'string') {
	// get books by author, add to foundTitles
	}
	else if(typeofbookProperty== 'boolean') {
	// get books by availability, add to foundTitles
	}
return foundTitles;
}

//Duck Typing

interface Duck {
	walk: () => void;
	swim: () => void;
	quack: () => void;
}
let probablyADuck= {
	walk: () => console.log('walking like a duck'),
	swim: () => console.log('swimming like a duck'),
	quack: () => console.log('quacking like a duck')
}
function FlyOverWater(bird: Duck) { }
FlyOverWater(probablyADuck); // works!!!


//Interfaces for Function
function CreateCustomerID(name: string, id: number): string{
	returnname + id;
}
interface StringGenerator{
	(chars: string, nums: number): string;
}
//let IdGenerator: (chars: string, nums: number) =>string; //change to below
let IdGenerator: StringGenerator;
IdGenerator= CreateCustomerID;


//Class Types
interface Librarian {
	doWork: () => void;
}
class ElementarySchoolLibrarian implements Librarian{
	doWork() {
		console.log('Reading to and teaching children...');
	}
}
let kidsLibrarian: Librarian = new ElementarySchoolLibrarian();
kidsLibrarian.doWork();

/*Constructors
Method named “constructor” –maximum of one per class
Use optional parameters to call different ways
Executed by using the “new” keyword
*/
class ReferenceItem{
	constructor(title: string, publisher?: string) {
	// perform initialization here
	}
}
let encyclopedia = new ReferenceItem('WorldPedia', 'WorldPub');

//Properties and Methods
class ReferenceItem{
	numberOfPages: number;
	geteditor(): string {
	// custom getter logic goes here, should return a value
	}
	seteditor(newEditor: string) {
	// custom setter logic goes here
	}
	printChapterTitle(chapterNum: number): void {
	// print title here
	}
}

/*
Parameter Properties
*/
class Author {
	name: string;
	constructor(authorName: string) {
	name = authorName;
	}
}
//Above example change to parameter property by adding public keyword 
class Author {
	constructor(public name: string) { }
}

//Static Properties
class Library {
	constructor(public name: string) { }
	static description: string= 'A source of knowledge.';
}
let lib = newLibrary('New York Public Library');
let name = lib.name; // avaiableon instances of the class
let desc= Library.description; // available on the class

// Abstarct Class and Class expression
namespaces ClassTypes
{
	class UniversityLibrarian implements Librarian {
    
    name: string;
    email: string;
    department: string;
    
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {
    
    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }
    
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    
    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }
    
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
    
}

}

//Abstract class
let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
refBook.printCitation();
// Class Expressions
// No Name here - new instance can be created by variable
let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}

let myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();

class Novel extends class { title: string } {
    mainCharacter: string;
}

let favoriteNovel = new Novel();

//Internal module== namespaces
// external modules = module

//Exporting from a Module
// periodicals.ts
//option 1
export interface Periodical {
issueNumber: number;
}
export classMagazine implements Periodical {
issueNumber: number;
}
export function GetMagazineByIssueNumber(issue: number): Magazine {
// retrieve and return a magazine
}


//Option 2
// periodicals.ts
interface Periodical {
	issueNumber: number;
}
class Magazine implementsPeriodical {
	issueNumber: number;
}
function GetMagazineByTitle(title: string): Magazine {
// retrieve and return a magazine
}
export { Periodical, Magazine, GetMagazineByTitleas GetMag}

//Importing from a module
// news.ts
import { Magazine, GetMagas GetMagazine} from './periodicals';
let newsMag: Magazine = GetMagazine('Weekly News');
// kids.ts
import * as mag from './periodicals';
let kidMag: mag.Magazine= mag.GetMag('Games and Stuff!');

//Default Export
// movie.ts
export default class{
title: string;
director: string;
}
// kids.ts
import AnimatedMoviefrom './movie’;
let cartoon = new AnimatedMovie();


//Generics
let poetryBooks: Book[];//Type parameter specifies the type the array can contain
let fictionBooks: Array<Book>; // Type parameters are part of the type
let historyBooks= new Array<Book>(5);

//Generic Functions
function LogAndReturn<T>(thing: T): T {
	console.log(thing);
	return thing;
}
let someString: string = LogAndReturn<string>('log this');
let newMag: Magazine = { title: 'Web DevMonthly'};
let someMag: Magazine = LogAndReturn<Magazine>(newMag);

//Generic Interfaces
interface Inventory<T> {
	getNewestItem: () => T;
	addItem: (newItem: T) => void;
	getAllItems: () => Array<T>;
}
let bookInventory: Inventory<Book>;
// populate the inventory here...
let allBooks: Array<Book> = bookInventory.getAllItems();

//Generic Classes
class Catalog<T> implementsInventory<T> {
	private catalogItems= new Array<T>();
	addItem(newItem: T) {
	this.catalogItems.push(newItem);
}
// implement other interface methods here
}
let bookCatalog= new Catalog<Book>();

/*
Generic Constraints
Describe types that may be passed as a generic parameter
“extends” keyword applies constraint
*/
interface CatalogItem{
	catalogNumber: number;
}
class Catalog<T extends CatalogItem> implements Inventory<T> {
// implement interface methods here
}


//Generic Constraints
namespace GenCon
{
	interface ShelfItem {
    title: string;
	}

	export default class Shelf<T extends ShelfItem> {
    
    private _items: Array<T> = new Array<T>();
    
    add(item: T): void {
        this._items.push(item);
    }
    
    getFirst(): T {
        return this._items[0];
    }
    
    find(title: string): T {
        return this._items.filter(item => item.title === title)[0];
    }
    
    printTitles(): void {
        this._items.forEach(item => console.log(item.title));
    }
}
}

//usage
let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

magazines.forEach(mag => magazineShelf.add(mag));

let firstMagazine: Magazine = magazineShelf.getFirst();

// let numberShelf: Shelf<number> = new Shelf<number>();
// [5, 10, 15].forEach(num => numberShelf.add(num));

magazineShelf.printTitles();

let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);






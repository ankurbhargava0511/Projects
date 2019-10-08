/* Data types
1- Build in- Boolean string number
2 custom -enum array interface class
*/

/* In type script everything as a type 
The type that can be use by all types is Any */
var notSure:any =4;
console.log(notSure, typeof notSure)

notSure="i am a string";
console.log(notSure, typeof notSure)

notSure=false;
console.log(notSure, typeof notSure)


Type Annotations and Type Inference


let x: string = 'I will forever be a string.';
//x = 42; // Error Not Allowed  

let y = 'I will also forever be a string.'; // no annotation but still be an string
//y = 42;// Error Not Allowed  

let z: number = GetSomeValue(); // Methods

/*Built-in Types
Void
Null
Undefined
Never
Any

*/
// Union Types

let someValue: number | string;
someValue = 42; // Allowed
someValue = 'Hello World'; // Allowed
someValue = true;// not allowed


//Using the --strictNullChecks Compiler Option
let basicString: string;
basicString = null; // not allowed
basicString = undefined; // not allowed

let nullableString: string | null;
nullableString = null; // allowed
nullableString = undefined; // not allowed

let mysteryString: string | null | undefined;
mysteryString = null; //  allowed
mysteryString = undefined; //  allowed

//Type Assertions
let value: any = 5;
let fixedString: string = (<number>value).toFixed(4);
console.log(fixedString); // 5.0000
let fixedString: string = (value as number).toFixed(4);
console.log(fixedString); // 5.0000


//Adding type annotations to functions
//Normal functions -- Implicitly assigned the type “any”
function dullFunc(value1, value2) {
	return "I'm boring and difficult. Don't be like me.";
}

//Adding Type Annotations to Functions
//? this means parameter is options
function funFunc(score: number, message?: string): string {
	return "I've got personality and I'm helpful! Be like me!";
}

//Using the --noImplicitAny Compiler Option
function dullFunc(value1, value2) {
return "I'm boring and difficult. Don't be like me.";
}
// with noImplicityAny qill retuen below error
//error TS7006: Parameter 'value1' implicitly has an 'any' type.
//error TS7006: Parameter 'value2' implicitly has an 'any' type.

//Default-Initialized Parameter
function sendGreeting(greeting: string = 'Good morning!'): void {
	console.log(greeting);
}
sendGreeting(); // Good morning!
sendGreeting('Good afternoon!'); // Good afternoon!

//Anatomy of an Arrow Function
//syntax :parameters => function body
// one parameter
let squareit = x => x * x;
let result = squareit(4); // 16
// two parameter
let adder = (a, b) => a + b;
let sum = adder(2, 3); // 5
// zero Parameter
let greeting = () => console.log('Hello World!');
greeting(); // Hello World!

let scores: number[] = [70, 125, 85, 110];
let highScores: number[];
highScores = scores.filter((element, index, array) => {
if (element > 100) {
	return true;
}
});


//Creating and Using Custom Types
Interfaces
Creating an Interface
interface Employee {
	name: string;
	title: string;
}

interface Manager extends Employee {
	department: string;
	numOfEmployees: number;
	scheduleMeeting: (topic: string) => void;
}

let developer = {
	name: 'Michelle',
	title: 'Senior TypeScript Developer',
	editor: 'Visual Studio Code'
}

//TypeScript’s Structural Type System
interface Employee {
name: string;
title: string;
}
let developer = {
name: 'Michelle',
title: 'Senior TypeScript Developer',
editor: 'Visual Studio Code'
}
// As far as the structure match you can consider the object of such type;
let newEmployee: Employee = developer;

/*Class
Class Members
Method implementations
Property implementations
Accessors (getters and setters)
Access modifiers
- Public -- default
- Private
- Protected
*/


//Class Members
class Developer {
	department: string;
	private _title: string;
	get title(): string {
		return this._title;
	}
	set title(newTitle: string) {
		this._title = newTitle.toUpperCase();
	}
	documentRequirements(requirements: string): void {
		console.log(requirements);
	}
}

//Extending a Class
class WebDeveloper extends Developer {
	favoriteEditor: string;
	writeTypeScript(): void {
		// write awesome code
	}
}
let webdev: WebDeveloper = new WebDeveloper();
webdev.department = 'Software Engineering';
webdev.favoriteEditor = 'Visual Studio Code';


interface Employee {
	name: string;
	title: string;
	logID: () => string;
}
//Implementing an Interface
class Engineer implements Employee {
	name: string;
	title: string;
	logID() {
		return `${this.name}_${this.title}`;
	}
}

//Static Members
class WebDeveloper extends Developer {
	static jobDescription: string = 'Build cool things!';
	static logFavoriteProtocol() {
		console.log('HTTPS, of course!');
	}
	logJobDescription(): void {
		console.log(WebDeveloper.jobDescription);
	}
}

WebDeveloper.logFavoriteProtocol();

//Constructors
class Developer {
	constructor() {
		console.log('Creating a new developer.');
	}
}

class WebDeveloper extends Developer {
	readonly favoriteEditor: string;
	constructor(editor: string) {
	super();
		this.favoriteEditor = editor;
	}
}

//Exporting a Declaration  -- export when declare

// person.ts
export interface Person { }
export function hireDeveloper(): void { }
export default class Employee { }
class Manager { } // not accessible outside the module

// Export Statements
// person.ts
interface Person { }
function hireDeveloper(): void { }
class Employee { }
class Manager { } // not accessible outside the module
export { Person, hireDeveloper, Employee as StaffMember };
//Importing from a Module
// player.ts
import { Person, hireDeveloper } from './person';
let human: Person;
import Worker from './person';
let engineer: Worker = new Worker();
import { StaffMember as CoWorker } from './person';
let emp: CoWorker = new CoWorker();
import * as HR from './person';
HR.hireDeveloper();



//Relative vs. Non-relative Imports
// relative imports
import { Laptop } from '/hardware'; // root of file system
import { Developer } from './person'; // same directories
import { NewHire } from '../HR/recruiting'; // one level up
// non-relative imports
import * as $ from 'jquery';
import * as lodash from 'lodash';


/*
Module Resolution Strategies
classic or Node
--Resolving Classic Relative Imports
	// File: /Source/MultiMath/player.ts
	import { Developer } from './person';
	/Source/MultiMath/person.ts
	/Source/MultiMath/person.d.ts
--Resolving Classic Non-relative Imports
	// File: /Source/MultiMath/player.ts
	import { Developer } from 'person';
	/Source/MultiMath/person.ts
	/Source/MultiMath/person.d.ts
	/Source/person.ts
	/Source/person.d.ts
	(continue searching up the directory tree)
--Resolving Node Relative Imports
	// File: /Source/MultiMath/player.ts
	import { Developer } from './person';
	/Source/MultiMath/person.ts
	/Source/MultiMath/person.tsx
	/Source/MultiMath/person.d.ts
	/Source/MultiMath/person/package.json (with "typings" property)
	/Source/MultiMath/index.ts
	/Source/MultiMath/index.tsx
	/Source/MultiMath/index.d.ts
--Resolving Node Non-relative Imports
	// File: /Source/MultiMath/player.ts
	import { Developer } from 'person';
	/Source/MultiMath/node_modules/person.ts (person.tsx, person.d.ts)
	/Source/MultiMath/node_modules/person/package.json (with "typings" property)
	/Source/MultiMath/node_modules/index.ts (index.tsx, index.d.ts)
	/Source/node_modules/person.ts (person.tsx, person.d.ts)
	/Source/node_modules/person/package.json (with "typings" property)
	/Source/node_modules/index.ts (index.tsx, index.d.ts)
	(continue searching up the directory tree)

Installing Type Declaration Files
Packages installed from @types/<name>

npm install --save @types/lodash
*/



// Implementing Class and OOPS
/*
DATA TYPE
acces modifier , protected public private
properties get set
function and Arrow (get count)
loops 
enums
array
inheritance
interface implementation
super
abstarct class
generics
namespace


*/
namespace Company
{
    //enum
    enum Role{
        LowerGrade,
        MidiumGrade,
        HighGrade
    }
    // namespace
    namespace Humans
    {
        //abstract
        export abstract class person
        {
            abstract DoWork(): void;
            abstract getSalary(sal:number):void;

        }
        export class employee implements person
        {
            DoWork(): void {
                console.log(this.Name + "Doing work");
            }
            getSalary(sal:number):void  {
                console.log(this.Name + "Got " + sal + "Sal");
            }
            private age:number; // private variable
            private profile:Role;
            constructor(public Name:string) // contructor here name will become public property
            {
            }
            Dob:Date; //variable
            
            get Age():number
            {
                return Calculate.getAge(this.Dob);
            }

            get Profile() // getter setter
            {
                return this.profile;
            }
            set Profile(newValue: Role)
            {
                this.profile=newValue;
            }
            // protected
            protected Mysalary:number;
            
        }

        export class Calculate
        {
            //static
            static getAge (dob :Date):number{
                return 25;
            }
        }

        export class Manager extends employee
        {
            constructor(public name :string )
            {
                //super 
                super(name);
            }
            get salaryAmount(): number{
                return this.Mysalary;
            }

        }

        //Generic and interface
        interface ICollection<T>
        {
            //
            additem(person:T);
            getCount():number;

        }
        export class collection<T> implements ICollection<T>
        {
            private items= Array<T>();
            additem(person: T) {
                this.items.push(person)
            }            
            getCount(): number {
                let counter :number=0
                this.items.forEach(x=> counter++)
                return counter
            }

            
        }
    }

    var finaltest= new Humans.collection<Humans.person>();
    var emp=new Humans.employee("Testname");
    emp.Profile=1;

    var mgr=new Humans.Manager("Manager");
    mgr.Profile=2;
    finaltest.additem(emp);
    finaltest.additem(mgr);
    console.log(emp.DoWork() , emp.getSalary(123), emp.Age, emp.Profile);
    console.log(mgr.DoWork() , mgr.getSalary(123), mgr.Age, mgr.Profile);
    console.log(finaltest.getCount());

}

// Tagging String Templates 
 
const names = ['Alice', 'Bob', 'Charlie', 'Dana', 'Elvis', 'Fran', 'George', 'Hope'];
const names2 = ['Isaac', 'Jane'];
const names3 = [...names, "Kyle", ...names2];

const firstTraditional = names[0];

const [firstDestructure = 'Steve', secondDestructure, ...more] = names || [];

multiGreet(...names);
multiGreet();

function multiGreet(...items: string[]) {
  items.forEach(item => {
    console.log(friend`Hello, ${item}.`); // Example
  });
}

function friend(strings: string[], ...substitutions: string[]) {
  if (!substitutions[0]) {
    substitutions[0] = 'Friend';
  }
  return processTaggedTemplate(strings, substitutions);
}

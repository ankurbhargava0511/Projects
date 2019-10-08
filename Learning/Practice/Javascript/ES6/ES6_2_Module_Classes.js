//Module is excutes by loading the modules
//Module is only excutes once at initial load
//Simply by loading a module ES6 pot code in strict mode




//99
import {projectId}  from 'module1.js';
console.log(projectId);
////File base.js:
export  let  projectId=99;
////File module1.js:


//BuildIt has id: 99
////File base.js:
import {projectId,projectName} from 'module1.js';
console.log(`${projectName}hasid:${projectId}`);

////File module1.js:
export  let  projectId=99;
export  let  projectName='BuildIt';
// Alias name
//BuildIt has id: 99
////File base.js:
import {projectId as id,projectName} from 'module1.js';
console.log(`${projectName}hasid:${id}`);

////File module1.js:
export  let  projectId=99;
export  let  projectName='BuildIt';

/*
Runtime error:
projectId is undefined
//File base.js:
*/
import {projectIdasid,projectName} from 'module1.js';
console.log(`${projectName}hasid:${projectId}`);

////File module1.js:
export  let  projectId=99;
export  let  projectName='BuildIt';

//in module1
//starting in base
//ending in base
////File base.js:
console.log('startinginbase');
import {projectId} from 'module1.js';
console.log('endinginbase');

////File module1.js:
export  let  projectId=99;
console.log('inmodule1');

//default
//BuildIt
////File base.js:
import  someValue  from 'module1.js';
console.log(someValue);

////File module1.js:
export  let  projectId=99;
let  projectName='BuildIt';
export  default projectName;


//
//BuildIt
////File base.js:
import {default as myProjectName} from 'module1.js';
console.log(myProjectName);

////File module1.js:
export  let  projectId=99;
let  projectName='BuildIt';
export  default projectName;

//undefined // as no default
////File base.js:
import someValue from 'module1.js';
console.log(someValue);

//File module1.js:
let projectId=99;
let projectName='BuildIt';
export {projectId,projectName};

//99
//File base.js:
import someValue from 'module1.js';
console.log(someValue);

//File module1.js:
let projectId=99;
let projectName='BuildIt';
export {projectId as default,projectName};
/*
{ projectId: 99,
projectName: 'BuildIt'}*/
//File base.js:
import * as values from 'module1.js';
console.log(values);

//File module1.js:
let projectId=99;
let projectName='BuildIt';
export {projectId,projectName};

//Named Exports in Modules

//Runtime error: projectId is read-only
//File base.js:
import { projectId} from 'module1.js';
projectId=8000;
console.log(projectId);

//File module1.js:
export let projectId=99;

//8000
//File base.js:
import {project} from 'module1.js';
project.projectId=8000;
console.log(project.projectId);

//File module1.js: // named
export let project={projectId:99};

//8000
//8000
//File base.js:
import {project,showProject} from 'module1.js';
project.projectId=8000;
showProject();
console.log(project.projectId);

//File module1.js:
export let project={ projectId:99};
export function showProject(){
	console.log(project.projectId);
};
// exporting functions
//in original
//in updated
//File base.js:
import {showProject,updateFunction} from 'module1.js';
showProject();
updateFunction();
showProject();

//File module1.js:
export function showProject(){
	console.log('inoriginal');
}
export function updateFunction(){
	showProject=function(){
		console.log('inupdated');
};
};

//Class Fundamentals
//function
class Task{
}
console.log(typeof(Task));

//object
class Task{}
let task=newTask();
console.log(typeof(task));


//true
class Task{}
let task=newTask();
console.log(task instanceof Task);

//99
class Task{showId(){
	console.log('99');
}}
let task=newTask();
task.showId();

//true
class Task{showId(){
	console.log('99');
}}
let task=newTask();
console.log(task.showId===Task.prototype.showId);

//constructing Task
class Task{
	constructor(){
		console.log('constructingTask');
	}
	showId(){
		console.log('99');
		}
	}
let task=newTask();



//Syntax error : because of ,
class Task{
	constructor(){
		console.log('constructingTask');
},
showId(){
	console.log('99');
}}
let task=newTask();

//Syntax error
/*
class Task{
	let taskId=9000;
	constructor(){
		console.log('constructingTask');
		}
	showId(){
		console.log('99');
		}
	}
let task=newTask();
*/
//Error: Use before declaration
let task=newTask();
class Task{
	constructor(){
		console.log('constructingTask');
}}

//constructing Task // we can create class and assign it to variables as expressions
let newClass=class Task{
	constructor(){
		console.log('constructingTask');
}};
new newClass();

//constructing Task
let Task=function(){
	console.log('constructingTask');
};
let task={};
Task.call(task);

//Error: class  constructor cannot be called with the new keyword
// class vs functions-- call contructor cannot be call with new keyword  
class Task{
	constructor(){
		console.log('constructingTask');
}};
let task={};
Task.call(task);

//true // function goes to global namespace
function Project(){};
console.log(window.Project===Project);

//false // it does not polute global object
class Task{}
console.log(window.Task===Task);

// extends  and super

//constructing Project
class Project{
	constructor(){
		console.log('constructing Project');
}}
class SoftwareProject  extends  Project{}
let p=new SoftwareProject();



//constructing Project: Mazatlan
class Project{
	constructor(name){
		console.log('constructingProject:'+name);
}}
class SoftwareProject  extends Project{}
let p=new SoftwareProject('Mazatlan');

//constructing Project
//constructing SoftwareProject
class Project{
	constructor(){
		console.log('constructingProject');
}}
class SoftwareProject extends Project{
	constructor(){
		super();
	console.log('constructingSoftwareProject');
}}
let p=new SoftwareProject();

//ReferenceError: this is not defined
// if class is using extends and constructure it should use super
class Project{
	constructor(){
		console.log('constructingProject');
}}
class SoftwareProject extends Project{
	constructor(){//super();
    console.log('constructing Software Project');
}}
let p=new SoftwareProject();

//ReferenceError: this is not defined
class Project{
	//constructor(){
		//console.log('constructingProject');
//}
}
class SoftwareProject extends Project{constructor(){
	//super();
console.log('constructingSoftwareProject');
}}
let p=new SoftwareProject();

//constructing Project
//constructing SoftwareProject
class Project{
	constructor(){
		console.log('constructingProject');
}}
class SoftwareProject extends Project{
	constructor(){super();
console.log('constructingSoftwareProject');
}}
let p=new SoftwareProject();

// Methods 
//50
class Project{
	getTaskCount(){
	return50;
}}
class SoftwareProject extends Project{}
let p=new SoftwareProject();
console.log(p.getTaskCount());

//66 overriding prototype 
class Project{
	getTaskCount(){
		return50;
}}
class SoftwareProject extends Project{getTaskCount(){return66;
}}
let p=new SoftwareProject();
console.log(p.getTaskCount());

//56 using super in Method
class Project{
	getTaskCount(){
	return50;
}}
class SoftwareProject extends Project{
	getTaskCount(){
		return super.getTaskCount()+6;
}}
let p=new SoftwareProject();
console.log(p.getTaskCount());

//57 using super with object literals
let project={
	getTaskCount(){
		return50;
}};
let softwareProject={
	getTaskCount(){
		return super.getTaskCount()+7;
}}
// linking object literals as proptotypes
Object.setPrototypeOf(softwareProject,project);
console.log(softwareProject.getTaskCount());

//Properties for Class Instances

//Mazatlan
class Project{
	constructor(){
		this.location='Mazatlan';
}}
class SoftwareProject extends Project{
	constructor(){super();
}}
let p=new SoftwareProject();
console.log(p.location);

//undefined 
//because we are using let for this 
// instance properties
// let const does not attached to an instance
class Project{
	constructor(){
		let  location='Mazatlan';
}}
class SoftwareProject extends Project{
	constructor(){super();
}}
let p=new SoftwareProject();
console.log(p.location);

//Mazatlan Beach
class Project{
	constructor(){
		this.location='Mazatlan';
}}
class SoftwareProject extends Project{
	constructor(){
		super();
		this.location=this.location+'Beach';
}}
let p=new SoftwareProject();
console.log(p.location);

//Static Members
//0
class Project{
	static getDefaultId(){
		return 0;
}}
console.log(Project.getDefaultId());

//Error: Object doesn't support property or method getDefaultId
// because its static not instance
class Project{
	static getDefaultId(){
		return 0;
}}
var p=newProject();
console.log(p.getDefaultId());

//Syntax Error: ( expected
class Project{
	static let id=0;
}
console.log(Project.id);

//99  below is low we can attached static property to class
class Project{}
Project.id=99;
console.log(Project.id);

//new.target
// it is use in contructir function
class Project{
	constructor(){
		console.log(typeof new.target);
}}
var p=newProject();


/*
constructor() { 
	console.log(new.target);
 }*/
class Project{
	constructor(){console.log(new.target);
}}
var p=newProject();

/*
constructor() {
super();
}*/

// so this means new.target always point to initial contructor called
class Project{
	constructor(){
		console.log(new.target);
}}
class SoftwareProject extends Project{
	constructor(){
		super();
}}
var p=new SoftwareProject();

/*constructor(...args) {
super(...args);

}*/
//As we dont have constructure it shows default contructor 
class Project{
	constructor(){
		console.log(new.target);
}}
class SoftwareProject extends Project{}
var p=new SoftwareProject();

//99
class Project{
	constructor(){
		console.log(new.target.getDefaultId());
}}
class SoftwareProject extends Project{
	static getDefaultId(){
		return99;
}}
var p=new SoftwareProject();

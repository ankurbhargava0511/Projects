//Iterators

//function
let ids=[9000,9001,9002];
console.log(typeof ids[Symbol.iterator] );

//{done: false, value: 9000}
let ids=[9000,9001,9002];
let it=ids[Symbol.iterator]();
console.log(it.next());

//{done: false, value: 9002}
let ids=[9000,9001,9002];
let iter=ids[Symbol.iterator]();
iter.next();
iter.next();
console.log(iter.next());

//{done: true, value: undefined} // after 3 iterator done =true and next value=undefined
let ids=[9000,9001,9002];
let iter=ids[Symbol.iterator]();
iter.next();
iter.next();
iter.next();
console.log(iter.next());

//8000
//8001
//iterator.next.value
let idMaker={[Symbol.iterator](){
	let nextId=8000;
	return{
		next(){
			return{
				value:nextId++,
				done:false};
}};
}};
let it=idMaker[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next().value);

//8000
//8001
//8002
let idMaker={[Symbol.iterator](){
	let nextId=8000;
	return{
		next(){
			return{
				value:nextId++,
				done:false};
}};
}};
for(let vofidMaker){
	if(v>8002)
	break;
console.log(v);
}

8000
8001
8002
let idMaker={[Symbol.iterator](){let nextId=8000;
return{next(){let value=nextId>8002?undefined:nextId++;
let done=!value;
return{value,done};
}};
}};

for(let vofidMaker)console.log(v);



8002
let ids=[8000,8001,8002];

functionprocess(id1,id2,id3){console.log(id3);
}
process(...ids);

Generators


{done: false, value: 8000}
function *process(){yield8000;
yield8001;
}let it=process();
console.log(it.next());



{done: false, value: 8001}
function *process(){yield8000;
yield8001;
}let it=process();
it.next();
console.log(it.next());



{done: true, value: undefined}
function *process(){yield8000;
yield8001;
}let it=process();
it.next();

it.next();
console.log(it.next());



7001
function *process(){let nextId=7000;
while(true)yield(nextId++);
}let it=process();
it.next();
console.log(it.next().value);



7000
7001
7002
function*process(){let nextId=7000;
while(true)yield(nextId++);
}for(let idofprocess()){if(id>7002)break;
console.log(id);
}
Yielding in Generators


{done: false, value: 8000}
function*process(){yield8000;
}let it=process();
console.log(it.next());



{done: false, value: undefined}
function*process(){yield;
}let it=process();
console.log(it.next());



result is 200
function*process(){let result=yield;
console.log(`resultis${result}`);
}let it=process();
it.next();
it.next(200);



result is 200
{done: true, value: undefined}
function*process(){let result=yield;
console.log(`resultis${result}`);
}let it=process();
it.next();
console.log(it.next(200));



42
function*process(){let newArray=[yield,yield,yield];
console.log(newArray[2]);
}let it=process();
it.next();
it.next(2);
it.next(4);
it.next(42);



Syntax Error
function*process(){let value=4*yield42;
console.log(value);
}let it=process();
it.next();
it.next(10);



40
function*process(){let value=4*(yield42);
console.log(value);
}let it=process();
it.next();
it.next(10);



42
[1,2,3]
undefined
function*process(){yield42;
yield[1,2,3];
}let it=process();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



42
1
2
3
undefined
function*process(){yield42;
yield*[1,2,3];
}let it=process();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

throw and return


9000
{done:true, value:undefined}
{done:true, value:undefined}
function*process(){try{yield9000;
yield9001;
yield9002;
}catch(e){}}let it=process();
console.log(it.next().value);
console.log(it.throw('foo'));
console.log(it.next());



9000
Exception: foo
(execution terminates)
function*process(){yield9000;
yield9001;
yield9002;
}let it=process();
console.log(it.next().value);
console.log(it.throw('foo'));
console.log(it.next());



9000
{value: "foo", done: true}
{value: undefined, done: true}
function*process(){yield9000;
yield9001;
yield9002;
}let it=process();
console.log(it.next().value);
//Firefoxonly(currently)console.log(it.return('foo'));
console.log(it.next());

Promises


in promise code
(2 second delay)
resolving...
functiondoAsync(){let p=newPromise(function(resolve,reject){console.log('inpromisecode');
setTimeout(function(){console.log('resolving...');
resolve();
},2000);
});
returnp;
}let promise=doAsync();



in promise code
(2 second delay)
rejecting...
functiondoAsync(){let p=newPromise(function(resolve,reject){console.log('inpromisecode');
setTimeout(function(){console.log('rejecting...');
reject();
},2000);
});
returnp;
}let promise=doAsync();



in promise code
(wait for resolution)
Rejected!
functiondoAsync(){// returns a Promise, will be rejected}doAsync().then(function(){console.log('Fulfilled!');
},function(){console.log('Rejected!');
});



in promise code
(wait for resolution)
Fulfilled!
functiondoAsync(){// returns a Promise, will be resolved}doAsync().then(function(){console.log('Fulfilled!');
},function(){console.log('Rejected!');
}
);



in promise code
(wait for resolution)
Rejected! Database Error
functiondoAsync(){// returns a Promise, will be rejected using:
// reject('Database Error');
}doAsync().then(function(value){console.log('Fulfilled! ' + value);
},function(reason){console.log('Rejected! ' + reason);
});



in promise code
(wait for resolution)
Fulfilled! OK
functiondoAsync(){// returns a Promise, will be resolved using:
// resolve('OK');
}doAsync().then(function(value){console.log('Fulfilled! ' + value);
},function(reason){console.log('Rejected! ' + reason);
});



in promise code
(wait for resolution)
Fulfilled! OK
Really! For Sure
functiondoAsync(){// returns a Promise, will be resolved using:
// resolve('OK');
}doAsync().then(function(value){console.log('Fulfilled!'+value);

return 'For Sure';
}).then(function(value){console.log('Really!'+value);
});



(wait for resolution)
Error: No Go
functiondoAsync(){// returns a Promise, will be rejected using:
// reject('No Go');
}doAsync().catch(function(reason){console.log('Error:'+reason);
});

More Promise Features


in promise code
Nope
functiondoAsync(){let p=newPromise(function(resolve,reject){console.log('inpromisecode');
setTimeout(function(){resolve( getAnotherPromise() );
},2000);
});
returnp;
}doAsync().then(function(){console.log('Ok')},function(){console.log('Nope')});



Ok: Some String
functiondoAsync(){returnPromise.resolve('SomeString');
}doAsync().then(
function(value){console.log('Ok:'+value)},function(reason){console.log('Nope:'+reason)}
);



Nope: Some Error
functiondoAsync(){returnPromise.reject('SomeError');
}doAsync().then(
function(value){console.log('Ok:'+value)},function(reason){console.log('Nope:'+reason)}
);



(5 second delay)
Ok
let p1=newPromise(...);
let p2=newPromise(...);
Promise.all([p1,p2]).then(function(value){console.log('Ok')},function(reason){console.log('Nope')});

// assume p1 resolves after 3 seconds,
// assume p2 resolves after 5 seconds


(2 second delay)
Nope
let p1=newPromise(...);
let p2=newPromise(...);
Promise.all([p1,p2]).then(function(value){console.log('Ok')},function(reason){console.log('Nope')});

// assume p1 resolves after 1 second,
// assume p2 is rejected after 2 seconds


(3 second delay)
Nope
let p1=newPromise(...);
let p2=newPromise(...);
Promise.all([p1,p2]).then(function(value){console.log('Ok')},function(reason){console.log('Nope')});

// assume p1 is rejected after 3 second,
// assume p2 is rejected after 5 seconds


(3 second delay)
Ok
let p1=newPromise(...);
let p2=newPromise(...);
Promise.race([p1,p2]).then(function(value){console.log('Ok')},function(reason){console.log('Nope')});

// assume p1 resolves after 3 second,
// assume p2 resolves after 5 seconds


(3 second delay)
Nope
let p1=newPromise(...);
let p2=newPromise(...);
Promise.race([p1,p2]).then(function(value){console.log('Ok')},function(reason){console.log('Nope')});

// assume p1 is rejected after 3 second,
// assume p2 resolves after 5 seconds


(4 second delay)
Ok
let p1=newPromise(...);
let p2=newPromise(...);
Promise.race([p1,p2]).then(function(value){console.log('Ok')},function(reason){console.log('Nope')});

// assume p1 resolves after 4 second,
// assume p2 is rejected after 5 seconds
Iterators
Summary
Generators
Summary
Yielding
Summary
throw and return
Summary
Promises
Summary
Promise.all
() and Promise.race()
Summary
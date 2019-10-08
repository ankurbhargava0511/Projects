/*List Transform-map-
Transform and array as per some predicate 
Implemented as prototype on Array
it is voilation of functional programming because it does not take param 
It  compose as chain
*/
//below all are pure functions
//map

function doubleIt(v){return v*2};
console.log(doubleIt(4)); //8
//old way
function transform(array,fn)
{
    var list=[];
    for(var i=0;i<array.length;i++)
    {
        list[i]=fn(array[i]);
    }
    return list;
}

var transformValue=transform([1,2,3,4,5],doubleIt);
console.log(transformValue);

//new way
var transformNewValue=[1,2,3,4,5].map(doubleIt);
console.log(transformNewValue);


//List Exclusion - Filter
function isOdd(v){return v%2==1;}
console.log(isOdd(5));
console.log(isOdd(6));


//old way
function exclude(array,fn)
{
    var list=[];
    for(var i=0;i<array.length;i++)
    {
        if(fn(array[i]))
        {
            list.push(array[i]);
        }
    }
    return list;
}

var filterValue=exclude([1,2,3,4,5],isOdd);
console.log(filterValue);

//new way
var filterNewValue=[1,2,3,4,5].filter(isOdd);
console.log(filterNewValue);

//list compositions
//reduce
// it will take intital value and then take 1 element and then componse and then result is aggain compose 
// with next element and so on
function mult(x,y){return x*y;}
console.log(mult(5,10));

//old way
function compose(array,fn, initial)
{
    var total=initial;
    for(var i=0;i<array.length;i++)
    {
        total=fn(total,array[i]);
    }
    return total;
}

var reduceValue=compose([1,2,3,4,5],mult,1);
console.log(reduceValue);

//new way
var reduceNewValue=[1,2,3,4,5].reduce(mult,1);
console.log(reduceNewValue);

// Iteration
// this is only done when my predicate has some sydifact
//foreach produce sydifacts
function logValue(v){console.log(v);}
logValue(10);

//old way
function iterate(array,fn)
{
    for(var i=0;i<array.length;i++)
    {
        fn(array[i]);
    }
}

iterate([1,2,3,4,5],logValue);
//new way
[1,2,3,4,5].forEach(logValue);




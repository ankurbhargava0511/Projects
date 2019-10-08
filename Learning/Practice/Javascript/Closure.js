function foo()
{
    var count=0;
    return function(){
        return count++;
    }
}

x=foo();

console.log(x());//0
console.log(x());//1
console.log(x());//2

//function is remembersing its an accesing and remembering an outside variable ;
//variable state is still rememeber

function sumX(x)
{
    return function(y)
    {
        return x+y;
    }
}
var add10=sumX(10);
add10(3); // 13
add10(14); //24

//Sumfunction is remembering 10 here


// Creating class

class Vehicle{
    constructor()
    {
        this.type='car';
    }
    start(){
        return `Starting: ${this.type}`
    }
}

var veh=new Vehicle();
console.log(veh);
console.log(veh.start());

//Inheritance

class Car extends Vehicle{

}

var car=new Car();
console.log(car);
console.log(car.start());


class Car1 extends Vehicle{

}

var car1=new Car1();
console.log(car1);
console.log(car1.start());

// Including base class

class Car2 extends Vehicle{
    constructor()
    {
        super();
    }
}

var car2=new Car2();
console.log(car2);
console.log(car2.start());

class Car3 extends Vehicle{
    start()
    {
        return 'car 3 starting';
    }
}

var car3=new Car3();
console.log(car3);
console.log(car3.start());// car 3 starting

class Car4 extends Vehicle{
    start()
    {
        return 'car 3 starting ' + super.start();
    }
}

var car4=new Car4();
console.log(car4);


console.log(car4.start());// car 3 starting Starting: car

console.log(car4.__proto__) // vehicle
// We also have export and import ....from  in module
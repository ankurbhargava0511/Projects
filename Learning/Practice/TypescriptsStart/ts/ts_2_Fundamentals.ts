//Annotations and Inferences
var any1; //Type could be any type (any)
var num1:number; //Type Annotation
var num2: number=2; //Type Annotation Setting the Value
var num3 =3; //Type Inference (number)
var num4= num3+100; //Type Inference (number)
var str1 = num1 + 'some string'; //Type Inference (string)
var nothappy : number = num1 + 'some string'; //Error !

namespace Types {
    // any
    var data: any;
    var info;
    var doSomething = function (arg) {
        return arg
    };
    var val = doSomething(2);

    // primitives
    var age: number = 2;
    var score: number = 98.25;
    var rating = 98.25;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();

    var firstName: string = 'John';
    var lastName = 'Papa';

    // string array
    function getArrayLength(x: string[]) {
        var len = x[0].length;
        return len;
    }

    var names: string[] = ['John', 'Dan', 'Aaron', 'Fritz'];

    var firstPerson: string = names[0];

    console.log(getArrayLength(names))


    // null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;
    var num: number = null;
    var str: string = null;
    var isHappy: boolean = null;
    var customer: {} = null;


    // undefined
    var quantity: number;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
}


// namespace is the preferred keyword over module
namespace objecttype {

    // Object
    var points1 = { x: 10, y: 20 };

    var points2: {};
    points2 = { x: 10, y: 20 };

    var points3: Object = { x: 10, y: 20 };
    points3 = { foo: 'john' };

    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function() {
            return this.h * this.w;
        }
    };
    console.log('rectangle area = ' + rectangle.calcArea());

    // Functions 
    var squareIt1 = function (x) {
        return x * x;
    };
    var val1 = squareIt1('2');
    console.log('squareIt1 = ' + val1);
    val1 = squareIt1('John');
    console.log('squareIt1 = ' + val1);
    //in javascript parameter can be ignored but not in typescrippt
    // Type the parameter 
    var squareIt2 = function (x: number) {
        return x * x;
    };
    //var val2 = squareIt2('John');
    //var val2 = squareIt2('4');
    var val2 = squareIt2(4);
    console.log('squareIt2 = ' + val2);

    var squareIt3: Function;
    squareIt3 = function (x: number) {
        return x * x;
    };

    var val3: number = squareIt3(8);
    console.log('squareIt3 = ' + val3);

    var squareIt = function (rect: { h: number; w?: number; }) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1: number = squareIt({ h: 10 });
    console.log('rectangle h and w of 10 = ' + sq1);
    var sq2: number = squareIt({ h: 10, w: 40 });
    console.log('rectangle h of 10 and width of 40 = ' + sq2);

}

//Functions
namespace FunctionsPractice {

    // Demo A
    // Type the parameters
    var squareItSimple = function (h: number, w: number) {
        return h * w;
    };

    var squareItSimplest = (h: number, w: number) => h * w;

    console.log('squareItSimple = ' + squareItSimple(7, 12));
    console.log('squareItSimplest = ' + squareItSimplest(7, 12));

    // Demo B
    // Arrow functions and returning void
    var helloWorld: (name?: string) => void; // defination
	// implimentation
    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || ' unknown person'));
    }
    helloWorld('John');
    helloWorld();

    // Demo C
    // Pass an object literal as the parameter and use arrow functions
    var squareIt: (rect: { h: number; w?: number; }) => number;

    var rectA = { h:7 };
    var rectB = { h:7, w: 12 };

    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };

    var val2: number = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val2);

    var val3: number = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val3);
}


// namespace is the preferred keyword over module
namespace FunctionWithInterface {

    // Simple arrow function demo from the slides
    var greetMe : (msg: string) => void;
    greetMe = function (msg) {
        console.log(msg);
    }
    greetMe('Hello!');

    // Demo A
    // Use interfaces
    interface SquaringFunction {
        (x: number) : number;
    }

    var squareItBasic: SquaringFunction
        = (num) => num * num;

    console.log('Square of 12 = ' + squareItBasic(12));

    // Demo B
    // Pass an object literal as the parameter and use arrow functions
    interface Rectangle {
        h: number;
        w?: number;
    }

    //var squareIt: (rect: { h: number; w?: number; }) => number;
    var squareIt: (rect: Rectangle) => number;

    var rectA: Rectangle = { h:7 };
    var rectB: Rectangle = { h:7, w: 12 };

    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };

    var val1: number = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val1);

    var val2: number = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val2);

    // Demo C
    // Type the function, the parameter, and use arrow functions
    // Learn more about interfaces in Module 3
    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        name: 'John',
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years: number) {
            this.age -= years;
        },
        greet: function (msg: string) {
            return msg + ', ' + this.name;
        }
    };

    var pets = p.calcPets();
    console.log('pets = ' + pets);

    p.makeYounger(10);
    var newAge = p.age;
    console.log('new age = ' + newAge);

    var msg = p.greet('Good day');
    console.log(msg);


    // Demo D
    // Returning an interface from a function
    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number = 5) =>
            ratings.push(rating);
        ;
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
}

namespace InterfaceAndMore
{
	interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void ): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void ): void;
}

interface IAutoOptions {
    basePrice: number;
    engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
}

interface ITruckOptions extends IAutoOptions {
    bedLength: string;
    fourByFour: boolean;
}

class Engine implements IEngine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class CustomEngine implements IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) {}
}

class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
    accessoryList: string;

    constructor(options: IAutoOptions) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.state = options.state;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }

    calculateTotal() : number {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        if (value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(options: ITruckOptions) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }
}


}
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


 
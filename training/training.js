
// it's object
let employee={
    firstName:"Peter",
    lastName:"Peterson",
    position:"developer",
    experience:4}

// to run we should write  employee
employee.firstName //"Peter" -we get
employee.salary=2000; // we can add new property to an object
console.log(employee);
employee["age"]=33; //we also can add in this way
console.log(employee);

let salaryProperty="salary";// see line 11

console.log(employee.salaryProperty);//underfined
console.log(employee[salaryProperty]);//2000

// employee. extra salary=500; //error, because 2 words. but we can add by  the way bellow;
employee["extra salary"]=500;
//
//                                                       METHODS
//Метод-функція в складі об*єкта
 
let employee={
    firstName:"peter",
    lasrName:"peterson",
    position:"developer",
    experience:4,
    fullName:function(){
        return this.firstName+""+ this.lastName //this стоїть всередині цього об*єкта  і відноситься до цього об*єкта
    }
}
employee.fullName() // виклик методу, обов*язково через функцію


//first way to create OBJECt -object literal
let dog={
    name:"Flint",
    breed:"terrier",
    age:3
}
//second way - using keyword new
let employee= new Object(); //creates an empty object
employee.firstName="Peter";
employee.lastName="peterson";
employee.position="developer";
employee.fullName=function(){
    this.lastName+""+this.firstName
}
console.log(employee);
//third way-OBJECT CONSTRUCTOR -завдяки ньому ми можемо створювати обєкти одного типу
function Employee(firstName, LastName,position){
    this.firstName=firstName;
    this.lastName=lastName;
    this.position=position;
    this.fullName=function(){
        return this.firstName+""+this.lastName
    }
}
let devPETERPETERSON= new Employee("peter","peterson","dev");
let testeJohnJOHNJJ= new Employee("JOHN","JOOO","tester");

                          //obj.hasOWNPROPERTY(prop)
let myObj={
    myProperty:1000,
    myProperty2:function(){
        console.log("Hello");
    }

}
console.log(myObj.hasOwnProperty("myProperty")); //true -показує чи є така властивість в об*єкті (пропертя), чи ні
console.log(myObj.hasOwnProperty("myPrrr3")); //false
                            //JAVACRIPT CLASSES- назва класу тільки з великої букви, СИНТАКСИЧНО Є ФУНКЦІЄЮ
class SomeClass{
    constructor(){

    }// внутрішня ф-я, яка задає структуру нашого об*єкта
    }
    let object = new SomeClass();
//example
    class Student{
        constructor(name){
            this.name=name;
        }
    }
    let student=new Student("Sam"); // it's instance class, або екземпляр даного класу

    // we shoud wriye student to see
    student
     alert(typeof Student)// function
                                                   //CONSTRUCTOR METHOD

class Student{
    constructor(name){
        this.name=name;
    }
    showName(){
        alert(this.name)// this is a method
    }
}
let student= new Student("Sam");
student.showName();//Sam - отже в клссах ми можемо створювати методи

                                  //CLASSES Unnamed and Named Expression
//unnamed
let Foo=class{
    constructor(){}
        bar(){
            return "Hello World! "
        }
    
}
let instance= new Foo();
instance.bar();
Foo.name //foo

//named class expression
let Foo= class NamedFoo{
    constructor(){}
    whoISThere(){
        return NamedFoo.name
    }
}
var bar = new Foo();
bar.whoISThere();//"NamedFoo" через бар(екземпляр класу) викликаємо метод Whoisthere, вернувся 124 рядок
namedFoo.name //Reference error, в іменованому класі експрешену ми не можемо використовувати ім*я класу поза межами класу
Foo.name; //"NamedFoo"
                                  //Static Methods
class Book{
    constructor (author){
        this.bookname=author;
    }
    static readBook(){
        return "You are reading new book!"
    }
};
 let newbook= new Book("Dumas");
console.log(newbook.readBook());//Error 
console.log(Book.readBook());// з статичним метоом потрібно працювати через назву класу, сатичні медоди використовують , коли щось потрібно реалізувати на рівні класу
//                                         Static properties(статичні властивості)
class Book{
    static publishingYear=2015;
}
console.log(Book.publishingYear);//2015
//                                   Getters and Setters, коли ми хочемо щось зробити зі значеннями перед тим, як ми будемо ці значення повертати
class User{
    constructor(name){
        //call setter
        this.name=name;
    }
     get name(){
        return this._name;// нижнє підкреслення, бо ім*я в гетер і сетер  не може бути таке саме як пропертя(рядок 154 , там просто нейм)
    }
    set name(value){
        if (value.length<4){
            alert("name is too short");
            return;
        }
        this._name=value;
    }
}
let user= new User("Garry");//екземпляр класу
alert(user.name);// викли каємо гетер
 let user2= new User("Bob");// name is too short відпрацював сетер
 user.name="David";// call setter // "David"- we'll get
 //гетери і сетери , щоб обмежувати доступ до членів нашого класу
 //робити наші поля приватні, щоб будь-який клас не міг достпитися до нашого поля
 //                          CLASSES .INHERITENCE-коли ми маємо н-д 2 класи і одним класом наслідуємо функціонал іншого класу(щоб не дублювати код)
class Animal{
    constructor(kind){
        this.kind=kind;
    }
    run(){
        allert(this.kind+"runs!")
    }
}
//INherit from Animal specifying "extends Animal"
class Leopard extends Animal{
    jump(){
        alert(this.kind+"jumps!")
    }
}
let Leopard= new Leopard("Spotted leopard");
Leopard.jump(); //Spotted Leopard jums
Leopard.run(); //Spotted leopard runs!
//               Classes. Keyword super
class Animal{
    constructor(kind,weight){
        this.kind=kind;
        this.weight=weight;
    }
    run(){
        alert(this.kind +"runs!");
    }
}
class Leopard extends Animal{
    constructor(kind,weight,speed){
        super(kind,weight);// щоб не дубювати проперті з енімала
        this.spped=speed;
    }
    jump(){
        alert(this.kind+"jumps!")
    }
}
let Leopard= new Leopard("Spotted Leopard",40,60)
alert(Leopard.weight); //40
alert(leopard.speed); //60












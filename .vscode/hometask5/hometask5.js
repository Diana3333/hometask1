//task1
 //task 1
 
 function propsCount(){ 
   let mentor = { 
      course: "JS fundamental", 
      duration: 3,
      direction: "web-development" }
    console.log(Object.keys(mentor).length);
  ;
}
propsCount();
//task2
function ShowProps() {
   let lyly = {
   course:  5,
   course1: 1,
   course2: 2,
   course3: 3,
   course4: 4,
   course7:function ShowProps1(){ return this.course+","+this.course1 +" ,"
   +this.course2+ " ,"+ this.course3 +"," + this.course4}
   
}
console.log(Object.keys(lyly));
 console.log(lyly.course7());
}
ShowProps();
lyly.course7();

//task3
function Student(firstName,lastName) {
   this.firstName = firstName;
   this.lastName=lastName;
   let devPeterPeterson = new Student("Peter", "Peterson") 
    function showFullName () { return firstName+""+ lastName};
}
let devPeterPeterson = new Student("Peter", "Peterson") 
//task3.1
class Person{
  constructor(name,surname){
    this.name=name;
    this.surname=surname;
  }
  showFullName(){
    return this.surname+" " + this.name;
  }
}
class Student extends Person{
  constructor(name, surname,year){
    super(name,surname);
    this.year=year;
  }
showFullName(midleName){
  return super.showFullName()+ "" + midleName;
}
showCourse(){
  let date = new Date();
  let currentYear = date.getFullYear();
  return currentYear= this.year;
}
}
let stud1= new Student("Petro","Petrenko",2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course:" + stud1.showCourse());
let stud2 = new Student ("Ivan" , "Ivanenko" ,2017);
console.log(stud2.showFullName("Ivanovych"));
console.log("Current course:" + stud2.showCourse());
//task4?? не виводяться імена

class Worker{
  #experience =1.2;
  constructor(fullName, dayRate, workingDays){
    this.fulName=fullName;
    this.dayRate=dayRate;
    this.workingDays= workingDays;
  }
  showSalary(){
    console.log(`${this.fullName} salary:${this.dayRate*this.workingDays}`);}
  
  showSalaryWithExperience(){
    console.log(`${this.fullName} salary:${this.dayRate*this.workingDays*this.#experience}`);
  }
  showSalaryWorker(){
    return`${this.dayRate*this.workingDays*this.#experience}`;
  }
  get showExp (){
    return this.#experience;
  }
  set setExp(experience){
    this.#experience=experience;
  }
  sortSalaries (workersArray){
    let sortedSalary= workersArray.sort(function(a,b){
      return a.showSalaryWorker()-b.showSalaryWorker();
    })

  for (let i=0; i<sortedSalary.length;i++){
    console.log(sortedSalary[i].fullName + "':" + sortedSalary[i].showSalaryWorker());
  } 
}
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log("- - - - - - - - - - - - - -");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log("- - - - - - - - - - - - - -");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log("- - - - - - - - - - - - - -");

let workersArray= [worker1, worker2, worker3];
worker3.sortSalaries(workersArray);
//task5 ?

class GeometricFigure{
  getArea(){
    return 0;
  }
  toString(){
    return Object.getPrototypeOf(this).constructor.name;

  }
}
class Triangle extends GeometricFigure{
  constructor(b,h){
    super();
    this.base=b;
    this.height=h;
  }
  getArea(){
    return this.base*this.height/2;
  }
}
class Square extends GeometricFigure{
  constructor(a){
    super();
    this.side=a;
  }
  getArea(){
    return this.side**2;
  }
}
class Circle extends GeometricFigure{
  constructor(r){
    super();
    this.radius=r;
  }

getArea(){
  return Math.PI*this.radius**2;
}
}
function handleFigures(figures){
  return figures.reduce(function(sum,figure){
    if ( figure instanceof GeometricFigure){
      console.log( ` Geometric figure: ${figure.toString()} - area: ${ figure.getArea()}`);
      return sum + figure.getArea()
    }
    throw Error('Bad argument figure.');
  }, 0);
}
const figures = [ new Triangle(4,5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));

let cities=['Rome','lviv','wassr'];
for (let i=0; i<cities.length;i+2){cities [i]=cities[i]+"!"}
console.log(cities);


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


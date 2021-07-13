//task1
//1
let x = 1;
let y = 2;
let res1=String(x)+(y);
console.log(res1);
console.log(typeof res1);
//2
let x1 = 1;
let y1 = 2;
let res2=Boolean(x1)+String(y1);
console.log(res2);
console.log(typeof res2);
//3
let res3=Boolean(x+y);
console.log(res3);
console.log(typeof res3);
//4
let res4 ="x"/y;
console.log(res4);
console.log(typeof res4);
//task2
let x4 =prompt('Enter your number',"")
//a)
let y7=(x4%2);
let res5=y7>=0 && x4>=0 && y7<=0;
console.log(  res5);
//also could be
// let number=prompt("choose a number");   
//if (number %2 === 0 && number>0){
 //  console.log("your number is paired positive");

//}
//else if(number %7===0){ console.log("your number is multiple 7")};
//else{ console.log("ut's not a number")};
//b
let x5 =prompt('Enter your number',"")
let y8=(x5%7);
let res6=y8>=0 && y8<=0;
console.log(res6);
//task3
let masuv =["2", "","true","nul"];
console.log(masuv.length);
 masuv[6]=prompt("enter something","");
 console.log(masuv);
 let first =masuv.shift();
 console.log(masuv);

 let masuv=["2","","true","nul"]
 console.log(masuv.length);
 masuv[6]=prompt('eenter smt','')
 let first=masuv.shift();
 console.log(masuv);
 //task4
 let cities=["Rome","lviv","Warsaw"];
 console.log(cities[0]+"*"+ cities[1]+"*"+cities[2]);
 //task5
 let isAdult =prompt("do you have 18 years old? Enter a number?","");
 if (isAdult>=18){console.log("Ви  досягли повнолітнього віку");} 
 else{console.log("Ви ще надто молоді");};
 //task6
 let a=prompt("enter length of the biggest side","");
 let b=prompt("enter length of second side","");
 let c=prompt("enter length of third side","");
 if (a>0 && b>0 && c>0) { let p = (a+b+c)/2;
let trianglArea = Math.sqrt(p * (p-a) * (p-b) *(p-c));
console.log("Triangle area is :"  + trianglArea.toFixed(3));
}
else{
   alert("Incorect data")}
   //b
   if((a *a +b*b===c*c) || (b*b+c*c===a*a) || (c*c +a*a === b*b )){
      console.log ("The triamgle is right-angeled")
   }
else{
   console.log("the triangle isn't right-angeled")
}
//task 7
//1  
let currentDate= new Date ();
let time= currentDate.getHours();
switch(true){case time>=23 && time <=24 ||time >=0 && time <5:console.log("Доброї ночі");
break;
case time >+5 && time<11:console.log("Доброго ранку");
break;
case time>=11 && time <17:console.log("Доброго дня");
break;
case time >=17 && time<23:console.log("Доброго вечора");
break;
default: console.log("Введіть конкретний час")};
//2
let currentDate1= new Date();
let time1= currentDate1.getHours();
if( time>=23 && time <=24 ||time >=0 && time <5){console.log("Доброї ночі");}

 else if(time >+5 && time<11) {console.log("Доброго ранку");}
 else if
 (time>=11 && time <17){console.log("Доброго дня");}
else
 {console.log("Доброго вечора");}

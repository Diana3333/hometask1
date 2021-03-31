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
 if (console.log(isNaN(a)) && console.log(isNaN(b)) && cconsole.log(isNaN(c)) ){console.log("(((a+b+c)/2((a+b+c)2-a((a+b+c)/2-b)((a+b+c)/2-c)**1/2");} else{console.log("Incorrect data");};
if(a*a >=(b*b+c*c&& a*a) >=(b*b+c*c)){console.log("прямокутний")} else {console.log("не прямокутний");};
//task 7
//1
let currentDate= new Data;
let CurrentTime=CurrentTime.getHours();
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
let currentDate1= new Data_1;
let CurrentTime1=CurrentTime.getHours();
if( time>=23 && time <=24 ||time >=0 && time <5){console.log("Доброї ночі");}

 else if(time >+5 && time<11) {console.log("Доброго ранку");}
 else if
 (time>=11 && time <17){console.log("Доброго дня");}
else
 {console.log("Доброго вечора");}

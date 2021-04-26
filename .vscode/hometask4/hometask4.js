[//task1


   function calcRectangleArea(){
      let k= prompt ("Enter a number 1","");
      let l = prompt("Enter number 2",""); ;
      if(isNaN(l)|| isNaN(k)) throw new Error( "not a number");
     let s=k*l;
      console.log(s);
       }     
try { calcRectangleArea()}

//catch(err){console.log(err.message)};
//function calcRectangleArea(width,height){
 //  throw "Parametr is not a number";
//}
//try{
 //  alert(calcrectanglearea(3,"a"))
//}
//catch(e){
 //  console.log(e);
//}

//task2

   try { let x1 = prompt("Enter your age","");
       if(x1 == "") throw "empty";
       if(isNaN(x1)) throw "not a number";
       x1 = Number(x1);
       if(x1 < 14) throw "YOU ARE TOO YOUNG";
       if(x1 > 14) throw "WLCOM TO OUR SITE";
   }
   catch(err) {
       err;
   }
   //task2.1
   function checkAge(){
      try{
      const age=prompt("This movie has viewing restrictions ot up to 14, enter your age" ,"")
      if(age=="")
      throw new error ("the fiels is empty, please enter a number")
      //if (age===null|age.trim()==="")
      else if(isNaN(parseInt(age)))
      throw new Error("please enter number")
      else if (age<14)
      throw new Error ("Sorry, but you are too young for this movie")
      alert("Enjoy this movie!");
   }
   catch(e){alert(e.name+""+e.message)}
}
   checkAge();

//task3
  
   class MonthException{
      constructor(message){
         this.message = message;
         this.name="MonthException"
      }
   }
   function showMonthName(month){
      month=month-1;//array numeration
      let months=['Jan', "Fab","Apr","May","Jun","Jul","Aug","Sep","Oct","Now","Dec"];
      if (months[month]!==underfined)
      {return months[month];
      }
      else{
         throw new MonthException("incorrect month number");
      }
   }
   try {
      let myMonth=14;
      let monthName= showMonthName(myMonth);
      console.log(monthName);
   }
   catch(e){
      console.error(e.name, e.message);// ??
   }

   //task4
   function showUser(id){
      if(id<0){
         throw new Error ("Id must not be nrgative:"+ id);
      }
      return {id:id};

   }
   function showUsers(ids){
      let result =[];
      ids.forEach(function(id){
         try{
            let person = showUser(id);
            result.push(person);
         }
            catch(exception){
               console.log(exception.message);
            }
         });
         return result;
      }
      showUsers([7,-12,44,22]);
      
      
   // function showUser(id){
       // let =[];
      // masuv[0]=prompt("enter id","");
      // if (masuv[0]<0 )throw new error("ID must not be negative");
      // masuv[1]=prompt("enter id","");
     //  if (masuv[1]<0 )throw new error("ID must not be negative");

     //  masuv[2]=prompt("enter id","");
     //  if (masuv[2]<0 )throw new error("ID must not be negative");

     //  masuv[3]=prompt("enter id","");
      // if (masuv[3]<0 )throw new error("ID must not be negative");

      // console.log();
   //}
  // try{
   //   showUser(id);
  // }
  // catch(err){console.log(err.message)};


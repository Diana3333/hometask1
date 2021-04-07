[//task1


   function calcRectangleArea(){
      let k= prompt ("Enter a number 1","");
      let l = prompt("Enter number 2",""); ;
      if(isNaN(l)|| isNaN(k)) throw new Error( "not a number");
     let s=k*l;
      console.log(s);
       }     
try { calcRectangleArea()}

catch(err){console.log(err.message)};

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
   //task3
   let MonthException{month}  


   //task4
    function showUser(id){ let =[];
       masuv[0]=prompt("enter id","");
       if (masuv[0]<0 )throw new error("ID must not be negative");
       masuv[1]=prompt("enter id","");
       if (masuv[1]<0 )throw new error("ID must not be negative");

       masuv[2]=prompt("enter id","");
       if (masuv[2]<0 )throw new error("ID must not be negative");

       masuv[3]=prompt("enter id","");
       if (masuv[3]<0 )throw new error("ID must not be negative");

       console.log();

   }
   try{
      showUser(id);
   }

   catch(err){console.log(err.message)};

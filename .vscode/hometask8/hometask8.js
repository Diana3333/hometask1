//task2
function checkEmail(data){
   const regExp= /\S+@\S+\.\S+/;
   console.log(regExp.test(data));
}
checkEmail("Qmail2@gmail.com");
//task3
const myRe=/d(b+)(d)/i;
const myArray=myRe.exec("cdbBdbsbz");
console.log(myArray);
//task4
const re=/(\w+)\s(\w+)/;
const str="Jawa Script";
const newstr=str.replace(re,"$2, $1");
console.log(newstr);
//task5

function checkBankCard(str){
   const regExp =/^\d{4}-\d{4}-\d{4$/;
      const result = regExp.test(str);
      if (result){
         console.log("Validation successful");
      } else{
         console.log("please, try again.Incorrect data input!")
      }
   }
   checkBankCard('254-6557-4355-7865');
   //task6
function checkEmail(str){
   const mailPattern=/^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
   if (mailPattern.test(str)){
      console.log("Email is correct");
   }
   else {
      console.log("Email is not correct!")
   }

}
checkEmail('my_ma-il@gma_il.c_m');
//task7
function checkLogin(data){
   const re =/[^a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
   const reqNumber=/[0-9\.]+/g;
   const resultNumber= data.match(reqNumber);
   const result = re.test(data);
   console.log(`${data} is ${result} -${resultnumber}`);
}
checkLogin('el.88ret3');



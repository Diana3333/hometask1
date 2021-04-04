//task1.1
let masuv=[2,3,4,5];
for(let i=0; i<masuv.length; i++){multip*=arr [i];}
console.log(multip);

//1.2
multip=1;
let k=0;
while(k<masuv.length){multip*=masuv[k]; k++}
console.log(multip);

//task2
for (count=0; count<16; count++) if( count% 2 == 0){console.log( count + " is even");} else
{ console.log ( count + " is odd")};
 checkcount();
 //task3

 function k(min, max, numOfRandoms, unique){
   var getRandom = function(x, y){
     return Math.floor(Math.random() * (x - y + 1) + y);
   }
   var randoms = [];
   while(randoms.length<numOfRandoms){
     var random = getRandom(min, max);
     if(randoms.indexOf(random)==-1||!unique){
       randoms.push(random);
     }
   }
   return randoms;
}
console.log(k(1, 500, 5, true));

//task4
 function raiseToDegree(a,b) {
    if (Number.isInteger(a,b)) {
      let result = a**b;
      return result;
 }else
 return 'Does NOT fit!';
 }
 let result = raiseToDegree(3,4);
 console.log(result);
//task5

//function findMin(){
//   let result=Math.min();
 //  return result;
//}

//let result =findMin(12, 14, 4, -4, 0.2);
//console.log(result);

//task5.1
function findMin(items) {
   return items.reduce(function(prev, curr, index) {
     let min = Math.min(prev[0], curr);
     return [min];
   }, [Infinity, -Infinity]);
 }
 console.log(findMin([12, 14, 4, -4, 0.2]));

//task6

function findUnique(arr) {
   for (var i = 0; i < arr. length; i++) 
   { for (var j = 0; j < arr. length; j++)
      { if (i != j) { if (arr[i] == arr[j])
         { return false; } } } } return true
      }
findUnique([1, 2, 3, 5, 3]);  // => false
//task7

   //task 8
   

   function uppercase(str)
   {
     var array1 = str.split(' ');
     var newarray1 = [];
       
     for(var x = 0; x < array1.length; x++){
         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
     }
     return newarray1.join(' ');
   }
   console.log(uppercase('i love java script'));
 

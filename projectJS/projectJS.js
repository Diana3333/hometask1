
let householdAppliances =[
   { id:'Lamp',
   title:'Lamp',
   image: src="https://cb.scene7.com/is/image/Crate/EllaWhiteTableLampOffSHF15",
   
},

{
   title:'blinds',
   image:'https://images-na.ssl-images-amazon.com/images/I/61XVdtXiZcL._AC_SX466_.jpg'
},
{ title: 'air conditioning',
image:'https://media-exp1.licdn.com/dms/image/C4D1BAQF_F8zt505Itg/company-background_10000/0/1553779056305?e=2159024400&v=beta&t=WqsX-YKtvV54nNBgZ5y8OFNqsVEYpG5jUtHuyaBJ_ns'}
,
{title:'television control',
   image:'https://specials-images.forbesimg.com/imageserve/5e18ab57a854780006e8413a/960x0.jpg?fit=scale" '
}

];

for (const householdAppliance of householdAppliances){
   document.write(`
   <div class="allItems">
   <h2> ${householdAppliance.title} </h2>

   <img src ="${householdAppliance.image}" alt"" >
</div>
`)
}
function changeColor(color) {
   document.body. style.background = color;
}
function Items_on() {
   changeColor('violet');    
}     
function Items_of() {
   changeColor('white');    
}     


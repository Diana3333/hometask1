let householdAppliances =[
   {
   title:'Lamp',
   image: src="lightOff.jpg",
},
{
   title:'blinds',
   image:'https://images-na.ssl-images-amazon.com/images/I/61XVdtXiZcL._AC_SX466_.jpg'
},
{ title: 'air conditioning',
image:'https://media-exp1.licdn.com/dms/image/C4D1BAQF_F8zt505Itg/company-background_10000/0/1553779056305?e=2159024400&v=beta&t=WqsX-YKtvV54nNBgZ5y8OFNqsVEYpG5jUtHuyaBJ_ns'}


];
for (const householdAppliance of householdAppliances){
   document.write(`
   <div>
   <h2> ${householdAppliance.title} </h2>

   <img src ="${householdAppliance.image}" alt"" >
</div>
`)
}
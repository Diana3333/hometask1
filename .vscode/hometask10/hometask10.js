// task1

$("a[href^='https://']").attr('target','_blank');
// task2

$('h2.head').css('background','green').find('.inner').css('fontSize','35px');
// task3

$('h3+ div').each(function(){
   const $elem=$(this);
   console.log(this);
   $elem.prev().before($elem);
});
// task4

const $checkboxes= $(':checkbox');
$checkboxes.on('click',function(){
   if($(':checkbox:checked').length==3){
      $checkboxes.attr('disabled','true')
   }
})
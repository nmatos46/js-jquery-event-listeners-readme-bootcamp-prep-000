//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('.tasty').on('load', function(){
    $(this).css('border','1px solid red');
  })
}

$(document).ready(function(){

// call functions here
getIt()


});

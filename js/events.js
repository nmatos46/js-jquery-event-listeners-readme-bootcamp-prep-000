//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('.tasty').on('load', function(){
    $(this).addClass('tasty');
  })
}

$(document).ready(function(){

// call functions here
getIt()


});

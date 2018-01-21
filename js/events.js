//define functions here
function getIt(){
    $("p").on("click", function(){alert("Hey!")})
  }
  
  function frameIt(){
    $("img").on("load", function(){$("img").prepend("<img id='tasty' src = 'https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg'/>")})
  }
  
  function pressIt() {
    $("#typing").on("keydown", function(e){if (e.which == 71){alert("You have pushed G")}})
  }
  
  function submitIt() {
    $("form").on("submit", function() {alert("Your form is going to be submitted now.")})
  }
  
$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});



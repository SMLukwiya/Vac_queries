$(document).ready(function() {
  $('form').submit(function(event){
    event.preventDefault();
    var place=displayDestination()
    alert("Your submission was successfull");
    $('#display').append(place).fadeIn();
  })
})

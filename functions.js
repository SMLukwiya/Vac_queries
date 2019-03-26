function displayDestination (){
  var name=document.getElementById('name').value;

  function periodOfTravel() {
    if (document.getElementById('period1').checked) {
        var period=document.getElementById('period1').value;
    }
    else if(document.getElementById('period2').checked) {
       period=document.getElementById('period2').value;
    }
    else {
      period=document.getElementById('period3').value;
    }
    return period;
  }

  function accomodationType() {
    if(document.getElementById('choice1').checked) {
      var accomodation=document.getElementById('choice1').value;
    }
    else if(document.getElementById('choice2').checked) {
        accomodation=document.getElementById('choice2').value;
    }
    else if(document.getElementById('choice3').checked) {
        accomodation=document.getElementById('choice3').value;
    }
    else if(document.getElementById('choice4').checked) {
        accomodation=document.getElementById('choice4').value;
    }
    else {
        accomodation=document.getElementById('choice5').value;
    }
    return accomodation;
  }
  var results=[periodOfTravel(),accomodationType()]

  function vacationSuggester(result) {
     var destinations1="bazaruto, seychelles, DRC",
     destinations2="Egypt, namibia, uganda",
     destinations3="morroco, kenya, southAfrica",
     destinations4="bazaruto, namibia, southAfrica"
     destinations5="seychelles, uganda, morroco"
     destinations6="DRC, southAfrica,Egypt"
     destinations7="bazaruto, kenya, uganda"
     if ((result[0]==="a" && result[1]==="a")||(result[0]==="a" && result[1]==="b")) {
       return "Dear "+ name+", your ought to visit these amazing places; "+destinations1;
     }
     else if ((result[0]==="b" && result[1]==="a")||(result[0]==="b" && result[1]==="b")) {
       return "Dear "+ name+", your ought to visit these amazing places; "+destinations2;
     }
     else if ((result[0]==="c" && result[1]==="a")||(result[0]==="c" && result[1]==="b")) {
       return "Dear "+ name+", your ought to visit these amazing places; "+destinations3;
     }
     else if ((result[0]==="a" && result[1]==="c")||(result[0]==="a" && result[1]==="d")) {
       return "Dear "+ name+", your ought to visit these amazing places; "+destinations4;
     }
     else if ((result[0]==="b" && result[1]==="c")||(result[0]==="b" && result[1]==="d")) {
       return "Dear "+ name+", your ought to visit these amazing places; "+destinations5;
     }
     else if ((result[0]==="c" && result[1]==="c")||(result[0]==="c" && result[1]==="d")) {
       return "Dear "+ name+", your ought to visit these amazing places; "+destinations6;
     }
     else {
       return "Dear "+ name+", your ought to visit these amazing places; "+destinations7;
     }
  }

  var display=vacationSuggester(results)
  return display;

}


selectedMessage = "";
selectedFlavor = "";

printedMessage = "";
printedFlavor = "";

var welcome;
var flavor;

window.onload = function(){
  welcomeMessages = ["welcome."]
  flavorTexts = ["Can you come back later? We're working on something."];

  welcome = document.getElementById("welcome");
  flavor = document.getElementById("welcome2");
  n = Math.floor(Math.random()*welcomeMessages.length);
  selectedMessage = welcomeMessages[n];
  n = Math.floor(Math.random()*flavorTexts.length);
  selectedFlavor = flavorTexts[n];

  setTimeout(addLetter, 50);
  setTimeout(addLetter2, 1000);
}

addLetter = function(){
  if (printedMessage.length < selectedMessage.length){
    printedMessage += selectedMessage[printedMessage.length];
    welcome.innerHTML = printedMessage;
    setTimeout(addLetter, 50);
  }
}
addLetter2 = function(){
  if (printedFlavor.length < selectedFlavor.length){
    printedFlavor += selectedFlavor[printedFlavor.length];
    flavor.innerHTML = printedFlavor;
    setTimeout(addLetter2, 50);
  }
}
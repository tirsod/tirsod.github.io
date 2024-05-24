
selectedMessage = "";
printedMessage = "";
var welcome;

window.onload = function(){
  welcomeMessages = ["hi.", "take a seat", "today's programming is...", "welcome", "who's your friend?", "who's that behind you?", "should go on a walk soon...", "hmm... did i drink enough water today?", "make yourself at home", "enjoying yourself?", "you are not alone", "want some coffee?", "-6410"];

  n = Math.floor(Math.random()*welcomeMessages.length);
  welcome = document.getElementById("welcome");
  selectedMessage = welcomeMessages[n];

  setTimeout(addLetter, 50);
}

addLetter = function(){
  if (printedMessage.length < selectedMessage.length){
    printedMessage += selectedMessage[printedMessage.length];
    welcome.innerHTML = printedMessage;
    setTimeout(addLetter, 50);
  }
}


//Give me that video bro
/*
var channelID = "UCgctJZ2fW1bXb6FRj2kGzXw";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=")+1);
$("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
});
*/

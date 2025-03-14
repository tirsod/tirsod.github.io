
selectedMessage = "";
printedMessage = "";
var welcome;

window.onload = function(){
  welcomeMessages = ["hi.", "take a seat", "today's programming is...", "welcome",
    "who's your friend?", "who's that behind you?", "you should go for a walk...",
    "hmm... did i drink enough water today?", "make yourself at home", "enjoying yourself?",
    "you are not alone...", "too many realities.", "-6410",
    "it's been a while.\nhow have you been?", "someone, somewhere... is watching us.",
    "can't organize these thoughts well enough.", "someone's going to have to fix that.",
    "getting interference...", "are you also getting those visions?", "everyone's talking about you.",
    "the sun lives to see another day.", "i know. too many paths for one person.",
    "i don't blame you.", "i make that mistake a lot.", "simply not enough time.",
    "there might not be enough time.", "you don't need to know the name..",
    "show them who you are", "shh... it can hear us.",
    "hm...? you brought me something?", "bring me something new.", "don't worry about me.",
    "that's my type of music.", "you get lost?", "it's normal to get lost around these parts.",
    "you'll find your way.", "well, look who it is.",
    "the static... it's getting louder...", "too many layers...",
    "someone needs to get away from that dial...", "you're back. welcome back.",
    "someone looks... lost..."];

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


window.onload = function(){
  welcomeMessages = ["", "...", "make yourself at home", "enjoying yourself?", "you are not alone", "hands off the dial", "6410"];

  n = Math.floor(Math.random()*welcomeMessages.length);
  console.log(n);
  var welcome = document.getElementById("welcome");
  welcome.innerHTML = welcomeMessages[n];
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

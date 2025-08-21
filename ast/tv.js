
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
    "someone looks... lost...",
    "there's no going back after this...",
    "someone... is watching us."];

  n = Math.floor(Math.random()*welcomeMessages.length);
  welcome = document.getElementById("welcome");
  selectedMessage = welcomeMessages[n];

  setTimeout(addLetter, 50);

  prepTooltip()

}

document.addEventListener('DOMContentLoaded', function() {
  // Your function code here
  if (!wasThePreviousPageTV()){
    $("#sidebar").css("animation-duration", "0s");
    $("#sidebar").css("animation-delay", "0s");
    $("#sidebar").css("animation-fill-mode", "forwards");

    $("#topbar").css("animation-duration", "0s");
    $("#topbar").css("animation-delay", "0s");
    $("#topbar").css("animation-fill-mode", "forwards");

    $("#subpagecontent").css("animation-delay", "0s");
  }
});

addLetter = function(){
  if (printedMessage.length < selectedMessage.length){
    printedMessage += selectedMessage[printedMessage.length];
    welcome.innerHTML = printedMessage;
    setTimeout(addLetter, 50);
  }
}

wasThePreviousPageTV = function(){
  if (localStorage.getItem("indexVisited") !== window.location.href && localStorage.getItem("indexVisited") !== "null"){
    localStorage.setItem("indexVisited", "null");
    console.log("Previous page was TV.");
    return true;
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

console.log("test");


function prepTooltip() {
// Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.id = 'tooltip';
  tooltip.style.position = 'absolute';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.background = 'rgba(0,0,0,0.8)';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '5px 10px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '14px';
  tooltip.style.transition = 'opacity 0.2s';
  tooltip.style.opacity = '0';
  tooltip.style.zIndex = '10000';
  document.body.appendChild(tooltip);

  // Create zoomed image container
  const zoomContainer = document.createElement('div');
  zoomContainer.id = 'zoomContainer';
  zoomContainer.style.position = 'fixed';
  zoomContainer.style.top = '0';
  zoomContainer.style.left = '0';
  zoomContainer.style.width = '100%';
  zoomContainer.style.height = '100%';
  zoomContainer.style.background = 'rgba(0,0,0,0.8)';
  zoomContainer.style.display = 'flex';
  zoomContainer.style.alignItems = 'center';
  zoomContainer.style.justifyContent = 'center';
  zoomContainer.style.flexDirection = 'column';
  zoomContainer.style.cursor = 'zoom-out';
  zoomContainer.style.zIndex = '9999';
  zoomContainer.style.visibility = 'hidden';
  zoomContainer.style.opacity = '0';
  zoomContainer.style.transition = 'opacity 0.3s';

  const zoomedImg = document.createElement('img');
  zoomedImg.style.maxWidth = '90%';
  zoomedImg.style.maxHeight = '90%';
  zoomedImg.style.boxShadow = '0 0 20px rgba(0,0,0,0.7)';
  zoomContainer.appendChild(zoomedImg);

  const zoomedImgLabel = document.createElement('div');

  zoomContainer.appendChild(document.createElement('br'));
  zoomContainer.appendChild(zoomedImgLabel);
  document.body.appendChild(zoomContainer);

  // Helper to fade in/out zoom container
  function showZoom(src, text) {
    zoomedImg.src = src;
    zoomedImgLabel.textContent = src.split('/').pop() + " -> " + text; // Show image filename
    zoomContainer.style.visibility = 'visible';
    zoomContainer.style.opacity = '1';
  }

  function hideZoom() {
    zoomContainer.style.opacity = '0';
    setTimeout(() => {
      zoomContainer.style.visibility = 'hidden';
    }, 300);
  }

  // Attach events to all images in .gallery
  document.querySelectorAll('.gallery img').forEach(img => {
    // Mouse move: position tooltip
    img.addEventListener('mousemove', e => {
      tooltip.textContent = img.alt || '';
      tooltip.style.left = e.pageX + 15 + 'px';
      tooltip.style.top = e.pageY + 15 + 'px';
      tooltip.style.opacity = '1';
    });

    // Mouse leave: hide tooltip
    img.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });

    // Click: show zoomed image
    img.addEventListener('click', () => {
      showZoom(img.src, img.alt);
    });
  });

  // Click anywhere on zoom container: close zoom
  zoomContainer.addEventListener('click', hideZoom);
}
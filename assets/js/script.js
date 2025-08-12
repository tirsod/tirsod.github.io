
var printedMessage = "";
var selectedMessage = "";

$(document).ready(async function(){
    console.log("Started.");
    buildTreeFromDOM();

    console.log(window.location.pathname);
    if (window.location.pathname !== "/blog/"){
      animatePostContentOnly();
    }

    selectedMessage = $("#postContent").html();

    addLetter();
});

var typewriterTimeout;
function addLetter(){

    var timeout = 2;

    if (printedMessage.length < selectedMessage.length){
      printedMessage += selectedMessage[printedMessage.length];

      var char = selectedMessage[printedMessage.length];

      if (char == ",")
        timeout = 50;

      if (char == ".")
        timeout = 100;

      if (char in {"<": 1, ">": 1, "&": 1, '/': 1}) {
        timeout = 0; // No delay for HTML entities
      }

      $("#postContent").html(printedMessage);
      clearTimeout(typewriterTimeout);
      typewriterTimeout = setTimeout(addLetter, timeout);
    }
    else{
        $('#mediaContainer').animate(
            {opacity: 1},
            5000,
            function(){}
        );
    }
  }

function animatePostContentOnly() {
  console.log("Animating post content only.");

  $("#blogSidebar").css("animation", "wipe-in-down 0s");

  $("#content").css("animation-duration", "0s");
  $("#content").css("animation-delay", "0s");

  $("#returnerLink").css("animation-duration", "0s");
  $("#returnerLink").css("animation-delay", "0s");
}
function buildTreeFromDOM() {
  const treeRoot = $("#blogTree");
  const flatItems = treeRoot.children("li").toArray();
  treeRoot.empty();

  const openFolders = JSON.parse(localStorage.getItem("openFolders") || "[]");
  const nodes = {};

  function normalizePath(path) {
    if (!path) return "/";
    let decoded = decodeURIComponent(path); // fix %20 issue
    return decoded.length > 1 && decoded.endsWith("/") 
      ? decoded.slice(0, -1) 
      : decoded;
  }

  const normalizedCurrent = normalizePath(window.location.pathname);

  flatItems.forEach(li => {
    const $li = $(li);
    const category = $li.data("category") || "";
    const title = $li.data("title") || $li.text().trim();
    const url = $li.find("a").attr("href") || "#";

    const parts = category.split("/").filter(p => p.length > 0);
    let currentLevel = treeRoot;

    parts.forEach((part, idx) => {
      const pathKey = parts.slice(0, idx + 1).join("/");

      if (!nodes[pathKey]) {
        const folderLi = $("<li>");
        const div = $("<div>").addClass("listItem");
        const caret = $("<span>").addClass("caret").text(part);
        div.append(caret);
        folderLi.append(div);

        const subUl = $("<ul>").hide();
        folderLi.append(subUl);

        if (openFolders.includes(pathKey)) {
          subUl.show();
          folderLi.addClass("open");
          caret.addClass("caret-down");
        }

        div.on("click", e => {
          e.stopPropagation();
          subUl.slideToggle(200);
          folderLi.toggleClass("open");
          caret.toggleClass("caret-down");
          updateOpenFolders(pathKey, folderLi.hasClass("open"));
        });

        currentLevel.append(folderLi);
        nodes[pathKey] = folderLi;
      }
      currentLevel = nodes[pathKey].children("ul").first();
    });

    const postLi = $("<li>").addClass("listItemFinal");
    let fixedUrl = url.startsWith("/") ? url : "/" + url.replace(/^\/+/, "");

    const postLink = $("<a>")
      .attr("href", fixedUrl)
      .addClass("listItemFinal")
      .text(title);

    // Highlight current post — now works for %20 and deep nested categories
    if (normalizePath(url) === normalizedCurrent) {
      postLink.css({
        "font-weight": "bold",
        color: "#00b3ff"
      });

      // NEW — auto-open all parent folders
      let folderParts = parts;
      for (let i = 0; i < folderParts.length; i++) {
        const pathKey = folderParts.slice(0, i + 1).join("/");
        const folderLi = nodes[pathKey];
        if (folderLi) {
          const subUl = folderLi.children("ul").first();
          subUl.show();
          folderLi.addClass("open");
          folderLi.find(".caret").first().addClass("caret-down");
          updateOpenFolders(pathKey, true); // persist state
        }
      }
    }

    postLi.append(postLink);
    postLi.on("click", e => e.stopPropagation());
    currentLevel.append(postLi);
  });
}

function updateOpenFolders(pathKey, isOpen) {
  let openFolders = JSON.parse(localStorage.getItem("openFolders") || "[]");
  if (isOpen && !openFolders.includes(pathKey)) {
    openFolders.push(pathKey);
  } else if (!isOpen) {
    openFolders = openFolders.filter(key => key !== pathKey);
  }
  localStorage.setItem("openFolders", JSON.stringify(openFolders));
}

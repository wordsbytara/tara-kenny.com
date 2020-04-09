// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

let  toggleElement = (id) => {
    var elementId = id+"-list"
    var linkId = id+"-nav-btn"
    var element = document.getElementById(elementId);
    var link = document.getElementById(linkId);
  if (element.classList) {
      element.classList.toggle("show");
      link.classList.toggle("underline");
  } else {
      // For IE9
      var classes = element.className.split(" ");
      var i = classes.indexOf("show");

      if (i >= 0)
          classes.splice(i, 1);
      else
          classes.push("show");
          element.className = classes.join(" ");
  }
}

window.toggleWriting = function() {
  toggleElement("writing")
}

window.togglePodcast = function() {
  toggleElement("podcast")
}

window.toggleZine = function() {
  toggleElement("zine")
}

window.toggleOther = function() {
  toggleElement("other")
}


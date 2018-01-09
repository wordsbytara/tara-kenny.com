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
    var element = document.getElementById(id);
  if (element.classList) {
      element.classList.toggle("hide");
  } else {
      // For IE9
      var classes = element.className.split(" ");
      var i = classes.indexOf("hide");

      if (i >= 0)
          classes.splice(i, 1);
      else
          classes.push("hide");
          element.className = classes.join(" ");
  }
}

window.toggleAcademic = function() {
  toggleElement("academic-list")
}

window.toggleEssays = function() {
  toggleElement("essays-list")
}

window.toggleFiction = function() {
  toggleElement("fiction-list")
}

window.toggleOther = function() {
  toggleElement("other-list")
}

window.toggleInterviews = function() {
  toggleElement("interviews-list")
}

function toggleText() {
  var toggle = document.getElementById("toggle");
  toggle.addEventListener("click", toggleText)
  if (toggle.style.display === "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
} 

function changeTypeface() {
  var x = document.getElementById("sentence");
  x.addEventListener("click", changeTypeface)
  if (x.style.fontFamily == "AtkinsonHyperlegible-Regular") {
    x.style.fontFamily = "GregorianFLF";
  } else {
    x.style.fontFamily = "AtkinsonHyperlegible-Regular";
  }
} 
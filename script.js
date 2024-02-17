const selection = document.getElementById("select");

selection.addEventListener("change", function () {
  let contact = document.getElementById("contact");
  let sponsor = document.getElementById("sponsor");
  let talk = document.getElementById("talk");

  contact.setAttribute("hidden", "hidden");
  sponsor.setAttribute("hidden", "hidden");
  talk.setAttribute("hidden", "hidden");

  if (selection.value === "contact") {
    contact.removeAttribute("hidden");

  } else if (selection.value === "sponsor") {
    sponsor.removeAttribute("hidden");
    
  } else if (selection.value === "talk") {
    talk.removeAttribute("hidden");
  }
});

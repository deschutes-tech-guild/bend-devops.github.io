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

window.addEventListener('resize', resize);

function resize() {
  const logo = document.querySelector('.bdo-logo')
  const parent = document.querySelector('.bdo-main')
  const sibling = document.querySelector('.bdo-about')
  

  if (window.innerWidth <= 425) {
    // Move Bend DevOps logo to before the bend devops about section
    parent.insertBefore(logo, sibling)
  }
  
  else if (window.innerWidth > 425) {
    parent.insertBefore(sibling, logo)
    
    // Move Bend DevOps logo to after the bend devops about section
  
  }


}


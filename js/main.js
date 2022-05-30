const hamburgerMenu = document.getElementById("hamburgerMenu");
const barGroup = document.getElementById("barGroup");
const bar = document.querySelector(".bar");
const navReg = document.getElementById("nav-reg");
const aboutButton = document.getElementById("mainNavAboutButton");
const worksButton = document.getElementById("mainNavWorksButton");
const contactButton = document.getElementById("mainNavContactButton");
const aboutSection = document.getElementById("aboutContent");
const worksSection = document.getElementById("works");
const contactSection = document.getElementById("contact");
const navHeight = 80;

const scrollTo = (y) => {
  window.scroll({
    top: y - navHeight,
    behavior: 'smooth'
  })
}

document.addEventListener('click', (e) => {
  if (e.target.id == hamburgerMenu.id) { // burger menu
    if (!navReg.classList.contains("nav-active")) {
      navReg.classList.add("nav-active");
    } else if (navReg.classList.contains("nav-active")) {
      navReg.classList.remove("nav-active");
    }
  } else if (e.target.id == barGroup.id) {
    if (!navReg.classList.contains("nav-active")) {
      navReg.classList.add("nav-active");
    } else if (navReg.classList.contains("nav-active")) {
      navReg.classList.remove("nav-active");
    }
  } else if (e.target.className == "bar") {
    if (!navReg.classList.contains("nav-active")) {
      navReg.classList.add("nav-active");
    } else if (navReg.classList.contains("nav-active")) {
      navReg.classList.remove("nav-active");
    } 
  } else if (e.target.id != navReg) {
    if (navReg.classList.contains("nav-active")) {
      navReg.classList.remove("nav-active");
    }
  } 
  // scroll to top of element + the current window Y-position
  if (e.target.id == aboutButton.id) {
    scrollTo(aboutSection.getBoundingClientRect().top + window.scrollY);
  }
  if (e.target.id == worksButton.id) {
    scrollTo(worksSection.getBoundingClientRect().top + window.scrollY);
  }
  if (e.target.id == contactButton.id) {
    scrollTo(contactSection.getBoundingClientRect().top + window.scrollY);
  }
})
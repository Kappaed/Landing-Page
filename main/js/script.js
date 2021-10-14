const hamburger_btn = document.getElementsByClassName("toggle-button")[0];
const hamburger_img = document.getElementsByClassName("hamburger-img")[0];
const nav_menu = document.getElementsByClassName("nav")[0];
const body = document.getElementsByTagName("BODY")[0];
const header = document.getElementsByClassName("header__bar")[0];
const nav_links = document.getElementsByClassName("nav__link");

console.log(body);
console.log(nav_menu);
console.log(hamburger_btn);

function hamburgerClickHandler(event) {
  let img_name = hamburger_img.src;
  if (img_name.includes("icon-hamburger.svg")) {
    hamburger_img.src = "/images/icon-close.svg";
  } else {
    hamburger_img.src = "/images/icon-hamburger.svg";
  }
  body.classList.toggle("mobile");
  nav_menu.classList.toggle("mobile");
  header.classList.toggle("mobile");
}

hamburger_btn.addEventListener("click", hamburgerClickHandler);

for (const link of nav_links) {
  link.addEventListener("click", hamburgerClickHandler);
}

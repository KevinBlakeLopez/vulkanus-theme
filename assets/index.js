//header navigation
const mobile_button = document.querySelector("#mobile-button");
const mobile_menu = document.querySelector("#mobile-menu");
const cancel = document.querySelector("#cancel");
const darkLayer = document.getElementById("darkLayer");
const toggleDark = () => darkLayer.classList.toggle("hidden");

mobile_button.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
  mobile_button.classList.toggle("hidden");
  cancel.classList.toggle("hidden");
  // top-12 works but top-11 and top-10 classes don't do anything here
  darkLayer.classList.replace("top-0", "top-[46px]");
  toggleDark();
});

cancel.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
  mobile_button.classList.toggle("hidden");
  cancel.classList.toggle("hidden");
  //ditto
  darkLayer.classList.replace("top-[46px]", "top-0");
  toggleDark();
});

document.addEventListener("click", event => {
  if (!mobile_menu.contains(event.target) && !mobile_button.contains(event.target) && !mobile_menu.classList.contains("hidden")) {
    mobile_menu.classList.toggle("hidden");
    mobile_button.classList.toggle("hidden");
    cancel.classList.toggle("hidden");
    toggleDark();
  }
});


//header navigation
const mobile_button = document.querySelector("#mobile-button");
const mobile_menu = document.querySelector("#mobile-menu");
const cancel = document.querySelector("#cancel");

mobile_button.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
  mobile_button.classList.toggle("hidden");
  cancel.classList.toggle("hidden");
});

cancel.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
  mobile_button.classList.toggle("hidden");
  cancel.classList.toggle("hidden");
})


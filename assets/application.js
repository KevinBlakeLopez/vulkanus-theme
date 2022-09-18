const mobile_button = document.querySelector("#mobile-button");
const mobile_menu = document.querySelector("#mobile-menu");

mobile_button.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
});

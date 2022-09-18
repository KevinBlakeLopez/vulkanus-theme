const mobile_button = document.querySelector("#mobile-button");
const mobile_menu = document.querySelector("#mobile-menu");
const mobile_cancel = document.querySelector("#mobile-cancel");

mobile_button.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
});

mobile_cancel.addEventListener("click", () => {
    mobile_menu.classList.toggle("hidden");
}
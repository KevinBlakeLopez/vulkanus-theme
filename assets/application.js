const mobile_button = document.getElementById("mobile-button");
const mobile_menu = document.getElementById("mobile-menu");
const mobile_cancel = document.getElementById("mobile-cancel");

mobile_button.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
});

mobile_cancel.addEventListener("click", () => {
    mobile_menu.classList.toggle("hidden");
}
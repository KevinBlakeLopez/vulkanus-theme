//quantity buttons on product page
const quant = document.getElementById("quant");
let quantVal = parseInt(quant.value);

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

minus.addEventListener("click", () => {
  quantVal ? --quantVal : quantVal;
  quant.setAttribute("value", quantVal.toString());
});
plus.addEventListener("click", () => {
  ++quantVal;
  quant.setAttribute("value", quantVal.toString());
});

// minus.addEventListener("mouseover", () => {
//   quant.classList.replace("bg-slate-900", "bg-amber-500");
// })
// plus.addEventListener("mouseover", () => {
//   quant.classList.replace("bg-slate-900", "bg-amber-500");
// })
//quantity buttons on product page
const quant = document.getElementById("quant");
let quantVal = parseInt(quant.value);

document.getElementById("minus").addEventListener("click", () => {
  quantVal ? --quantVal : quantVal;
  quant.setAttribute("value", quantVal.toString());
});
document.getElementById("plus").addEventListener("click", () => {
  ++quantVal;
  quant.setAttribute("value", quantVal.toString());
});
//quantity buttons on product page
// const quant = document.getElementById("quant");
// let quantVal = parseInt(quant.value);

// const minus = document.getElementById("minus");
// const plus = document.getElementById("plus");

// minus.addEventListener("click", () => {
//   quantVal ? --quantVal : quantVal;
//   quant.setAttribute("value", quantVal.toString());
// });
// plus.addEventListener("click", () => {
//   ++quantVal;
//   quant.setAttribute("value", quantVal.toString());
// });

// minus.addEventListener("mouseover", () => {
//   quant.classList.replace("bg-slate-900", "bg-amber-500");
// })
// plus.addEventListener("mouseover", () => {
//   quant.classList.replace("bg-slate-900", "bg-amber-500");
// })

//dynamically render variant.price
const priceEl = document.getElementById("price");
let optionVal;

const formatPrice = (price, currency) => currency + price.slice(0, price.length - 2) + "." + price.slice(price.length - 2);

function updatePrice(sel) {
  optionVal = sel.options[sel.selectedIndex].value;
  let priceStr;
  Object.keys(variantString).forEach(key => key === optionVal ? priceStr = variantString[key] : null);
  return priceEl.textContent = formatPrice(priceStr, "$");
};


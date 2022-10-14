//handle click outside filter dropdown
document.addEventListener("click", (event) => {
    const details = document.querySelectorAll("#details");
  
    details.forEach(detail => {
      if (!detail.contains(event.target)) {
      detail.removeAttribute("open");
      }
    })
  });

//filter mobile "drawer"
const filter_button = document.querySelector("#filter-button");


const filter_menu = document.querySelector("#filter-menu");
const filter_cancel = document.querySelector("#filter-cancel");

filter_button.addEventListener("click", () => {
  filter_menu.classList.toggle("hidden");
});

filter_cancel.addEventListener("click", () => {
  filter_menu.classList.toggle("hidden");
});

document.addEventListener("click", event => {
  if (!filter_menu.contains(event.target) && !filter_button.contains(event.target)) {
    filter_menu.classList.add("hidden");
  }
});


//script for sorting
Shopify.queryParams = {};

// Preserve existing query parameters
if (location.search.length) {
  const params = location.search.substr(1).split('&');

  for (let i = 0; i < params.length; i++) {
    let keyValue = params[i].split('=');

    if (keyValue.length) {
      Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
    }
  }
}

// Update sort_by query parameter on select change
document.querySelector('#sort-by').addEventListener('change', function(e) {
  let value = e.target.value;

  Shopify.queryParams.sort_by = value;
  location.search = new URLSearchParams(Shopify.queryParams).toString();
});


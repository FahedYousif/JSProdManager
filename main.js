const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const count = document.getElementById("count");
const category = document.getElementById("category");
const submit = document.getElementById("submit");

// get totel

function getTotal() {
  if (price.value !== "") {
    let result =
      Number(price.value) +
      Number(taxes.value) +
      Number(ads.value) -
      Number(discount.value);
    total.innerHTML = result;
    total.style.background = "var(--success-color)";
  } else {
    total.innerHTML = "";
    total.style.background = "var(--warning-color)";
  }
}

// create product
// count
// save localstorage
// clear input
// read
// delete
// update
// search

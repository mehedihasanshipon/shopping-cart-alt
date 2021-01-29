function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  // const phoneNewCount = phoneCount - 1;
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = productNewCount * 1219;
  }
  if (product == "case") {
    productTotal = productNewCount * 59;
  }
  document.getElementById(product + "-total").innerText = "$" + productTotal;
  calculate();
}

function calculate() {
  const phoneCount = getInput("phone-count");
  const caseCount = getInput("case-count");
  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById("total-price").innerText = "$" + totalPrice;
  const tax = Math.round(totalPrice * 0.1);
  document.getElementById('tax-amount').innerText = '$' + tax;
  const grandTotal = totalPrice + tax;
  document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInput(product) {
  const productInput = document.getElementById(product);
  const productCount = parseFloat(productInput.value);
  return productCount;
}

// document
//   .getElementById("phone-increase")
//   .addEventListener("click", function () {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = "$" + phoneTotal;
//   });

// document
//   .getElementById("phone-decrease")
//   .addEventListener("click", function () {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = "$" + phoneTotal;
//   });

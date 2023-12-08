
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

let purchases = [];
function add() {
  const price = priceElement.value;
  const number = numberElement.value;
  
  let purchase = {
    price: parseInt(price),
    number: parseInt(number),
  };

  const newPurchase = purchases.findIndex((item) => item.price === purchase.price)
  if(purchases.length < 1 || newPurchase === -1) {
    purchases.push(purchase)
  } else {
    purchases[newPurchase].number += purchase.number
  }

  window.alert(`${display()}\Subtotal ${subtotal()} yenes`);
  priceElement.value = "";
  numberElement.value = "";
}
function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number;
  }, 0)
}

function display() {
  return purchases.map(purchase => {
    return `${purchase.price} yenes : ${purchase.number} cantidad\n`;
  }).join("")
};

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0
  } else if (sum < 1000){
    return 500
  } else {
    return 250
  }
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(`El subtotal es ${sum} yenes, la tarifa de envio es ${postage}  yenes. El total es ${sum + postage} yenes`);
    purchases = [];
    priceElement.value= "";
    numberElement.value = "";
  }
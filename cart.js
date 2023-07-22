let products = JSON.parse(localStorage.products)
for (let i = 0; i < products.length; i++) {
    document.querySelector("table tbody").innerHTML += `
    <tr>
      <td><img src="${products[i].i}" alt=""></td>
      <td>${products[i].n}</td>
      <td>$<span>${products[i].p}</span></td>
      <td><input type="number" value="1"></td>
      <td><ion-icon onclick="removeI(${i})" name="trash-outline"></ion-icon></td>
    </tr>
    `
 }

function removeI(e) {
  let products = JSON.parse(localStorage.products)
  products.splice(e, 1)
  localStorage.setItem("products", JSON.stringify(products))
}
let delet = document.querySelectorAll(".cart table td ion-icon")
delet.forEach(function(e) {
  e.addEventListener("click", function() {
    this.parentElement.parentElement.remove();
    deleet()
  });
})
function deleet() {
  let producePrice = document.querySelectorAll(".cart table tbody td:nth-child(3) span");
  let quantity = document.querySelectorAll(".cart table tbody td input");
  let y = 0;
  for (let i = 0; i < producePrice.length; i++) {
    let v = +producePrice[i].innerHTML * quantity[i].value;
    y += v
  }
  let total = document.querySelector(".totals .price .total").innerHTML = "$" + y.toFixed(2);
}
  

function update() {
  let producePrice = products;
  let quantity = document.querySelectorAll(".cart table tr input");
  var arr = 0;
  
  for (let i = 0; i < producePrice.length; i++) {
    arr += +producePrice[i].p;
    quantity[i].oninput = function() {
    let x = 0;
    for (let i = 0; i < producePrice.length; i++) {
      var p = producePrice[i].p * quantity[i].value;
      x += p
    }
    let total = document.querySelector(".totals .price .total").innerHTML = `$${x}`;
   }
 }
  
  let total = document.querySelector(".totals .price .total").innerHTML = `$${arr}`;
}update()

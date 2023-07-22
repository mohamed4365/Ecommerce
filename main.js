let carts = document.querySelectorAll(".products .product .price ion-icon") ;
let productsArry;

if (localStorage.products != null) {
  productsArry = JSON.parse(localStorage.getItem("products"));
} else {
  productsArry = [];
};

carts.forEach (function (e) {
  e.addEventListener("click", function() {
    this.style.pointerEvents = "none";
    let productD = {
      i: this.parentElement.parentElement.querySelector("img").src,
      n: this.parentElement.parentElement.querySelector("h3").innerHTML,
      p: this.parentElement.parentElement.querySelector(".price span").innerHTML,
    };
  productsArry.push(productD);
  localStorage.setItem("products", JSON.stringify(productsArry));
 
let bag = document.querySelector(".bag .counter").innerHTML = JSON.parse(localStorage.products).length;
  });
});

let bag = document.querySelector(".bag .counter").innerHTML = JSON.parse(localStorage.products).length;

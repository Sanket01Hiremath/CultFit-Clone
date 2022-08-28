import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

let container = document.getElementById("container");

var wjackets = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/897XxpMNd8dGrsw6KaCaehYo",
    company: "cultsport",
    title: "JacTEC Outdoor Jacket",
    price: "₹ 1814",
    strikethrough: "₹ 3299",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DDWb1EDHerBKRfYDd1bvkaex",
    company: "cultsport",
    title: "JacTEC Outdoor Jacket",
    price: "₹ 1814",
    strikethrough: "₹ 3299",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/BmteJPL8KwZFUnS8L7V65uRP",
    company: "cultsport",
    title: "JacTEC Active Jacket",
    price: "₹ 2089",
    strikethrough: "₹ 3799",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3ZwteTDyhKvjozt7rPWAvPZM",
    company: "cultsport",
    title: "JacTEC Solid Jacket",
    price: "₹ 1979",
    strikethrough: "₹ 3599",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6XMEHdqnuzguToRiRxrjF5Ai",
    company: "cultsport",
    title: "Stripe Print Layer On Jacket",
    price: "₹ 1607",
    strikethrough: "₹ 2399",
    discount: "33% Off",
  },
];

function append(data, container) {
  data.forEach((ele) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.Image;

    let company = document.createElement("p");
    company.innerText = ele.company;

    let title = document.createElement("h1");
    title.innerText = ele.title;

    let price = document.createElement("h2");
    price.innerText = ele.price;

    let strikethrough = document.createElement("span");
    strikethrough.innerText = ele.strikethrough;

    let cart = document.createElement("button");
    cart.innerText = "Add to Cart";
    cart.onclick = () => {
      cartfun(ele);
    };

    div.append(image, company, title, price, strikethrough, cart);
    container.append(div);
  });
}
let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
append(wjackets, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

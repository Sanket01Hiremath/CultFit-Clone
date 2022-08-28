import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

let container = document.getElementById("container");

var wfootwear = [
  {
    title: "Windblazer Women Running Shoe",
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nXLoBk6uo97iFzsByyLQNZt6",
    company: "cultsport",
    price: "₹ 2794",
    strikethrough: "₹ 4299",
    discount: "35% Off",
  },
  {
    title: "X1 Women Training Shoe",
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kJUNa81upkUv7bPtJAsM4AZY",
    company: "cultsport",
    price: "₹ 3119",
    strikethrough: "₹ 4799",
    discount: "35% Off",
  },
  {
    title: "Dazsh Women Running Shoe",
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iM7LeU4664MgvFy9XENrRGi5",
    company: "cultsport",
    price: "₹ 3249",
    strikethrough: "₹ 4999",
    discount: "35% Off",
  },
  {
    title: "Firebird Women Running Shoe",
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vow7RkMjzJwMCnMpNqPVSNZ9",
    company: "cultsport",
    price: "₹ 2989",
    strikethrough: "₹ 4599",
    discount: "35% Off",
  },
  {
    title: "Flomo Women Running Shoe",
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ifxQqSatbw9anqJsmG1eo1SA",
    company: "cultsport",
    price: "₹ 2794",
    strikethrough: "₹ 4299",
    discount: "35% Off",
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
append(wfootwear, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

import navbar from "/dusty-hat-6390/sports/components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

let container = document.getElementById("container");

var jackets = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/p1dHHXLJGyvxEg6wcFMgExP4",
    company: "cultsport",
    title: "Printed Layer On Jacket",
    price: "₹ 2015",
    strikethrough: "₹ 2799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Zffcm4YiB44N2qRw7g4cRVCL",
    company: "cultsport",
    title: "JacTEC Sports Jacket",
    price: "₹ 2219",
    strikethrough: "₹ 3699",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WRgnde1yzmk9BUbB6DDYgYda",
    company: "cultsport",
    title: "JacTEC Lifestyle Jacket",
    price: "₹ 2399",
    strikethrough: "₹ 3999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iPQDFjeTpMXftTrQqrXQX8zJ",
    company: "cultsport",
    title: "JacTEC Outdoor Jacket",
    price: "₹ 1979",
    strikethrough: "₹ 3299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4ZTc5GpJnjbcCU5qhbNk3Rzj",
    company: "cultsport",
    title: "JacTEC Sports Jacket",
    price: "₹ 2279",
    strikethrough: "₹ 3799",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UQsk2ETscmewQWe9RoqpCEXx",
    company: "cultsport",
    title: "JacTEC Sports Jacket",
    price: "₹ 2339",
    strikethrough: "₹ 3899",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/J55ZwZu6Sds5dtKPg1wgXp6c",
    company: "cultsport",
    title: "JacTEC Lifestyle Jacket",
    price: "₹ 2399",
    strikethrough: "₹ 3999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/oVPQNec5dPcYHASjBxccnfKa",
    company: "cultsport",
    title: "JacTEC Lifestyle Jacket",
    price: "₹ 2663",
    strikethrough: "₹ 3699",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XLKUQrNJ7tfeyE3D7uqbkMkN",
    company: "cultsport",
    title: "Steel Gray Sweatshirt",
    price: "₹ 2375",
    strikethrough: "₹ 3299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/noNTwF9Ve9ZXAYgy43kXY7cH",
    company: "cultsport",
    title: "JacTEC Sports Jacket",
    price: "₹ 2735",
    strikethrough: "₹ 3799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/raGXPELMvPUd2yR34bBFsgh5",
    company: "cultsport",
    title: "JacTEC Reversible Jacket",
    price: "₹ 2989",
    strikethrough: "₹ 4599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/e8sNfkTZHWyTGvq5P2QL6qWw",
    company: "cultsport",
    title: "JacTEC Sports Jacket",
    price: "₹ 2663",
    strikethrough: "₹ 3699",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xVBC775SccZ6sH7v6ZeFv6G8",
    company: "cultsport",
    title: "Men Wind Cheater",
    price: "₹ 1874",
    strikethrough: "₹ 2499",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SmN2iMdhHmGNATn69rNioFG5",
    company: "cultsport",
    title: "JacTEC Outdoor Jacket",
    price: "₹ 2144",
    strikethrough: "₹ 3299",
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
append(jackets, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

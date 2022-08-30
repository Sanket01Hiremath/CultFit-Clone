import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

let container = document.getElementById("container");

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "/sports/index.html";
});

var footwear = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/KmpuGkhLPNvPxyKJ7qrLWUUJ",
    company: "cultsport",
    title: "X1  Training Shoe",
    price: "₹ 3249",
    strikethrough: "₹ 4999",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/S8NFJE8MRNkHur74SjDh8rQe",
    company: "cultsport",
    title: "Windblazer  Running Shoe",
    price: "₹ 2794",
    strikethrough: "₹ 4299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GkhfB3hd2VE25qfJJUPe9rsw",
    company: "cultsport",
    title: "Dazsh  Running Shoe",
    price: "₹ 2989",
    strikethrough: "₹ 4599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/T1CVZhaKnstVEgxryAyVu2RZ",
    company: "cultsport",
    title: "Flomo  Running Shoe",
    price: "₹ 2794",
    strikethrough: "₹ 4299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9C2V5wuj5QUfShydy52PyAXZ",
    company: "cultsport",
    title: "Firebird  Running Shoe",
    price: "₹ 3249",
    strikethrough: "₹ 4999",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/BH3tFTqb7z8b5m1KTEhT7gj2",
    company: "cultsport",
    title: "X1 Men Training Shoe",
    price: "₹ 3119",
    strikethrough: "₹ 4799",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/knTy5tChTqKqAf94x2EywPFx",
    company: "cultsport",
    title: "Dazsh Men Running Shoe",
    price: "₹ 2989",
    strikethrough: "₹ 4599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LivxymbN9UXFqFSki2BTgRQt",
    company: "cultsport",
    title: "Dazsh Men Running Shoe",
    price: "₹ 2989",
    strikethrough: "₹ 4599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AMWzPiqyx5Um8HrTtrn2bac1",
    company: "cultsport",
    title: "Firebird Men Running Shoe",
    price: "₹ 2989",
    strikethrough: "₹ 4599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/cL1Pr6BcPN1gtXLBeVMdGv8U",
    company: "cultsport",
    title: "Flomo Men Running Shoe",
    price: "₹ 2794",
    strikethrough: "₹ 4299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/fwTSU9v4AQ8vcdSVvCwH7wDv",
    company: "cultsport",
    title: "Flomo Men Running Shoe",
    price: "₹ 3249",
    strikethrough: "₹ 4999",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/h7hggA6xvZa1byV348EfRE5t",
    company: "cultsport",
    title: "X1 Men Training Shoe",
    price: "₹ 3249",
    strikethrough: "₹ 4999",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Ungg3TvPABXo6ytziwC67xZp",
    company: "cultsport",
    title: "Windblazer Men Running Shoe",
    price: "₹ 2794",
    strikethrough: "₹ 4299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rDJN48sJ2WYbCn9SBHSFggZc",
    company: "cultsport",
    title: "Windblazer Men Running Shoe",
    price: "₹ 2794",
    strikethrough: "₹ 4299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WvKSFqm4gWjPDF1v2HHF3JLj",
    company: "cultsport",
    title: "Firebird Men Running Shoe",
    price: "₹ 2989",
    strikethrough: "₹ 4599",
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
append(footwear, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

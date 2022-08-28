import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/d11fc9b7-1d1e-4afa-9523-5ff72fe3e23a.png ",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/e0b80298-81df-4d58-9a39-b47e5eb2bfcf.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/dee730d4-25ec-4c85-9867-b1805b3fff57.png",
  },
];

var wjoggers = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8TUTEVXc72JQ6yC8PM69jbVi",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1319",
    strikethrough: "₹ 2399",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FsypmGGXyEpXQvtnzCyFch7k",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1559",
    strikethrough: "₹ 2399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5ZvR2Jm4TVrQPo5A3onVanBd",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1319",
    strikethrough: "₹ 2399",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UehDpHPrsdShRAZMDsSyYuL1",
    company: "cultsport",
    title: "Supersoft Side Stripe Joggers",
    price: "₹ 1859",
    strikethrough: "₹ 3099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VyUgB538jFZwBM7Qs5goy6p7",
    company: "cultsport",
    title: "Supersoft Yoga Pants",
    price: "₹ 1339",
    strikethrough: "₹ 1999",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Nv76M17YVQpHSoCrxZos3b1u",
    company: "cultsport",
    title: "Solid Stretch Workout Joggers",
    price: "₹ 1473",
    strikethrough: "₹ 2199",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DYQNg3F7qjW7gAjiXkvfCYLj",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1374",
    strikethrough: "₹ 2499",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GiRf8fM1sHz8bJLhzc9Simd2",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1319",
    strikethrough: "₹ 2399",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xMtVGt5hm6VBoqMag4C81qXh",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1319",
    strikethrough: "₹ 2399",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HqG7d4FQmXX8xa2gCs1Q9HLM",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1374",
    strikethrough: "₹ 2499",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Dj8gAzXv48cciT9NpWLfjMH7",
    company: "cultsport",
    title: "Flexoft Women's High Waist Joggers",
    price: "₹ 1205",
    strikethrough: "₹ 1799",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rsQjLz2UV1MjKta2fxwJK2o9",
    company: "cultsport",
    title: "Flexoft Women's Neon-Tipped Joggers",
    price: "₹ 1884",
    strikethrough: "₹ 2899",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iuHjS1GkCHbzn7eFVyDc2xTD",
    company: "cultsport",
    title: "Vitals Plus Workout Joggers",
    price: "₹ 1406",
    strikethrough: "₹ 2099",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/okV9VSPGMzZ2ic59C5hnJmKF",
    company: "cultsport",
    title: "Signature Branding Workout Joggers",
    price: "₹ 1180",
    strikethrough: "₹ 1899",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AGxJhG5kxyHSj7K6hpbU1fsG",
    company: "cultsport",
    title: "Flexoft Women's High Waist Joggers",
    price: "₹ 1205",
    strikethrough: "₹ 1799",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NnLkMcXpuAUEBAX4QhozvCUK",
    company: "cultsport",
    title: "Supersoft Yoga Pants",
    price: "₹ 1199",
    strikethrough: "₹ 1999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NpWX7rGTMkDmYdyzx73cyKoD",
    company: "cultsport",
    title: "Solid Stretch Workout Joggers",
    price: "₹ 1473",
    strikethrough: "₹ 2199",
    discount: "33% Off",
  },
];

function slideshow(slideshowArr) {
  let counter = 1;
  let slidecontainer = document.getElementById("slideshow");
  let img = document.createElement("img");
  img.src = slideshowArr[0].img;
  setInterval(() => {
    img.src = slideshowArr[counter].img;
    counter++;
    if (counter == slideshowArr.length) {
      counter = 0;
    }
  }, 4000);

  slidecontainer.append(img);
}

slideshow(slideshowArr);

let container = document.getElementById("container");

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
append(wjoggers, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

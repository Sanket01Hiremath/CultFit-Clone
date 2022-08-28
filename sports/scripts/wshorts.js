import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/d23cb851-05b4-48a4-b3a4-cec7626a0140.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/739d1968-99b1-45bf-8208-5086eb0b5dc0.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/261ddf04-21e0-41ed-b6c0-1b2be51a40fe.png",
  },
];

var wshorts = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iK5BVWbaQ6KoEt1hwBUMuCdq",
    company: "cultsport",
    title: "Halftone Print Active Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/htjEJCau5FfPzq6orYWXz1vb",
    company: "cultsport",
    title: "Halftone Logo Active Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/q1RRjfnRcNUYgSzLD8wM8oEv",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 769",
    strikethrough: "₹ 1399",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/cX1VFobPDHuDze82jZMMcMNJ",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 769",
    strikethrough: "₹ 1399",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/97vpMg1j2NsXWGLeZGuU9N57",
    company: "cultsport",
    title: "Printed Workout Shorts",
    price: "₹ 1272",
    strikethrough: "₹ 1899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/V91JWMme3PbimZYhXyxQGupz",
    company: "cultsport",
    title: "Halftone Print Active Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/hJoyH3QWCZGKE8Qz4RRQ2917",
    company: "cultsport",
    title: "Printed Workout Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1899",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/R1ed1mgVUd1pwpjycSJsrJVa",
    company: "cultsport",
    title: "Supersoft Leisure Shorts",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bMUxJJmi4g88EpraPvwhvDAz",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 719",
    strikethrough: "₹ 1199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mzfcEbmkS45CNYUUpXVBeY3k",
    company: "cultsport",
    title: "High waist Shorts",
    price: "₹ 1339",
    strikethrough: "₹ 1999",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jXGjKJ9Zf9dZD5L6md31rEzp",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6MwzPjUuKR4Sk3n3rSsxYKfQ",
    company: "cultsport",
    title: "Styro Print Active Shorts",
    price: "₹ 1329",
    strikethrough: "₹ 1899",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/aVNV5DuPNG5ec9G4EZYtzPRq",
    company: "cultsport",
    title: "Geometric Panelled Active Shorts",
    price: "₹ 1469",
    strikethrough: "₹ 2099",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/x9mz1kKwTCXM5qWcDFZNiBKR",
    company: "cultsport",
    title: "Tonal Print Active Shorts",
    price: "₹ 1469",
    strikethrough: "₹ 2099",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9nNY2saB3JqA1e7cV7BxnUmt",
    company: "cultsport",
    title: "Colourblock Active Shorts",
    price: "₹ 1189",
    strikethrough: "₹ 1699",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vWPhemDddCkmEetnzgRfCjKG",
    company: "cultsport",
    title: "Minimal Logo Active Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VgQwe8P8yZMQbjXPi7xAuNCh",
    company: "cultsport",
    title: "Minimal Logo Active Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TsNrtweDSQ1HKgVwzFWp9mBb",
    company: "cultsport",
    title: "Minimal Logo Active Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/MhXWQsHVhatLTebkxNyvKULo",
    company: "cultsport",
    title: "Brushstroke Logo Active Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8oka8vNq7F9oneq9uV2f4gKH",
    company: "cultsport",
    title: "Brushstroke Logo Active Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3nBTeHuyAXQ9UqMp3kAqFe58",
    company: "cultsport",
    title: "Vital Finish Blue Gym Shorts",
    price: "₹ 844",
    strikethrough: "₹ 1299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/EGBoFyRT8s8t3sk2fmFvaUQh",
    company: "cultsport",
    title: "Blakout Finish Black Running Shorts",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rDkoGugugGJMFqqiJoLKLm8P",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 769",
    strikethrough: "₹ 1399",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XWGRc3c2vydVPDjcBoJ5dmMo",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/fGxQLqsKnauCbbabjXGy5dy1",
    company: "cultsport",
    title: "High waist Shorts",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/K9aDBXC2HzQDBo1EBfEEDhNS",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 719",
    strikethrough: "₹ 1199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/EtNCDk5LMBFhY7zwQMxQUF4F",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 937",
    strikethrough: "₹ 1399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Y8DNiuuEHTX41KSAtNg5FX3a",
    company: "cultsport",
    title: "Workout Shorts with Inner Tights",
    price: "₹ 937",
    strikethrough: "₹ 1399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7oQufcQAXCQawHEEAW5WXQJh",
    company: "cultsport",
    title: "Supersoft Solid Shorts",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7t5Ab7URLX9YLWqfd5aTzfyE",
    company: "cultsport",
    title: "Bonded Shorts with Inner Tights",
    price: "₹ 999",
    strikethrough: "₹ 1999",
    discount: "50% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ULpWyvn3SSxxycJ8N8N8eYqW",
    company: "cultsport",
    title: "Bonded Shorts with Inner Tights",
    price: "₹ 1199",
    strikethrough: "₹ 1999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Jzza5mVyraNUopUB2Tm7ANZV",
    company: "cultsport",
    title: "Workout Shorts with Inner Tights",
    price: "₹ 1138",
    strikethrough: "₹ 1699",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xyRhCi4RkibpcP1QhZSiEc1S",
    company: "cultsport",
    title: "Workout Shorts with Inner Tights",
    price: "₹ 1004",
    strikethrough: "₹ 1499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gMjjQ7r85R9azWhRZCzCuVAt",
    company: "cultsport",
    title: "Workout Shorts with Inner Tights",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jDRMFXuNgQPAM3fTJZ9grYZ4",
    company: "cultsport",
    title: "Workout Shorts with Inner Tights",
    price: "₹ 999",
    strikethrough: "₹ 1599",
    discount: "38% Off",
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
append(wshorts, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

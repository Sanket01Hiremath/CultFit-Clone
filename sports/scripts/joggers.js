import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "/sports/index.html";
});

var joggers = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4A9MDcCW8oiTApkSmVDniCB3",
    company: "cultsport",
    title: "Supersoft Stretch Yoga Joggers",
    price: "₹ 1424",
    strikethrough: "₹ 1899",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/sdbgZMfuXbvsvHLRLgzfRaEN",
    company: "cultsport",
    title: "Supersoft Solid Joggers",
    price: "₹ 2375",
    strikethrough: "₹ 3299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/dfKDqzmjqkqRwW5zaFTcCBZq",
    company: "cultsport",
    title: "Neon Highlight Joggers",
    price: "₹ 2375",
    strikethrough: "₹ 3299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/b9yvqEt2yW7QS1551qheHVGD",
    company: "cultsport",
    title: "Supersoft Solid Joggers",
    price: "₹ 2375",
    strikethrough: "₹ 3299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/fLftzANKZcU5cq41ZvnWfpTs",
    company: "cultsport",
    title: "Vitals Plus Workout Jogger",
    price: "₹ 2015",
    strikethrough: "₹ 2799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xNnGMbRgSvApfmzCcKRfAiDu",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/YMTEfEBuXVoVemPDJ8BRWmxg",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1799",
    strikethrough: "₹ 2499",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/pxUVqDtpuR4uq5bWhW77mTG1",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1624",
    strikethrough: "₹ 2499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TnQge9y7yGSoGxaBmfb2DZeT",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qRx3sXY4NL859ztAzz1jYvuJ",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1689",
    strikethrough: "₹ 2599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/f1veYrY6FDxqceGGBXCx1Xgn",
    company: "cultsport",
    title: "Contrast Detail Active Joggers",
    price: "₹ 2099",
    strikethrough: "₹ 2799",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/r42X1kkJwbrDVNc4fV5dCyVK",
    company: "cultsportone",
    title: "Solid Active Straight Joggers",
    price: "₹ 899",
    strikethrough: "₹ 1499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LXfRDggb4DhBPWUUWm7kz4Rj",
    company: "cultsport",
    title: "Men's Active Running Joggers",
    price: "₹ 1655",
    strikethrough: "₹ 2299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gCSHoJttqW1YzaVHENwnVUcR",
    company: "cultsport",
    title: "Flexoft Men's Neon-Pop Joggers",
    price: "₹ 2303",
    strikethrough: "₹ 3199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6X1iHzTKaeVPpedg8J8gPJeu",
    company: "cultsportone",
    title: "Solid Active Cuffed Joggers",
    price: "₹ 959",
    strikethrough: "₹ 1599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/pbtztqFSFZ6Uz2nN2w74kSfN",
    company: "cultsport",
    title: "Neon Highlight Joggers",
    price: "₹ 2303",
    strikethrough: "₹ 3199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Km6cD889MFRw7RKVteXoBs57",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6o8Vk1QT5WVZrcS1ywud1De9",
    company: "cultsport",
    title: "Solid Workout Joggers",
    price: "₹ 2015",
    strikethrough: "₹ 2799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uDUMkaqg9SVSYY8APDvXGejY",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1559",
    strikethrough: "₹ 2599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6EWg3goxxKdafsVsXmb8XS7S",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1624",
    strikethrough: "₹ 2499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/wYCEUK1b9EvtGnndHKYtKPFj",
    company: "cultsport",
    title: "Mesh Panel Active Joggers",
    price: "₹ 1987",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bLMQ8PJF1hdRJsjfddLQ5tLW",
    company: "cultsport",
    title: "Contrast Detail Active Joggers",
    price: "₹ 2099",
    strikethrough: "₹ 2799",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/g7MKPbH26Baj3HXm6cv85THa",
    company: "cultsport",
    title: "Flexoft Men's Solid Joggers",
    price: "₹ 1349",
    strikethrough: "₹ 1799",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/f93WhaYvrUE7HRHi8tpAqZPE",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1559",
    strikethrough: "₹ 2599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZQKgzK6q6L48rM9ugoGkJiS3",
    company: "cultsport",
    title: "Comfort Solid Joggers",
    price: "₹ 1367",
    strikethrough: "₹ 1899",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/17MGxfHocsTRpkdiSQ1R2o4F",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iLJVwsxK3u3MBYDsyixrEBrR",
    company: "cultsport",
    title: "FlashRun Men's Trackpants with Reflective Details",
    price: "₹ 1439",
    strikethrough: "₹ 1999",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nqMiqjLvfec6yrjqRmyvx1i7",
    company: "cultsport",
    title: "Men's Classic Workout Joggers",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/azfawn8QKkFrrnmEdyYMmeBZ",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DyZfNpLyBJmr1PJ1z1JVBLye",
    company: "cultsport",
    title: "Vitals Panel Sports Joggers",
    price: "₹ 1439",
    strikethrough: "₹ 1999",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NREJhJYRcqjEGsFp3WecBbvV",
    company: "cultsport",
    title: "FlashRun Reflective Men's Running Trackpants",
    price: "₹ 1655",
    strikethrough: "₹ 2299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/F94GAk78vTJHPExCRwtJeMgJ",
    company: "cultsport",
    title: "Supersoft Yoga Pants",
    price: "₹ 1439",
    strikethrough: "₹ 1999",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/o7vR86d5UdzkvVRPJD6v29re",
    company: "cultsport",
    title: "Supersoft Yoga Pants",
    price: "₹ 1511",
    strikethrough: "₹ 2099",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/BDYfA5jVxAqqLSXPfjEspvMi",
    company: "cultsport",
    title: "Neon Highlight Joggers",
    price: "₹ 1871",
    strikethrough: "₹ 2599",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NAQ5Yfg8VijxuEgwAfWhWNj1",
    company: "cultsport",
    title: "Printed Panel Stretch Joggers",
    price: "₹ 1799",
    strikethrough: "₹ 2499",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/wazzv4ngW1nCyaoeynh2E2oX",
    company: "cultsport",
    title: "Vitals Running Joggers",
    price: "₹ 1429",
    strikethrough: "₹ 2199",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/cM53uzaeRxjTyTGzQmYRTWxP",
    company: "cultsport",
    title: "Vitals Solid Running Joggers",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2pmhm9Ue3NHAuDoM87DTbqgo",
    company: "cultsport",
    title: "Supersoft Side Stripe Joggers",
    price: "₹ 1299",
    strikethrough: "₹ 1999",
    discount: "35% Off",
  },

  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WSxp9WkDArFMNY7G5qcHM9ZY",
    company: "cultsport",
    title: "Neon Pop Solid Joggers",
    price: "₹ 1424",
    strikethrough: "₹ 1899",
    discount: "25% Off",
  },
];

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/4b0b7326-64f9-40ee-b5c7-3ce0b16a5d30.jpg",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/ec2b66b0-7892-464f-9241-c3cc488df2a9.jpg",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/78766d97-de52-4213-84bb-642afb28f724.jpg",
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
append(joggers, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

import navbar from "/dusty-hat-6390/sports/components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

let container = document.getElementById("container");

var shorts = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/CzkwPB7mxuse6dYR66kUCpa5",
    company: "cultsport",
    title: "Signature Branding Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/89PqSo1iBXiDQBw8HAGibchX",
    company: "cultsport",
    title: "Logo Graphic Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xW4GDojSvpAgizUYvgsqhnqx",
    company: "cultsport",
    title: "Logo Graphic Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/S5ma3c419cWGgJ9mZ9uVhYgd",
    company: "cultsport",
    title: "Digital Camo Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/s8HYiVPiwnpzPqJVHUGeLcMf",
    company: "cultsport",
    title: "Neon Graphic Play Shorts",
    price: "₹ 1277",
    strikethrough: "₹ 1799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Cmwk8DAvU6x2skuP8E76bCw2",
    company: "cultsport",
    title: "Graphic Play Shorts",
    price: "₹ 1295",
    strikethrough: "₹ 1799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FsCTbJoRZ5H2HpCrRQwEN5CL",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/YyDzAcmZuCrBbE7vJruCgpjW",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GBJGn4TQf2syPCxzUJZcwacR",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/MNGngMWEsGvPeoqHzP5cUvMp",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rHbNNQ1aVGRANKPfJPpjrTqA",
    company: "cultsport",
    title: "FlashRun Reflective Signature Men's Running Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/KrnHM51cBGLNporhhyF36EPm",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TWeq6JAoKskYSSoVSjTDc5u8",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 1295",
    strikethrough: "₹ 1799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LWZh7etLaFeaaik7nn1DwRcE",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1799",
    discount: "34% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NtZ5j632dVdaADtvhvSUR4cj",
    company: "cultsport",
    title: "Brushstroke Logo Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/67B3ncc5hX2ubcVadsasaGin",
    company: "cultsport",
    title: "Signature Branding Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UuM4Pom9gNC7WDRyo63CCkP1",
    company: "cultsportone",
    title: "Active Shorts with Minimal Graphic",
    price: "₹ 719",
    strikethrough: "₹ 1199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RgNCwrDmpPuPftihfREB2Lgw",
    company: "cultsportone",
    title: "Active Shorts with Neon Graphic",
    price: "₹ 719",
    strikethrough: "₹ 1199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/dvv15oby4Wsi8MERXRR1MC66",
    company: "cultsport",
    title: "FlashRun Reflective Signature Men's Running Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/D8KLLvng8oqjSqRBpF61sdve",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TEp6h4rf4DRiHGBGsGgUDp9y",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NyJvF49Jjfr1xrRKjgW7rBQX",
    company: "cultsport",
    title: "Printed Panel Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/H33BMbJkT7FugTp2twFn9AoW",
    company: "cultsport",
    title: "Tonal Panel Active Shorts",
    price: "₹ 1419",
    strikethrough: "₹ 1999",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DzTeuT61CSpoYTqQ2HvePue8",
    company: "cultsport",
    title: "Brushstroke Logo Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/1v8hGMhgedPVCZ36bwq1tQHt",
    company: "cultsport",
    title: "Spliced Branding Active Shorts",
    price: "₹ 1499",
    strikethrough: "₹ 1999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Wv3uA2uG94vW1Ai7QzKp5sDp",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 1151",
    strikethrough: "₹ 1599",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LiUQTrPzcPjTHungTTqWnMfx",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 1295",
    strikethrough: "₹ 1799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xpCvvdPzZ78S4joB3dbUT6zS",
    company: "cultsport",
    title: "Graphic Print Shorts",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GybRAG2XdJbSBg97n2i4Xmmj",
    company: "cultsport",
    title: "Stretch Yoga Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1699",
    discount: "31% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9iydTAQy5vHENzqeayPwdKt8",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5qpKKPMS2cwdyFsLaor4Ahuu",
    company: "cultsport",
    title: "Panel Detail Workout Shorts",
    price: "₹ 1295",
    strikethrough: "₹ 1799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gNqJiTJWYEGqhcLyE4CZeosn",
    company: "cultsport",
    title: "FlashRun Reflective Signature Men's Running Shorts",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LFkSVCfdJMWk6dNfRkvaqvNQ",
    company: "cultsport",
    title: "Side Graphic Active Shorts",
    price: "₹ 1424",
    strikethrough: "₹ 1899",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/H5Gxpzb93YrAbEeLfPCBbeb8",
    company: "cultsport",
    title: "Neon Print Shorts",
    price: "₹ 1295",
    strikethrough: "₹ 1799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/P7qGC5Q6c5tdZPgNvaCgaXBd",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/sUEAciv8DL4qFun1sGTgg81g",
    company: "cultsport",
    title: "Stretch Yoga Shorts",
    price: "₹ 1299",
    strikethrough: "₹ 1999",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jnvVDFtW9osXgXAd2NAqCvRt",
    company: "cultsport",
    title: "FlashRun Reflective Signature Men's Running Shorts",
    price: "₹ 1180",
    strikethrough: "₹ 1999",
    discount: "41% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QPrzrQKtU6Vj69ancCuzRoMQ",
    company: "cultsport",
    title: "Solid Workout Shorts",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8r7M7xVBDXzHYJJNZXLSMC8r",
    company: "cultsport",
    title: "Workout Shorts",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
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
append(shorts, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/8ea6a013-ae9a-4bdc-a072-14fb3d749118.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/10eca9e9-fe81-4729-ad64-ac76b18302b7.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b6756d5a-3fc2-4465-b559-21ee7e93c789.png",
  },
];

function slideshow(slideshowArr) {
  let counter = 1;
  let container = document.getElementById("slideshow");
  let img = document.createElement("img");
  img.src = slideshowArr[0].img;
  setInterval(() => {
    img.src = slideshowArr[counter].img;
    counter++;
    if (counter == slideshowArr.length) {
      counter = 0;
    }
  }, 4000);

  container.append(img);
}

slideshow(slideshowArr);

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

var bestsellers = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SDgpHbPyumHJkqeM5ehAh6Gh",
    company: "fitkit",
    title: "FITKIT 10K 2.5HP DC Motorized Treadmill",
    price: "₹ 24199",
    strikethrough: "₹ 69999",
    discount: "65% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/B4K4rku74fqHCaWpgEV14uH1",
    company: "fitkit",
    title: "FT200M 4.5HP DC Motorized Treadmill",
    price: "₹ 34999",
    strikethrough: "₹ 80000",
    discount: "56% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FsezbKx6Tyj3DAXyHa7bL6hu",
    company: "fitkit",
    title: "FT200S 4.5HP DC Motorized Treadmill",
    price: "₹ 32999",
    strikethrough: "₹ 75000",
    discount: "56% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AqGDxJejHHHFrpVo46VHz4hD",
    company: "fitkit",
    title: "FT100M, 3.25HP DC Motorized Treadmill",
    price: "₹ 27999",
    strikethrough: "₹ 55000",
    discount: "49% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/axzAx3U7PfQZSx8N6yTbtwBa",
    company: "rpm fitness",
    title: "RPM 10K 2.5HP DC Motorized Treadmill",
    price: "₹ 30199",
    strikethrough: "₹ 70999",
    discount: "57% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/s6PK4YzbgEndEtng22EyRZSk",
    company: "fitkit",
    title: "FT100S, 3.25HP DC Motorized Treadmill",
    price: "₹ 26699",
    strikethrough: "₹ 50000",
    discount: "46% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/L5fKq5BFJGzsMrSuqDNnqqWy",
    company: "cultsport",
    title: "Smartrow c1: Smart Bluetooth enabled Rowing Machine",
    price: "₹ 39900",
    strikethrough: "₹ 99900",
    discount: "60% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GpeKVjiXj2nnH9eafrutHxfm",
    company: "cultsport",
    title: "Smartrun c1: Bluetooth enabled treadmill with 6-level incline",
    price: "₹ 34999",
    strikethrough: "₹ 68999",
    discount: "49% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yHz1nfjmiafpYRHeTMiBfB9A",
    company: "cultsport",
    title:
      "Smartrun c2: Bluetooth enabled treadmill with 15-level auto incline",
    price: "₹ 39999",
    strikethrough: "₹ 81599",
    discount: "50% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nTvMdcZi5B2MzrXZJicv7acr",
    company: "cultsport",
    title:
      "Smartbike c2: Bluetooth enabled spin bike with stepless magnetic resistance",
    price: "₹ 24999",
    strikethrough: "₹ 44899",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vX1Vgko9H9n3Nn3rdyQnNkrb",
    company: "cultsport",
    title:
      "Smartbike c1: Bluetooth enabled spin bike with 8-level magnetic resistance",
    price: "₹ 22999",
    strikethrough: "₹ 40999",
    discount: "43% Off",
  },

  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vX1Vgko9H9n3Nn3rdyQnNkrb",
    company: "cultsport",
    title:
      "Smartbike c1: Bluetooth enabled spin bike with 8-level magnetic resistance",
    price: "₹ 22999",
    strikethrough: "₹ 40999",
    discount: "43% Off",
  },
];

var just = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2dioFsRcvQ8uu43WTe8zRqzc",
    company: "cultsport",
    title: "Ombre Yoga Tights",
    price: "₹ 3699",
    strikethrough: "",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/12Uc17w8J6Mx6xPrySbZjkXh",
    company: "cultsport",
    title: "Solid Yoga Tights",
    price: "₹ 2999",
    strikethrough: "",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vtjMKjpCWzmz65m3wShyxYfC",
    company: "cultsport",
    title: "Wave Print Yoga Tights",
    price: "₹ 3199",
    strikethrough: "",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6QVK9RuqbhYkGFm3HqGgikrh",
    company: "cultsport",
    title: "Marble Print Yoga Tights",
    price: "₹ 3199",
    strikethrough: "",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bbwg4DEy6qHsiBEdhp4tBkh5",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kste6ACBrxjHLdVfBAUhKhzb",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HhK9rukqfQC3X5PC1bV93xTf",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9Sj7jZyVrQkawfHuSxk5KRGB",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "",
    discount: "",
  },
];

var treadmills = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SDgpHbPyumHJkqeM5ehAh6Gh",
    company: "fitkit",
    title: "FITKIT 10K 2.5HP DC Motorized Treadmill",
    price: "₹ 24199",
    strikethrough: "₹ 69999",
    discount: "65% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/B4K4rku74fqHCaWpgEV14uH1",
    company: "fitkit",
    title: "FT200M 4.5HP DC Motorized Treadmill",
    price: "₹ 34999",
    strikethrough: "₹ 80000",
    discount: "56% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FsezbKx6Tyj3DAXyHa7bL6hu",
    company: "fitkit",
    title: "FT200S 4.5HP DC Motorized Treadmill",
    price: "₹ 32999",
    strikethrough: "₹ 75000",
    discount: "56% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AqGDxJejHHHFrpVo46VHz4hD",
    company: "fitkit",
    title: "FT100M, 3.25HP DC Motorized Treadmill",
    price: "₹ 27999",
    strikethrough: "₹ 55000",
    discount: "49% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/axzAx3U7PfQZSx8N6yTbtwBa",
    company: "rpm fitness",
    title: "RPM 10K 2.5HP DC Motorized Treadmill",
    price: "₹ 30199",
    strikethrough: "₹ 70999",
    discount: "57% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/s6PK4YzbgEndEtng22EyRZSk",
    company: "fitkit",
    title: "FT100S, 3.25HP DC Motorized Treadmill",
    price: "₹ 26699",
    strikethrough: "₹ 50000",
    discount: "46% Off",
  },

  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GpeKVjiXj2nnH9eafrutHxfm",
    company: "cultsport",
    title: "Smartrun c1: Bluetooth enabled treadmill with 6-level incline",
    price: "₹ 34999",
    strikethrough: "₹ 68999",
    discount: "49% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yHz1nfjmiafpYRHeTMiBfB9A",
    company: "cultsport",
    title:
      "Smartrun c2: Bluetooth enabled treadmill with 15-level auto incline",
    price: "₹ 39999",
    strikethrough: "₹ 81599",
    discount: "50% Off",
  },
];

var bikes = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nTvMdcZi5B2MzrXZJicv7acr",
    company: "cultsport",
    title:
      "Smartbike c2: Bluetooth enabled spin bike with stepless magnetic resistance",
    price: "₹ 24999",
    strikethrough: "₹ 44899",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vX1Vgko9H9n3Nn3rdyQnNkrb",
    company: "cultsport",
    title:
      "Smartbike c1: Bluetooth enabled spin bike with 8-level magnetic resistance",
    price: "₹ 22999",
    strikethrough: "₹ 40999",
    discount: "43% Off",
  },

  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vX1Vgko9H9n3Nn3rdyQnNkrb",
    company: "cultsport",
    styleprefix1xgnd8t:
      "Smartbike c1: Bluetooth enabled spin bike with 8-level magnetic resistance",
    price: "₹ 22999",
    strikethrough: "₹ 40999",
    discount: "43% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nTvMdcZi5B2MzrXZJicv7acr",
    company: "cultsport",
    styleprefix1xgnd8t:
      "Smartbike c2: Bluetooth enabled spin bike with stepless magnetic resistance",
    price: "₹ 24999",
    strikethrough: "₹ 44899",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/J4NyobsjLcF5DuYvTdeWXkTr",
    company: "onefitplus",
    styleprefix1xgnd8t: "OFP-1000, 8 Level Magnetic Resistance Spin Bike",
    price: "₹ 16999",
    strikethrough: "₹ 39999",
    discount: "57% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kTssBkQouVdBHn446kZPn5bG",
    company: "cultsport",
    styleprefix1xgnd8t: 'Smartbike x1 with 22" HD touchscreen',
    price: "₹ 47000",
    strikethrough: "₹ 119900",
    discount: "60% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/x4H5oZvc2DVoVQ7QzPeF38Ww",
    company: "onefitplus",
    styleprefix1xgnd8t: "OFP-M1, 100 Level Magnetic Resistance Spin Bike",
    price: "₹ 20999",
    strikethrough: "₹ 59999",
    discount: "65% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8G5NRKvEPmzzyD4UEJ1chSDa",
    company: "rpm fitness",
    styleprefix1xgnd8t:
      "RPMStamina with Free Installation Upright Stationary Exercise Bike",
    price: "₹ 6699",
    strikethrough: "₹ 14990",
    discount: "55% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gPsDWqBnzXgt7HCdS6DVXNEz",
    company: "onefitplus",
    styleprefix1xgnd8t:
      "OFP-1001 Static Handle with Backrest Upright Stationary Exercise Bike",
    price: "₹ 6699",
    strikethrough: "₹ 12000",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gTJm7wRbeN3ArkvMhRyVTmH4",
    company: "onefitplus",
    styleprefix1xgnd8t:
      "OFP-1003  Moving Handle with Backrest Upright Stationary Exercise Bike",
    price: "₹ 6799",
    strikethrough: "₹ 12000",
    discount: "43% Off",
  },
];

let bestcont = document.getElementById("bestsellers_container");
let jlcont = document.getElementById("jl_container");
let treadcont = document.getElementById("tread_container");
let bikecont = document.getElementById("bike_container");

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

append(bestsellers, bestcont);
append(just, jlcont);
append(treadmills, treadcont);
append(bikes, bikecont);

var left1 = document.getElementById("left1");
var right1 = document.getElementById("right1");
var bestdivs = document.querySelectorAll("#bestsellers_container>div");
var l = 0;
right1.onclick = () => {
  l++;
  for (i of bestdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1440px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }

    if (l > 3) {
      l = 3;
    }
  }
};

left1.onclick = () => {
  l--;
  for (i of bestdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1440px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

var left2 = document.getElementById("left2");
var right2 = document.getElementById("right2");
var justdivs = document.querySelectorAll("#jl_container>div");
var l = 0;
right2.onclick = () => {
  l++;
  for (i of justdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1440px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left2.onclick = () => {
  l--;
  for (i of justdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1440px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

var left3 = document.getElementById("left3");
var right3 = document.getElementById("right3");
var treaddivs = document.querySelectorAll("#tread_container>div");
var l = 0;
right3.onclick = () => {
  l++;
  for (i of treaddivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1440px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left3.onclick = () => {
  l--;
  for (i of treaddivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1440px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

var left4 = document.getElementById("left4");
var right4 = document.getElementById("right4");
var spindivs = document.querySelectorAll("#bike_container>div");
var l = 0;
right4.onclick = () => {
  l++;
  for (i of spindivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1440px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left4.onclick = () => {
  l--;
  for (i of spindivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1440px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

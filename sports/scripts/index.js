import navbar from "/dusty-hat-6390/sports/components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1000,ar_2880:596/dpr_2/image/vm/b49e8cf9-307f-4841-aa0f-be6081294a30.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1000,ar_2880:596/dpr_2/image/vm/8ea6a013-ae9a-4bdc-a072-14fb3d749118.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1000,ar_2880:596/dpr_2/image/vm/10eca9e9-fe81-4729-ad64-ac76b18302b7.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1000,ar_2880:596/dpr_2/image/vm/b6756d5a-3fc2-4465-b559-21ee7e93c789.png",
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
    title:
      "Smartbike c1: Bluetooth enabled spin bike with 8-level magnetic resistance",
    price: "₹ 22999",
    strikethrough: "₹ 40999",
    discount: "43% Off",
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
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/J4NyobsjLcF5DuYvTdeWXkTr",
    company: "onefitplus",
    title: "OFP-1000, 8 Level Magnetic Resistance Spin Bike",
    price: "₹ 16999",
    strikethrough: "₹ 39999",
    discount: "57% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kTssBkQouVdBHn446kZPn5bG",
    company: "cultsport",
    title: 'Smartbike x1 with 22" HD touchscreen',
    price: "₹ 47000",
    strikethrough: "₹ 119900",
    discount: "60% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/x4H5oZvc2DVoVQ7QzPeF38Ww",
    company: "onefitplus",
    title: "OFP-M1, 100 Level Magnetic Resistance Spin Bike",
    price: "₹ 20999",
    strikethrough: "₹ 59999",
    discount: "65% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8G5NRKvEPmzzyD4UEJ1chSDa",
    company: "rpm fitness",
    title: "RPMStamina with Free Installation Upright Stationary Exercise Bike",
    price: "₹ 6699",
    strikethrough: "₹ 14990",
    discount: "55% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gPsDWqBnzXgt7HCdS6DVXNEz",
    company: "onefitplus",
    title:
      "OFP-1001 Static Handle with Backrest Upright Stationary Exercise Bike",
    price: "₹ 6699",
    strikethrough: "₹ 10000",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gTJm7wRbeN3ArkvMhRyVTmH4",
    company: "onefitplus",
    title:
      "OFP-1003  Moving Handle with Backrest Upright Stationary Exercise Bike",
    price: "₹ 6799",
    strikethrough: "₹ 10000",
    discount: "43% Off",
  },
];

var cycles = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZJBYsrvTZKUc9QzYK6fh4f8n",
    company: "cultsport",
    title: 'Rimo 27.5" 21-speed steel MTB (Shimano gears)',
    price: "₹ 15599",
    strikethrough: "₹ 39999",
    discount: "61% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nwziy12UVSHqbS8LGR5cnzqc",
    company: "cultsport",
    title: 'Bolan 27.5" 21-speed steel MTB (Shimano gears)',
    price: "₹ 15599",
    strikethrough: "₹ 39999",
    discount: "61% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iJGstmndhFJaAfywnVLaEppW",
    company: "cultsport",
    title: 'Neel 26" 21-speed alloy MTB (Shimano gears)',
    price: "₹ 16699",
    strikethrough: "₹ 43999",
    discount: "62% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vaKa33MqJj9CsyFCKLma9sH7",
    company: "cultsport",
    title: 'Yoma 27.5" 21-speed alloy MTB (Shimano gears)',
    price: "₹ 17099",
    strikethrough: "₹ 45999",
    discount: "62% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4Jwdn1u2RcKw9xYBM6cZtNBD",
    company: "urban terrain",
    title:
      "UT3003A26, Black, Alloy MTB 26 T Shimano Geared Mountain Cycle (21 Gear)",
    price: "₹ 13499",
    strikethrough: "₹ 43990",
    discount: "69% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qixE88WmFBP5o3tRRdQ6tZC9",
    company: "urban terrain",
    title:
      "UT3002A27.5, Green, Alloy MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
    price: "₹ 13999",
    strikethrough: "₹ 47990",
    discount: "70% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Thbifm3mmLLx3pWffTY8vTMV",
    company: "urban terrain",
    title:
      "UT2000, Red, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
    price: "₹ 12999",
    strikethrough: "₹ 49990",
    discount: "73% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gPwaekWjEnjBg1q3thWowfjV",
    company: "urban terrain",
    title: "UT5000S29, Green, Steel MTB 29 T Shimano Geared Mountain Cycle",
    price: "₹ 13999",
    strikethrough: "₹ 49999",
    discount: "72% Off",
  },
];

var accessories = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rqFrmhQat5ajC62f7rKCPU6m",
    company: "cultsport",
    title: "Signature Boxing Hand Wraps",
    price: "₹ 269",
    strikethrough: "₹ 599",
    discount: "55% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TtKkztyhA84pRRQb6SstMJSP",
    company: "cultsport",
    title: "Yoga Strap",
    price: "₹ 353",
    strikethrough: "₹ 599",
    discount: "41% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TCnGF1WquCn1iV4VyMbRK6q7",
    company: "cultsport",
    title: "EVA Foam Yoga Block",
    price: "₹ 386",
    strikethrough: "₹ 899",
    discount: "57% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/dYff3qUPgwn5y93aqH8XPoem",
    company: "cultsport",
    title: "Eco-Friendly Cork Yoga Block",
    price: "₹ 635",
    strikethrough: "₹ 1199",
    discount: "47% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FD7LBsHMX74CdagPgh5Y6FBW",
    company: "cultsport",
    title: "Dark Grey Yoga Mat",
    price: "₹ 1495",
    strikethrough: "₹ 2199",
    discount: "32% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DThmyLcUufobSLiE2QPFoddh",
    company: "cultsport",
    title: "2 in 1 Workout/Yoga Rubberized Cork (Eco Friendly) Mat (3mm)",
    price: "₹ 2879",
    strikethrough: "₹ 2999",
    discount: "4% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VLSrJS6rNY2wmNgdjcT7Rz9J",
    company: "cultsport",
    title: "Rubber Workout Mat",
    price: "₹ 4913",
    strikethrough: "₹ 6299",
    discount: "22% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rKzWygyVzKcbGdF3vUj1mR6m",
    company: "cultsport",
    title:
      "2 in 1 Workout/Yoga Cork (Eco Friendly) Mat (3mm) With Stance Marking",
    price: "₹ 2909",
    strikethrough: "₹ 2999",
    discount: "3% Off",
  },
];

var topwear = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mU1dZAHqT6pjRn55ZWYvq6Mf",
    company: "cultsport",
    title: "FormFit High Impact Ivy Sports Bra",
    price: "₹ 1799",
    strikethrough: "₹ 2499",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8vVR6uLBQSmX2vMsh6hfkXT2",
    company: "cultsport",
    title: "Vitals Running T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/anBREptvxVED3KMUSXcPpTen",
    company: "cultsport",
    title: "FormFit High Impact Ivy Sports Bra",
    price: "₹ 1799",
    strikethrough: "₹ 2499",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jsnGp3tbniZqKagkt9g9tgRz",
    company: "cultsport",
    title: "FormFit Training Sports Bra",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ACnD9W49rmX4tmtoYyvQaVRF",
    company: "cultsport",
    title: "FormFit Medium Impact Zoe Sports Bra",
    price: "₹ 1439",
    strikethrough: "₹ 1999",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xfyTUvSwRaKGThjzqH54yNHB",
    company: "cultsport",
    title: "Cleo Slip-on Sports Bra",
    price: "₹ 1439",
    strikethrough: "₹ 1999",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LEE997UW5WoFdSdjAzdrD2ZT",
    company: "cultsport",
    title: "Seamless Diane Medium Impact Sports Bra",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
  },
  // {
  //   Image: "",
  //   company: "cultsport",
  //   title: "Seamless Liz Medium Impact Sports Bra",
  //   price: "₹ 1180",
  //   strikethrough: "₹ 1799",
  //   discount: "34% Off",
  // },
];

var bottomwear = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SZqR84jvT6wbiardp2g2jfA5",
    company: "cultsport",
    title: "AbsoluteFit Women's Floral Print Leggings",
    price: "₹ 1655",
    strikethrough: "₹ 2299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/F6pDyqk8axpX6S6Eket6kTFs",
    company: "cultsport",
    title: "AbsoluteFit Printed Tights",
    price: "₹ 1494",
    strikethrough: "₹ 2299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iK5BVWbaQ6KoEt1hwBUMuCdq",
    company: "cultsport",
    title: "Halftone Print Active Shorts",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jLu5hJW6W3nu9MQ7PVaXQNFR",
    company: "cultsport",
    title: "Absolute Fit Solid Tights",
    price: "₹ 1874",
    strikethrough: "₹ 2499",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/t5VpnpDQrsKVPHRUYgAiTgFL",
    company: "cultsport",
    title: "Absolute Fit Solid Tights",
    price: "₹ 1874",
    strikethrough: "₹ 2499",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/htjEJCau5FfPzq6orYWXz1vb",
    company: "cultsport",
    title: "Halftone Logo Active Shorts",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
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
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xnVH5ZjMvv51Dxc7i8z7w3Gt",
    company: "cultsport",
    title: "Absolute Fit Solid Tights",
    price: "₹ 1874",
    strikethrough: "₹ 2499",
    discount: "25% Off",
  },
];

var health = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DHjJcDyA9cmpAJqFt954L5kB",
    company: "cultsport",
    title: "Cultsport Liquid L-Carnitine, 450ml",
    price: "₹ 999",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DcaecB4PJ3kJKtDL18m4gzbA",
    company: "cultsport",
    title: "Cultsport Raw Whey 80%, 908g",
    price: "₹ 1899",
    strikethrough: "₹ 2699",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZCAj47EBjCcrTqoJwp38Mvr5",
    company: "cultsport",
    title: "Cultsport Elite 100% Whey, 1 Kg",
    price: "₹ 2599",
    strikethrough: "₹ 3499",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/96T9f13kUMuksgadqCbZC1Ys",
    company: "azani",
    title: "Azani Calcium & Vitamin D Bone Support Gummies for Adults & Kids",
    price: "₹ 299",
    strikethrough: "₹ 549",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7NDUqVUrKSMkeULoXQSptLs6",
    company: "azani",
    title:
      "Azani Plant Mass Gainer 1kg | 1083 Kcal, 45g Vegan Protein, 225g Carbohydrates, 0.5g Chlorella, 0.3g Ashwagandha",
    price: "₹ 799",
    strikethrough: "₹ 1000",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6avFYgdSxkj3AKJiS6nbXLU1",
    company: "azani",
    title:
      "Azani Biotin Hair Gummies with Zinc, Iodine, Vitamin A, B, C, D & E & Folic Acid | Hair Vitamins for Hair Growth, 30 Gummies",
    price: "₹ 379",
    strikethrough: "₹ 599",
    discount: "36% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4gUCtbuHsPaUtCem2uqZZDUZ",
    company: "azani",
    title:
      "Azani Pure & Ultra-Strong Omega 3 Fish Oil | Omega 3(1000mg)+Omega 6,7 & 9 + Vitamin D3, 60 Capsules",
    price: "₹ 499",
    strikethrough: "₹ 999",
    discount: "50% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/dEm3BbpXDbAjwLgmAHy31goB",
    company: "azani",
    title:
      "Azani Muscle Fuel | Ashwagandha, Shatavari| Muscle Building, Stamina, Strength, 30 Capsules",
    price: "₹ 279",
    strikethrough: "₹ 399",
    discount: "30% Off",
  },
];

let bestcont = document.getElementById("bestsellers_container");
let jlcont = document.getElementById("jl_container");
let treadcont = document.getElementById("tread_container");
let bikecont = document.getElementById("bike_container");
let cyclecont = document.getElementById("cycle_container");
let accesscont = document.getElementById("access_container");
let topcont = document.getElementById("top_container");
let bottomcont = document.getElementById("bottom_container");
let healthcont = document.getElementById("health_container");

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
append(cycles, cyclecont);
append(accessories, accesscont);
append(topwear, topcont);
append(bottomwear, bottomcont);
append(health, healthcont);

var left1 = document.getElementById("left1");
var right1 = document.getElementById("right1");
var bestdivs = document.querySelectorAll("#bestsellers_container>div");
var l = 0;
right1.onclick = () => {
  l++;
  for (var i of bestdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left1.onclick = () => {
  l--;
  for (var i of bestdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
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
  for (var i of justdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
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
  for (var i of justdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
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
  for (var i of treaddivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
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
  for (var i of treaddivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
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
  for (var i of spindivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
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
  for (var i of spindivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

var left5 = document.getElementById("left5");
var right5 = document.getElementById("right5");
var cycledivs = document.querySelectorAll("#cycle_container>div");
var l = 0;
right5.onclick = () => {
  l++;
  for (var i of cycledivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left5.onclick = () => {
  l--;
  for (var i of cycledivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

var left6 = document.getElementById("left6");
var right6 = document.getElementById("right6");
var accessdivs = document.querySelectorAll("#access_container>div");
var l = 0;
right6.onclick = () => {
  l++;
  for (var i of accessdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left6.onclick = () => {
  l--;
  for (var i of accessdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

var left7 = document.getElementById("left7");
var right7 = document.getElementById("right7");
var topdivs = document.querySelectorAll("#top_container>div");
l = 0;
right7.onclick = () => {
  l++;
  for (var i of topdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left7.onclick = () => {
  l--;
  for (var i of topdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

var left8 = document.getElementById("left8");
var right8 = document.getElementById("right8");
var bottomdivs = document.querySelectorAll("#bottom_container>div");
l = 0;
right8.onclick = () => {
  l++;
  for (var i of bottomdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left8.onclick = () => {
  l--;
  for (var i of bottomdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

var left9 = document.getElementById("left9");
var right9 = document.getElementById("right9");
var healthdivs = document.querySelectorAll("#health_container>div");
l = 0;
right9.onclick = () => {
  l++;
  for (var i of healthdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }
    // if (l == 3) {
    //   i.style.left = "-2220px";
    // }

    if (l > 2) {
      l = 2;
    }
  }
};

left9.onclick = () => {
  l--;
  for (var i of healthdivs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-550px";
    }
    if (l == 2) {
      i.style.left = "-1100px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

let accBtn = document.getElementsByClassName("fa-angle-down");
let down1 = document.getElementById("down1");
// console.log(accBtn);
accBtn[0].onclick = () => {
  document.getElementById("acc_cont1").style.display = "inherit";
};

accBtn[1].onclick = () => {
  document.getElementById("acc_cont2").style.display = "inherit";
};

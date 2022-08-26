import navbar from "/dusty-hat-6390/sports/components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/a26050fc-5b28-44ff-a5ee-7cb486630b8a.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/559b9ebb-dfd4-4acb-9441-ee5be4578cc2.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/b2c6f0ee-80fa-49f2-a87f-00ce6e73884d.png",
  },
];

var tights = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SZqR84jvT6wbiardp2g2jfA5",
    company: "cultsport",
    title: "AbsoluteFit Women's Floral Print Leggings",
    price: "₹ 1540",
    strikethrough: "₹ 2299",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2dioFsRcvQ8uu43WTe8zRqzc",
    company: "cultsport",
    title: "Ombre Yoga Tights",
    price: "₹ 3699",
    strikethrough: "₹ 3699",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/F6pDyqk8axpX6S6Eket6kTFs",
    company: "cultsport",
    title: "AbsoluteFit Printed Tights",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jLu5hJW6W3nu9MQ7PVaXQNFR",
    company: "cultsport",
    title: "Absolute Fit Solid Tights",
    price: "₹ 1749",
    strikethrough: "₹ 2499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/t5VpnpDQrsKVPHRUYgAiTgFL",
    company: "cultsport",
    title: "Absolute Fit Solid Tights",
    price: "₹ 1749",
    strikethrough: "₹ 2499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xnVH5ZjMvv51Dxc7i8z7w3Gt",
    company: "cultsport",
    title: "Absolute Fit Solid Tights",
    price: "₹ 1749",
    strikethrough: "₹ 2499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FXs8f55yfWHLQrs5JokUXPfp",
    company: "cultsport",
    title: "AbsoluteFit Printed Tights",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QsooiXHKUycwsG88BZvho57Z",
    company: "cultsport",
    title: "Do It All Ombre Prism Tights",
    price: "₹ 2589",
    strikethrough: "₹ 3699",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/12Uc17w8J6Mx6xPrySbZjkXh",
    company: "cultsport",
    title: "Solid Yoga Tights",
    price: "₹ 2999",
    strikethrough: "₹ 2999",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vtjMKjpCWzmz65m3wShyxYfC",
    company: "cultsport",
    title: "Wave Print Yoga Tights",
    price: "₹ 3199",
    strikethrough: "₹ 3199",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5Uyc3CSc7rwLwhgdwMckvYUE",
    company: "cultsport",
    title: "AbsoluteFit Neon Pop Leggings with side pockets",
    price: "₹ 1607",
    strikethrough: "₹ 2399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/pTbBfD6mNcBnXAr3uAqqLnwn",
    company: "cultsport",
    title: "Knockout Compression Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/czijy22f1WZd4ZJq6D2rmk8B",
    company: "cultsport",
    title: "AbsoluteFit Women's Prism Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qo2qrBWRUZswWGJoDEUg1DcK",
    company: "cultsport",
    title: "AbsoluteFit Women's Camo Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yE4nsTuB1dTLgHpeTZgccdaH",
    company: "cultsport",
    title: "AbsoluteFit Women's Marble Print Leggings",
    price: "₹ 1540",
    strikethrough: "₹ 2299",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kaQEZ2kfFPwCcqHwuLApFYnV",
    company: "cultsport",
    title: "AbsoluteFit Women's Abstract Print Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/j8z8xG1P7A7CwSu2Vuau3Y22",
    company: "cultsport",
    title: "Women's Solid Workout Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/1TbxQgv2XAxazQn9uuvsPkLb",
    company: "cultsport",
    title: "Women's Adjustable Training Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jSXfjFUqStcvG85iw6JX7yw2",
    company: "cultsport",
    title: "FlashRun AbsoluteFit Solid Leggings",
    price: "₹ 1689",
    strikethrough: "₹ 2599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5BxtouTjzGtZquhA4Cv6i8wv",
    company: "cultsport",
    title: "Contrast Side Panel Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2MLEBsc1JETdsm6KQNEjbJ45",
    company: "cultsport",
    title: "Mesh Panel Solid Leggings",
    price: "₹ 1741",
    strikethrough: "₹ 2599",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vW6D4FW1Z2k4Wz47bMrLuBaj",
    company: "cultsport",
    title: "Mesh Panel High Waist Tights",
    price: "₹ 1808",
    strikethrough: "₹ 2699",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/MmjWL9TK8ruqgFqPMpfUeCEw",
    company: "cultsport",
    title: "Tonal Print High Waist Tights",
    price: "₹ 1704",
    strikethrough: "₹ 3099",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/whqLrtzJTRtgPEDZLc7u41Gk",
    company: "cultsport",
    title: "AbsoluteFit Solid Tights",
    price: "₹ 1674",
    strikethrough: "₹ 2499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/aJ1bJdpRUTR4kLVUazHLkFCq",
    company: "cultsport",
    title: "AbsoluteFit Mesh Tights",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QAaddgc8ZHPbG5WjTrn6APPm",
    company: "cultsport",
    title: "AbsoluteFit Solid Tights",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HatNb7mmputnndvudERar7Hb",
    company: "cultsport",
    title: "AbsoluteFit Camo Tights",
    price: "₹ 1540",
    strikethrough: "₹ 2299",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Uyv5P5S81UWE89nZ4Dms5UQD",
    company: "cultsport",
    title: "Seamless Dual Tone Tights",
    price: "₹ 1319",
    strikethrough: "₹ 2199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2qV69FepWJR8F8WPwUxdfYP9",
    company: "cultsport",
    title: "Solid Performance Tights",
    price: "₹ 1749",
    strikethrough: "₹ 2499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RpZNCNgzbT81rH84hRCLum4H",
    company: "cultsport",
    title: "Do It All Solid Tights",
    price: "₹ 2099",
    strikethrough: "₹ 2999",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/BwqUQLdV4WxFghvERDJXUxwx",
    company: "cultsport",
    title: "Do It All Ombre Streaks Tights",
    price: "₹ 2589",
    strikethrough: "₹ 3699",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9rqPdR3TTcyTuraQSVWHxGBf",
    company: "cultsport",
    title: "Do It All Monotone Prism Tights",
    price: "₹ 2519",
    strikethrough: "₹ 3599",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RpJ4ZJGs423qFNmwzwRFVLdL",
    company: "cultsport",
    title: "Do It All Teal Prism Tights",
    price: "₹ 2519",
    strikethrough: "₹ 3599",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6QVK9RuqbhYkGFm3HqGgikrh",
    company: "cultsport",
    title: "Marble Print Yoga Tights",
    price: "₹ 3199",
    strikethrough: "₹ 3199",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GHhnkWfSxJSmBBWJqRKNFYbL",
    company: "cultsport",
    title: "AbsoluteFit Mesh Tights",
    price: "₹ 1674",
    strikethrough: "₹ 2499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/tb3KdCHjn2b7TY63F1iJKAqj",
    company: "cultsport",
    title: "AbsoluteFit Ombre Tights",
    price: "₹ 1559",
    strikethrough: "₹ 2599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8Ah4CwS9jc2G4kDhjk1FN7Pj",
    company: "cultsport",
    title: "Seamless Jacquard Tights",
    price: "₹ 1674",
    strikethrough: "₹ 2499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZzwrRu5nWcNG1r9CxAL2yNRR",
    company: "cultsport",
    title: "AbsoluteFit Jacquard Tights",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TjyMpyactJQ3CCupaar7e23a",
    company: "cultsport",
    title: "FlashRun Absolute Fit Printed Leggings",
    price: "₹ 1808",
    strikethrough: "₹ 2699",
    discount: "33% Off",
  },
  {
    Image: "",
    company: "cultsport",
    title: "Side Mesh Panel Leggings",
    price: "₹ 1439",
    strikethrough: "₹ 2399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/oiiREqBRdBvs3fTQy6fhS6BQ",
    company: "cultsport",
    title: "Panelled Solid Leggings",
    price: "₹ 1741",
    strikethrough: "₹ 2599",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xU9ciukjion6Ym1dDuU6WBsv",
    company: "cultsport",
    title: "High waist Leggings",
    price: "₹ 1619",
    strikethrough: "₹ 2699",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UBV4z4DgJbNGizChFc6v2mMq",
    company: "cultsport",
    title: "AbsoluteFit Women's Workout Leggings",
    price: "₹ 1272",
    strikethrough: "₹ 1899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/YBvHSmaz6FKM3r8kMepiy3Wz",
    company: "cultsport",
    title: "AbsoluteFit Women's Workout Leggings",
    price: "₹ 999",
    strikethrough: "₹ 1599",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AwE6RVHQ72zYhWjg7fn8h67W",
    company: "cultsport",
    title: "AbsoluteFit Women's Workout Leggings",
    price: "₹ 1272",
    strikethrough: "₹ 1899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ut8NogeZ47zDxkzU7v9CayjL",
    company: "cultsport",
    title: "AbsoluteFit Women's Workout Leggings",
    price: "₹ 999",
    strikethrough: "₹ 1599",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/1CMmPE77MMziuuta5vXssVMc",
    company: "cultsport",
    title: "Tonal Print High Waist Tights",
    price: "₹ 1741",
    strikethrough: "₹ 2599",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HeMEwJffKDZa7W2g2aYRf8wc",
    company: "cultsport",
    title: "Ombre Side Stripe High Waist Tights",
    price: "₹ 1808",
    strikethrough: "₹ 2699",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8Q9WUK2ZAP4n4XeqnkRXwksm",
    company: "cultsport",
    title: "Mesh Panel High Waist Tights",
    price: "₹ 1754",
    strikethrough: "₹ 2699",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3hrPYsDWdcLvByZc4pUEi3jB",
    company: "cultsport",
    title: "Brushstroke Print Tights",
    price: "₹ 1889",
    strikethrough: "₹ 2699",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZNYLtvVgLSypJwENG4i6mHVR",
    company: "cultsport",
    title: "Solid Performance Tights",
    price: "₹ 1749",
    strikethrough: "₹ 2499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8ygGMhT4e7vJQ2yL2jg3rhYd",
    company: "cultsport",
    title: "Styro Print Performance Tights",
    price: "₹ 2309",
    strikethrough: "₹ 3299",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XJ9x3zqCBXGsJ7FfCJS3QMQG",
    company: "cultsport",
    title: "Mesh Panel Performance Tights",
    price: "₹ 2029",
    strikethrough: "₹ 2899",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bQoGY6nqK8yqwBFE1ePjiFQJ",
    company: "cultsport",
    title: "Ombre Print Performance Tights",
    price: "₹ 2309",
    strikethrough: "₹ 3299",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9GpbxJwC5jUG2BKLiSyh4XZt",
    company: "cultsport",
    title: "Do It All Solid Tights",
    price: "₹ 2099",
    strikethrough: "₹ 2999",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/A1xJ7ry7jy7wxJ9ZHWT9jyuh",
    company: "cultsport",
    title: "Do It All Logo Print Tights",
    price: "₹ 2309",
    strikethrough: "₹ 3299",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/K1MhbaBPgJiEYfsHdZfbqzQf",
    company: "cultsport",
    title: "Do It All Placement Print Tights",
    price: "₹ 2309",
    strikethrough: "₹ 3299",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HrZTNYC9HUnSE1a52KUXRBRC",
    company: "cultsport",
    title: "Do It All Placement Print Tights",
    price: "₹ 2309",
    strikethrough: "₹ 3299",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3sTprnsmVpJLKw42sJvbHXhw",
    company: "cultsport",
    title: "Do It All Placement Print Tights",
    price: "₹ 2309",
    strikethrough: "₹ 3299",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VHpZwkaEUkrnXGGmXZPp2fZg",
    company: "cultsport",
    title: "Solid Yoga Tights",
    price: "₹ 2999",
    strikethrough: "₹ 2999",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QU1ioARgg3jXoY2WMTj1uhrF",
    company: "cultsport",
    title: "Solid Yoga Tights",
    price: "₹ 2999",
    strikethrough: "₹ 2999",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/B7FiTM5k2xkhvMfiM4BMD8UC",
    company: "cultsport",
    title: "Printed Yoga Tights",
    price: "₹ 3199",
    strikethrough: "₹ 3199",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HSNPxCvzLwqphaFh11HsmsqQ",
    company: "cultsport",
    title: "Printed Yoga Tights",
    price: "₹ 3199",
    strikethrough: "₹ 3199",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/12kjTBj8SLK3vEkWwQuRyQL1",
    company: "cultsport",
    title: "Printed Yoga Tights",
    price: "₹ 3199",
    strikethrough: "₹ 3199",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gsfDN91VkxQs2zScppUWpa89",
    company: "cultsport",
    title: "Solid Yoga Tights",
    price: "₹ 3099",
    strikethrough: "₹ 3099",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/hBKMwQ3mSsfxTknCfwiTtogD",
    company: "cultsport",
    title: "Minimal Print Yoga Tights",
    price: "₹ 3299",
    strikethrough: "₹ 3299",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TxEweJ4um3jZJyfxdvewxxHX",
    company: "cultsport",
    title: "Brushstroke Print Yoga Tights",
    price: "₹ 3199",
    strikethrough: "₹ 3199",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/wq6VC4MpEuH9aF5CwAEcZHi2",
    company: "cultsport",
    title: "Knockout Compression Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/enJahn22QCrE4GPQ55RWfsap",
    company: "cultsport",
    title: "AbsoluteFit CrossLift Printed Workout Leggings",
    price: "₹ 1884",
    strikethrough: "₹ 2899",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/oUTukedFui1FodUrbyUs8yhc",
    company: "cultsport",
    title: "AbsoluteFit CrossLift Printed Workout Leggings",
    price: "₹ 1884",
    strikethrough: "₹ 2899",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jSsJ1T1UXMRHSsGJGspbaLck",
    company: "cultsport",
    title: "Women's High-Intensity Training Leggings",
    price: "₹ 1999",
    strikethrough: "₹ 2799",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2Z95hHUbSQTfcoipt4fMEa5g",
    company: "cultsport",
    title: "Women's Power Workout Leggings",
    price: "₹ 1689",
    strikethrough: "₹ 2599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jbMUao2fy5GZRj22guJNKFt7",
    company: "cultsport",
    title: "Women's Anti-Slip Gym Leggings",
    price: "₹ 1607",
    strikethrough: "₹ 2399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WvkA96H4tmboNwUTi9YLmhhq",
    company: "cultsport",
    title: "Women's Breathable Running Leggings",
    price: "₹ 1689",
    strikethrough: "₹ 2599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4aJ9T5jNV85gy4Lm2gs2Dd3Y",
    company: "cultsport",
    title: "Women's High-Intensity Workout Leggings",
    price: "₹ 2209",
    strikethrough: "₹ 3399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/zb7rQdhbZhFfWsivhSS5pGrX",
    company: "cultsport",
    title: "Women's Active Training Leggings",
    price: "₹ 2209",
    strikethrough: "₹ 3399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jz7ynmEAC1zyRryc8K19H68D",
    company: "cultsport",
    title: "AbsoluteFit Mesh Tights",
    price: "₹ 1674",
    strikethrough: "₹ 2499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/eatg1BgpuMFsXNCbXKVVhnFK",
    company: "cultsport",
    title: "Seamless Striped Tights",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },

  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Dxnu7UWa9fGvTkyVfZMH8yX7",
    company: "cultsport",
    title: "FlashRun AbsoluteFit Mesh Leggings",
    price: "₹ 1499",
    strikethrough: "₹ 2499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/o6ujJ1hNiryE6fVYSrazvBXK",
    company: "cultsport",
    title: "Colourblock Leggings",
    price: "₹ 1607",
    strikethrough: "₹ 2399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rx5Mtu8KuJmrogAUtQs26qHw",
    company: "cultsport",
    title: "Stripe Detail Leggings",
    price: "₹ 1741",
    strikethrough: "₹ 2599",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/fTgqCZp4JrX44MEbT7EeNBp9",
    company: "cultsport",
    title: "High waist Leggings",
    price: "₹ 1942",
    strikethrough: "₹ 2899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/KcxpQ2qq6jjqBSD5DCK5q2MN",
    company: "cultsport",
    title: "Seamless Curve Leggings",
    price: "₹ 1406",
    strikethrough: "₹ 2099",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8CuHAEcdFgTzN5JK8vwtwbk8",
    company: "cultsport",
    title: "Colour Blocked High Waist Tights",
    price: "₹ 1808",
    strikethrough: "₹ 2699",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HPTqZ6SsdAKyacdNithiFoDV",
    company: "cultsport",
    title: "Solid Performance Tights",
    price: "₹ 1749",
    strikethrough: "₹ 2499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jGnCDaeq22zPM83HRrxWCPzw",
    company: "cultsport",
    title: "Women's Super-Flexible Workout Leggings",
    price: "₹ 1607",
    strikethrough: "₹ 2399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HaTiwsrPrNPBceq1cTDt8iu4",
    company: "cultsport",
    title: "AbsoluteFit Solid Tights",
    price: "₹ 1674",
    strikethrough: "₹ 2499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/51Y1tTqffWFzyu52JR5rijk3",
    company: "cultsport",
    title: "AbsoluteFit Ombre Tights",
    price: "₹ 1741",
    strikethrough: "₹ 2599",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/US34pNMn7eeu7udt6fZBvotL",
    company: "cultsport",
    title: "Seamless Striped Tights",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Y4AGFC6SDcWXJtEWNV3xTFpM",
    company: "cultsport",
    title: "Seamless Striped Tights",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SQpJmJ93rUL6Bxb5G5W5ELwZ",
    company: "cultsport",
    title: "Seamless Dual Tone Tights",
    price: "₹ 1319",
    strikethrough: "₹ 2199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NzWJdAZ5g8jdBgVHsPRkRQxU",
    company: "cultsport",
    title: "AbsoluteFit Jacquard Tights",
    price: "₹ 1439",
    strikethrough: "₹ 2399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uNdFfoSPipLAYJJGUGLEATWD",
    company: "cultsport",
    title: "FlashRun AbsoluteFit Solid Leggings",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4uegpqrNAqNC8szEYiozXb49",
    company: "cultsport",
    title: "Mesh Panel Solid Leggings",
    price: "₹ 1741",
    strikethrough: "₹ 2599",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/cjdcFPAQgFo2eot5AfF2uuQH",
    company: "cultsport",
    title: "High waist Leggings",
    price: "₹ 1942",
    strikethrough: "₹ 2899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/CCaLmSsTZ36BKhZ8gHVUMLo8",
    company: "cultsport",
    title: "AbsoluteFit Women's Workout Leggings",
    price: "₹ 999",
    strikethrough: "₹ 1599",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gigcf1diBzHGnjJUrwT6zaKp",
    company: "cultsport",
    title: "Seamless Squat Proof Leggings",
    price: "₹ 1540",
    strikethrough: "₹ 2299",
    discount: "33% Off",
  },

  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jUiEuRfDfkWQFKSqvfN6tN9K",
    company: "cultsport",
    title: "Stripe Print High Waist Tights",
    price: "₹ 1942",
    strikethrough: "₹ 2899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Q7iCJU7GReeuurKWZEAAGjBS",
    company: "cultsport",
    title: "AbsoluteFit Women's Super-Stretch Workout Leggings",
    price: "₹ 1272",
    strikethrough: "₹ 1899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LixmXsssPiE88aLUYLXnLLtn",
    company: "cultsport",
    title: "AbsoluteFit Mesh Tights",
    price: "₹ 1674",
    strikethrough: "₹ 2499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mVqqZY8Eq9RuRf1Aj5mRcsXZ",
    company: "cultsport",
    title: "FlashRun AbsoluteFit Mesh Leggings",
    price: "₹ 1624",
    strikethrough: "₹ 2499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/pPFvXJCbJLg2WTNLm5Vpwwos",
    company: "cultsport",
    title: "High waist Leggings",
    price: "₹ 1741",
    strikethrough: "₹ 2599",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DtdwyjUHVEYfVXgRopRpTptp",
    company: "cultsport",
    title: "High waist Leggings",
    price: "₹ 1942",
    strikethrough: "₹ 2899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3i5SGDD4WhGvxwsgMyjXFwL5",
    company: "cultsport",
    title: "Compression Leggings",
    price: "₹ 2210",
    strikethrough: "₹ 3299",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gA3sXw2xpvGVnN2VJ3Q9My7r",
    company: "cultsport",
    title: "Seamless Jacquard Tights",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/oAdL13uTCduKsKExpfs1TwvY",
    company: "cultsport",
    title: "Mesh Panel Solid Leggings",
    price: "₹ 1439",
    strikethrough: "₹ 2399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/b6VC7s4kNgDWhEEDiMNVA111",
    company: "cultsport",
    title: "High waist Leggings",
    price: "₹ 1979",
    strikethrough: "₹ 3299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3ApY7Dqa1UGLVwsxdi1F7tXQ",
    company: "cultsport",
    title: "Seamless Contour Leggings",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
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
append(tights, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

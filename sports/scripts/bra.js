import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "/dusty-hat-6390/sports/index.html";
});

var bra = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mU1dZAHqT6pjRn55ZWYvq6Mf",
    company: "cultsport",
    title: "FormFit High Impact Ivy Sports Bra",
    price: "₹ 1674",
    strikethrough: "₹ 2499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/anBREptvxVED3KMUSXcPpTen",
    company: "cultsport",
    title: "FormFit High Impact Ivy Sports Bra",
    price: "₹ 1674",
    strikethrough: "₹ 2499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jsnGp3tbniZqKagkt9g9tgRz",
    company: "cultsport",
    title: "FormFit Training Sports Bra",
    price: "₹ 1180",
    strikethrough: "₹ 2099",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XwfuJdgJChgfkeyUQeueZH2f",
    company: "cultsport",
    title: "FormFit Training Sports Bra",
    price: "₹ 1339",
    strikethrough: "₹ 1999",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uTWXj21WfZvApsgzx6m92BTg",
    company: "cultsport",
    title: "Seamless Rae Sports Bra",
    price: "₹ 1209",
    strikethrough: "₹ 2199",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kste6ACBrxjHLdVfBAUhKhzb",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "₹ 2799",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HhK9rukqfQC3X5PC1bV93xTf",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "₹ 2799",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9Sj7jZyVrQkawfHuSxk5KRGB",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "₹ 2799",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/p1j762x7B1u7KR9kgUEVUAzC",
    company: "cultsport",
    title: "FormFit Training Sports Bra",
    price: "₹ 1180",
    strikethrough: "₹ 2099",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nxHssmzDkfV3gYbuYzMFCnMA",
    company: "cultsport",
    title: "FormFit Training Sports Bra",
    price: "₹ 1180",
    strikethrough: "₹ 2099",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/W1DewiL8bBvY9e4XuuGdX6fu",
    company: "cultsport",
    title: "Seamless Kyla Sports Bra",
    price: "₹ 1044",
    strikethrough: "₹ 1899",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ojL2m1qgVtTr1KmNe1xjAqFL",
    company: "cultsport",
    title: "Seamless Sky Sports Bra",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bbwg4DEy6qHsiBEdhp4tBkh5",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "₹ 2799",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mKqxVHGmgAfueaqBFJu2CM1P",
    company: "cultsport",
    title: "Medium Impact Sports Bra",
    price: "₹ 2699",
    strikethrough: "₹ 2699",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ACnD9W49rmX4tmtoYyvQaVRF",
    company: "cultsport",
    title: "FormFit Medium Impact Zoe Sports Bra",
    price: "₹ 1339",
    strikethrough: "₹ 1999",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xfyTUvSwRaKGThjzqH54yNHB",
    company: "cultsport",
    title: "Cleo Slip-on Sports Bra",
    price: "₹ 1299",
    strikethrough: "₹ 1999",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LEE997UW5WoFdSdjAzdrD2ZT",
    company: "cultsport",
    title: "Seamless Diane Medium Impact Sports Bra",
    price: "₹ 1264",
    strikethrough: "₹ 2299",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AyCTPW9UG9wfyziTRHpXfSVQ",
    company: "cultsport",
    title: "Seamless Liz Medium Impact Sports Bra",
    price: "₹ 999",
    strikethrough: "₹ 1799",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DxRCqkWJjsZGQ2mUhWBtsD11",
    company: "cultsport",
    title: "Seamless Ira Medium Impact Sports Bra",
    price: "₹ 989",
    strikethrough: "₹ 1799",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/B2h9k2JTaQvDmCkCm6NNPfHV",
    company: "cultsport",
    title: "Prism Print Sports Bra",
    price: "₹ 1473",
    strikethrough: "₹ 2199",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/BSiu1tUZrfLeCitwG36pwce6",
    company: "cultsport",
    title: "Halftone Print Sports Bra",
    price: "₹ 1559",
    strikethrough: "₹ 2599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Shx7fiDC5ChvJvUXkbK4VVJN",
    company: "cultsport",
    title: "FormFit Running Sports Bra",
    price: "₹ 1339",
    strikethrough: "₹ 1999",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yoE8zhrquT6Umrsr57drKMaf",
    company: "cultsport",
    title: "Seamless Ida Sports Bra",
    price: "₹ 1180",
    strikethrough: "₹ 1899",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vR9Gzwc4iPqqEW3FioTxzhP7",
    company: "cultsport",
    title: "Seamless Ombre Sports Bra",
    price: "₹ 1199",
    strikethrough: "₹ 1999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7HsrzS2ytQcNPtKeQPSqni3j",
    company: "cultsport",
    title: "Seamless Kyla Sports Bra",
    price: "₹ 1180",
    strikethrough: "₹ 1899",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/moNf8TEgd1G3n3fiKmkAbUaG",
    company: "cultsport",
    title: "Seamless Rae Sports Bra",
    price: "₹ 1209",
    strikethrough: "₹ 2199",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/MHzSRiGmcy8vTV8PXo9jibEq",
    company: "cultsport",
    title: "Seamless Rae Sports Bra",
    price: "₹ 1319",
    strikethrough: "₹ 2199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5x9jajvDCQuSC2GgywRa9PDW",
    company: "cultsport",
    title: "FormFit Ivy Colourblock Sports Bra",
    price: "₹ 1749",
    strikethrough: "₹ 2499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/T2mo1cG2ARQozsGUP2XS4nTD",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "₹ 2799",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ey4mSz7F6iwSKjgSSSsbYZBk",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "₹ 2799",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kPWsXJQB2QHhs8EQyvXu76k4",
    company: "cultsport",
    title: "Medium Impact Printed Sports Bra",
    price: "₹ 2799",
    strikethrough: "₹ 2799",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/1fH99BVaSTX3KVEZ6mpXQeSh",
    company: "cultsport",
    title: "Medium Impact Sports Bra",
    price: "₹ 2699",
    strikethrough: "₹ 2699",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mRd4LsdCFpmz6JrxCcEpkrwQ",
    company: "cultsport",
    title: "Knockout Medium Support Sports Bra",
    price: "₹ 2024",
    strikethrough: "₹ 2699",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RaPPYbn7i9yEX5otvHdyvAUc",
    company: "cultsport",
    title: "FormFit High Impact Ivy Sports Bra",
    price: "₹ 1624",
    strikethrough: "₹ 2499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UeT2CupFPJPh7PyCnGRwZZ1i",
    company: "cultsport",
    title: "FormFit High Impact Ivy Sports Bra",
    price: "₹ 1624",
    strikethrough: "₹ 2499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/eLJUwNY7EcvvNKeS7F5wAjas",
    company: "cultsport",
    title: "FormFit Medium Impact Iris Sports Bra",
    price: "₹ 1624",
    strikethrough: "₹ 2499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XKbgxr8oAG9nkFjvKLK5DEqb",
    company: "cultsport",
    title: "FormFit Medium Impact Iris Sports Bra",
    price: "₹ 1624",
    strikethrough: "₹ 2499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/H9EdbezcobSSSpr9HDP2siGp",
    company: "cultsport",
    title: "FormFit Medium Impact Zoe Sports Bra",
    price: "₹ 1559",
    strikethrough: "₹ 2399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SiG27L1Ezj8W3tpWRXy7f5UQ",
    company: "cultsport",
    title: "Seamless Gia Medium Impact Sports Bra",
    price: "₹ 1044",
    strikethrough: "₹ 1899",
    discount: "45% Off",
  },

  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/JWTDMuvRXtmCbS6FkQPb4SHH",
    company: "cultsport",
    title: "Seamless Elaine Medium Impact Sports Bra",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/cB9URTBg4KMYSC8ytesrW3jN",
    company: "cultsport",
    title: "Seamless Mila Medium Impact Sports Bra",
    price: "₹ 934",
    strikethrough: "₹ 1699",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gLWzNgcAQ8AVx6eyjRDjyUu7",
    company: "cultsport",
    title: "Neon Streak Print Sports Bra",
    price: "₹ 1319",
    strikethrough: "₹ 2199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/F617SWYRhjovNgmVWpkd3ZQH",
    company: "cultsport",
    title: "Camo Print Sports Bra",
    price: "₹ 1319",
    strikethrough: "₹ 2199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/wmEs5VVfyNS5L3enAS1gwywz",
    company: "cultsport",
    title: "Marble Print Sports Bra",
    price: "₹ 1319",
    strikethrough: "₹ 2199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/W7voXhf59xSiesqrHczezCqn",
    company: "cultsport",
    title: "Halftone Print Sports Bra",
    price: "₹ 2324",
    strikethrough: "₹ 3099",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Lh5CB4mKYYn7rNY5wgMF1iA7",
    company: "cultsport",
    title: "Geometric Print Sports Bra",
    price: "₹ 2024",
    strikethrough: "₹ 2699",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/pzqQRku8Axetp7P65ZuKHoAe",
    company: "cultsport",
    title: "Printed Sports Bra",
    price: "₹ 1559",
    strikethrough: "₹ 2599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/sSfJxZrPmXqBFJnhdZrwYxYm",
    company: "cultsport",
    title: "Seamless Ida Sports Bra",
    price: "₹ 1180",
    strikethrough: "₹ 1899",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FWbrJ95cmFat7P8Ce9agogE6",
    company: "cultsport",
    title: "Seamless Ida Sports Bra",
    price: "₹ 1264",
    strikethrough: "₹ 2299",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9w1DURkGNAxsDbNnz4Ri5bw3",
    company: "cultsport",
    title: "Seamless Riley Sports Bra",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Rkvm2RRTupBGdosroYM1U5j5",
    company: "cultsport",
    title: "FormFit Medium Impact Iris Sports Bra",
    price: "₹ 1339",
    strikethrough: "₹ 1999",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RnC9VfNKE3wwnh173rSZsF4G",
    company: "cultsport",
    title: "FormFit High Impact Cleo Sports Bra",
    price: "₹ 1339",
    strikethrough: "₹ 1999",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uh8SbgBje9CWa97CPGGmk7tm",
    company: "cultsport",
    title: "Seamless Viola Medium Impact Sports Bra",
    price: "₹ 989",
    strikethrough: "₹ 1799",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/PgHAWFWnaw4wnufi9NYmZ6sD",
    company: "cultsport",
    title: "Seamless Ida Sports Bra",
    price: "₹ 1180",
    strikethrough: "₹ 1899",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RFXer63U2LTAPwaH9fU3vsgb",
    company: "cultsport",
    title: "Printed Sports Bra",
    price: "₹ 1559",
    strikethrough: "₹ 2599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/B2zK13fNk5YwD6mBhky5dpVL",
    company: "cultsport",
    title: "Seamless Clair Medium Impact Sports Bra",
    price: "₹ 1264",
    strikethrough: "₹ 2299",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/c5ax2hsPK9dZbj9zMgMDaE7o",
    company: "cultsport",
    title: "Seamless Reese Medium Impact Sports Bra",
    price: "₹ 999",
    strikethrough: "₹ 1799",
    discount: "44% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qX6oagftsJaUkKyuHddpX7L5",
    company: "cultsport",
    title: "Seamless Tess Medium Impact Sports Bra",
    price: "₹ 989",
    strikethrough: "₹ 1799",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QtqGLDXVifdmi2KZhuMZL42D",
    company: "cultsport",
    title: "FormFit Training Sports Bra",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uXmsFN1GFErweUzegxgj5v5G",
    company: "cultsport",
    title: "Seamless Sky Sports Bra",
    price: "₹ 1379",
    strikethrough: "₹ 2299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3CBEN2xaQgPszA6zV6SEiFfp",
    company: "cultsport",
    title: "Seamless Riley Sports Bra",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mDr56tYNkgQK63wPpKCgjh8D",
    company: "cultsport",
    title: "FormFit High Impact Cleo Sports Bra",
    price: "₹ 1199",
    strikethrough: "₹ 1999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DTm7vCXZBXW64Aq3K7oHhUy9",
    company: "cultsport",
    title: "FormFit Medium Impact Zoe Sports Bra",
    price: "₹ 1199",
    strikethrough: "₹ 1999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/16fXmwR41uWLDEiZPPWpwnZ9",
    company: "cultsport",
    title: "FormFit Seamless Amy Sports Bra",
    price: "₹ 824",
    strikethrough: "₹ 1099",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/679rWRALRxaCf7icKAj5PW9N",
    company: "cultsport",
    title: "FormFit Seamless Eva Sports Bra",
    price: "₹ 899",
    strikethrough: "₹ 1199",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bM44R5v6do3HV7h2Qso3xrH1",
    company: "cultsport",
    title: "Movement Bra",
    price: "₹ 1739",
    strikethrough: "₹ 2899",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xi2iPU9GarCA2CZvMsdwYFKd",
    company: "cultsport",
    title: "Vital Anatomy Grey Sports Bra",
    price: "₹ 1004",
    strikethrough: "₹ 1499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/JDj54fJCDJEJpEL26gNbGmV9",
    company: "cultsport",
    title: "Seamless Nia Medium Impact Sports Bra",
    price: "₹ 999",
    strikethrough: "₹ 1799",
    discount: "44% Off",
  },
];

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/037a0075-0454-4032-9f14-1ddc9936f9fc.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/56305480-3c62-4a9c-91d8-b37e240c8ec5.png",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/b153048a-04e1-4463-bc5e-f8f2fc760aed.png",
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
append(bra, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

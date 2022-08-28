import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/99cfdf98-8b9e-481a-9c76-413871cfd5cd.jpg",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/2773cf2c-bf14-4a4d-9522-3971bc799fed.jpg",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/b343e7bb-b28d-4941-bfe7-16207d7ad3f2.jpg",
  },
];

var wtshirts = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4pn7SDamo23VjuU8spnAuDHy",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 844",
    strikethrough: "₹ 1299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/hfHxa936cGrsAmeYAQxY8LSV",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 1364",
    strikethrough: "₹ 2099",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uD1UPRwAaoCgqPADjUTfcEpL",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 1364",
    strikethrough: "₹ 2099",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/hEgDvMC8YrR2VYHwFTiGB2ka",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 803",
    strikethrough: "₹ 1199",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8h3dBi9XPx5ynuvomG53WZQp",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 803",
    strikethrough: "₹ 1199",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5svv9v5yvceVuNfkztPmpkv7",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 803",
    strikethrough: "₹ 1199",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/oXeuT4ANSdRVU5tXEDtQsFxa",
    company: "cultsport",
    title: "Solid Perfomance Tshirt",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FA7agzkPyesuQx3CiaFNgWv8",
    company: "cultsport",
    title: "Solid Active Tshirt with Logo",
    price: "₹ 1599",
    strikethrough: "₹ 1599",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/aTFMmBJJC4ULb21CmZEqD5C1",
    company: "cultsport",
    title: "Solid Active Tshirt with Logo",
    price: "₹ 769",
    strikethrough: "₹ 1099",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kWZaVYdXMpLafJLitAsN7y9A",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/BdrBeEYiU4exihhExR6DtdYA",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mRyjUeuc9DHqHj4E3Pn5YHs9",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/dEj7tEF27soxF8piPN2k1mnb",
    company: "cultsport",
    title: "Ombre Logo Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gY2D1DQVpcpn6JdfBVWcf4xE",
    company: "cultsport",
    title: "Textured Perfomance Tshirt",
    price: "₹ 1899",
    strikethrough: "₹ 1899",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TNQ8Tcj76hn4gu3cBezS5GKW",
    company: "cultsport",
    title: "Textured Perfomance Tshirt",
    price: "₹ 1899",
    strikethrough: "₹ 1899",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/um7B5SVXrEHhBHWAX6kmW7bw",
    company: "cultsport",
    title: "Solid Active Tshirt with Logo",
    price: "₹ 1599",
    strikethrough: "₹ 1599",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UUhAk7osvzBpHUy5onGW2oAN",
    company: "cultsport",
    title: "FAB Women's Signature Workout T-shirt",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/njQ1VbxT7PsciRGh3iJnKqEa",
    company: "cultsport",
    title: "Minimalistic Graphic Print Tshirt",
    price: "₹ 669",
    strikethrough: "₹ 999",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/MMrm87nqt1bENXJSpNsKhB5X",
    company: "cultsport",
    title: "Graphic Print Workout Tshirt",
    price: "₹ 959",
    strikethrough: "₹ 1599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Va5gn1P8ZPCumwMpkfKawCwN",
    company: "cultsport",
    title: "Graphic Print Workout Tshirt",
    price: "₹ 999",
    strikethrough: "₹ 1599",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/fX5QDj1g6m5LrrjikLvakEQe",
    company: "cultsport",
    title: "Graphic Print Workout Tshirt",
    price: "₹ 999",
    strikethrough: "₹ 1599",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Ah3xbczwT8at4jzSSssR6uDz",
    company: "cultsport",
    title: "Women's Bonded Plum Polo T-shirt",
    price: "₹ 937",
    strikethrough: "₹ 1399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rViaci371S17xEa5yERH9WHu",
    company: "cultsport",
    title: "Vitals Logo Running T-Shirt",
    price: "₹ 937",
    strikethrough: "₹ 1399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4npMEXHNPX2qSsvuNuuNqAnR",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WfpVxQ9x9Av2FDGBUmqAWmwF",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 714",
    strikethrough: "₹ 1299",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9yQ7s6YePxCLuvxhRZZ4k2s8",
    company: "cultsport",
    title: "Ombre Logo Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3GJBU8r5XqXzhR2zaYFDJrkj",
    company: "cultsport",
    title: "Women's Pastel Printed Workout T-shirt",
    price: "₹ 719",
    strikethrough: "₹ 1199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nJbybgDoeDsa3X4iZxkGn9Q8",
    company: "cultsport",
    title: "Women's High-Intensity Workout T-shirt",
    price: "₹ 1004",
    strikethrough: "₹ 1499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/CKNTuEWB8UjypFWq9c4WbUVr",
    company: "cultsport",
    title: "FlashRun Signature Women's Running Tshirt",
    price: "₹ 736",
    strikethrough: "₹ 1099",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kVjappYkL7B1jEC6Lk22wTNd",
    company: "cultsport",
    title: "Band Collar Tshirt",
    price: "₹ 749",
    strikethrough: "₹ 999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ugNue2UsFw4fykXC74KZqeh2",
    company: "cultsport",
    title: "Cultsport Graphic Print Tshirt",
    price: "₹ 1004",
    strikethrough: "₹ 1499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZjefBYYJtKtGqpd7PrPUJvZo",
    company: "cultsport",
    title: "Graphic Print Workout Tshirt",
    price: "₹ 999",
    strikethrough: "₹ 1599",
    discount: "38% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/tx4u1N3gkVKW51hS9vij2MDF",
    company: "cultsport",
    title: "Women's Bonded Plum Polo T-shirt",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NYFsmpkrascGQVM66s1XVPKG",
    company: "cultsport",
    title: "Vitals Logo Running T-Shirt",
    price: "₹ 1004",
    strikethrough: "₹ 1499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/o5tCX7GjXarxwYtpjSnretNc",
    company: "cultsport",
    title: "Vitals Logo Running T-Shirt",
    price: "₹ 899",
    strikethrough: "₹ 1499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xH2Z4KdYitq3sn19aPpUJbzE",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 937",
    strikethrough: "₹ 1399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xv7cxycort35pP1NSL1DtYLK",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 1004",
    strikethrough: "₹ 1499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VeEJnXZagcxkJwmhJcQbE6oZ",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vP15UjsLPwYyKt5799sXoZ7g",
    company: "cultsport",
    title: "Solid Active Tshirt with Logo",
    price: "₹ 769",
    strikethrough: "₹ 1099",
    discount: "30% Off",
  },
  {
    Image: "",
    company: "cultsport",
    title: "Knockout Signature Training T-shirt",
    price: "₹ 974",
    strikethrough: "₹ 1299",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yjYfBnUTqjbdS7NiWrJRXQQc",
    company: "cultsport",
    title: "Women's Dumbell Workout T-shirt",
    price: "₹ 803",
    strikethrough: "₹ 1199",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iBxPFXFyVtsWSpnw6k8w1m3X",
    company: "cultsport",
    title: "Conversational Logo Tshirt",
    price: "₹ 749",
    strikethrough: "₹ 999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2AXMkhLBFggswepsTJRprVx6",
    company: "cultsport",
    title: "Logo Play Graphic Print Tshirt",
    price: "₹ 899",
    strikethrough: "₹ 1499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4Avat6UnRFrRUfGr7L7JAJDG",
    company: "cultsport",
    title: "Placement Graphic Print Tshirt",
    price: "₹ 1004",
    strikethrough: "₹ 1499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yR4WKsxyXdyoUsRTvnxVz451",
    company: "cultsport",
    title: "Ombre Graphic Workout Tshirt",
    price: "₹ 779",
    strikethrough: "₹ 1299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uHRbGvJQT2E1Uvk3gpa2VBXA",
    company: "cultsport",
    title: "Ombre Logo Graphic Tshirt",
    price: "₹ 870",
    strikethrough: "₹ 1299",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SdfpbTyFzietFUST8oLQcP6x",
    company: "cultsport",
    title: "Long Line Workout Tshirt",
    price: "₹ 959",
    strikethrough: "₹ 1599",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/M4ZZdWXHva8VhdScwrK6ndvQ",
    company: "cultsport",
    title: "Play Graphic Workout Tshirt",
    price: "₹ 1004",
    strikethrough: "₹ 1499",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DQ72yLsWGJ1hhkg9WnjHifPi",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 937",
    strikethrough: "₹ 1399",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5WtKRbeXyMaUMegwv8LrVyuo",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5u4bivGYWd9pTordhvyPvt9E",
    company: "cultsport",
    title: "FAB Women's Camo T-shirt",
    price: "₹ 736",
    strikethrough: "₹ 1099",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yoXr3M1bN4wLrbXtZjgD6Bnz",
    company: "cultsport",
    title: "FAB Women's Camo T-shirt",
    price: "₹ 736",
    strikethrough: "₹ 1099",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/YMWnDZCwVmaDJm3sqtTgTvZC",
    company: "cultsport",
    title: "Women's Polyester Running T-shirt",
    price: "₹ 602",
    strikethrough: "₹ 899",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/1X5Krv1DzwtiKyR3FJrKizum",
    company: "cultsport",
    title: "Dance Graphic Print Workout Tshirt",
    price: "₹ 1071",
    strikethrough: "₹ 1599",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VSk9LuvPHN1FrSwzbgooEBbX",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 779",
    strikethrough: "₹ 1299",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LLYL9HZsqYuTZFHy3arDRuxJ",
    company: "cultsport",
    title: "Women's Dumbbell Training Tee",
    price: "₹ 899",
    strikethrough: "₹ 1199",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7fP2U5CSsBwDvgLGDhPjBG9i",
    company: "cultsport",
    title: "Women's Classic Round Neck T-shirt",
    price: "₹ 899",
    strikethrough: "₹ 1499",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/oHpF5SSFtRDvDLLwbJsRMcYA",
    company: "cultsport",
    title: "FlashRun Sprint Women's Running Tshirt",
    price: "₹ 736",
    strikethrough: "₹ 1099",
    discount: "33% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/i74udCkz2Nm45YfWi6ueQDR1",
    company: "cultsport",
    title: "Graphic Print Yoga Tshirt",
    price: "₹ 937",
    strikethrough: "₹ 1399",
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
append(wtshirts, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

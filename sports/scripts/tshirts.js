import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "/dusty-hat-6390/sports/index.html";
});

var mentshirt = [
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
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gyEKit98fH6VGSZ2jv1fFkSm",
    company: "cultsportone",
    title: "Textured Performance Tshirt with Logo",
    price: "₹ 599",
    strikethrough: "₹ 999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AmGR711mZ3KinRHFpSJJspma",
    company: "cultsport",
    title: "Vitals Lifestyle Polo Tshirt",
    price: "₹ 1180",
    strikethrough: "₹ 1799",
    discount: "34% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GTsdULwpCrv1hFMNDgQ5vrsP",
    company: "cultsport",
    title: "Vitals Lifestyle Polo Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/koPLqbxY9fKvoS7WjiojFKVg",
    company: "cultsport",
    title: "Vitals Lifestyle Polo Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WoJc353LB1KFvhMkU8cGmyj3",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nxGkSeNN25Wyk9DaCQytKfCf",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/osRYuYYvwFy8BSYw9wQHnZ9A",
    company: "cultsport",
    title: "Vitals Solid Running T-Shirt",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7eTveQueStdDhLto5i8eSND7",
    company: "cultsport",
    title: "Vitals Logo Running T-Shirt",
    price: "₹ 844",
    strikethrough: "₹ 1299",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FSXx7TZ2KNaGz5DUi2aCWQqf",
    company: "cultsport",
    title: "Vitals Lifestyle Polo T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mGZLPw1assW1GPKtCYmxi7Zn",
    company: "cultsport",
    title: "Vitals Lifestyle Polo T-Shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1799",
    discount: "34% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Yfxf1rcYjWiHBmPU7y61aHoa",
    company: "cultsport",
    title: "Vitals Lifestyle Polo T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/YAMYsbgvZCk22sVQhf7D8eHY",
    company: "cultsport",
    title: "Vitals Lifestyle Polo T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Zy4ZTBsRTLvcVxLThmXyUd3v",
    company: "cultsport",
    title: "Vitals Running T-Shirt",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xSqZe6eiLM6R2YmMmeYNk8wm",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AZXpLTT7DJbxcB7JkXRVdBCo",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 1511",
    strikethrough: "₹ 2099",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/MbwMLHyajasEhEuQSzoEoKWV",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/H3fKCRozgHxASEd2VqLnqc52",
    company: "cultsport",
    title: "Vitals Lifestyle Polo T-Shirt",
    price: "₹ 1583",
    strikethrough: "₹ 2199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4pF7S8qji3nFu55XYC7HAEu7",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ms9QkpYXJhNN8R77Ar85MyBh",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/J8A2evVVC8XTupi5iy4E67t3",
    company: "cultsport",
    title: "Isometric Logo Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2LY5bDJPALHGU2s58ZyeMgKb",
    company: "cultsport",
    title: "Matrix Graphic Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4cJb2Wu6mLzne6pg6nisgYJX",
    company: "cultsport",
    title: "Styrograph Logo Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/szuf3uS7tBKSJm4iguNhQ4yo",
    company: "cultsport",
    title: "Glitch Logo Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/fu1M8jqwskPPRMKuxr64Asor",
    company: "cultsport",
    title: "VMan Graphic Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1499",
    discount: "21% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2FpW19DjFemGM9LezTXnuKUp",
    company: "cultsport",
    title: "VMan Graphic Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FcXpMNjZxqnTtd917BmRdUH8",
    company: "cultsport",
    title: "Colourblock Active Polo T-shirt",
    price: "₹ 1574",
    strikethrough: "₹ 2099",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9XgiP9a63Ntoe4G8jWhXeKB1",
    company: "cultsport",
    title: "Solid Active Polo T-shirt",
    price: "₹ 1574",
    strikethrough: "₹ 2099",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Z4TxtFmtE2CLmZC3BMP1AECh",
    company: "cultsport",
    title: "Isometric Logo Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/dRhEunW8VRaXpjebkkK1KVUZ",
    company: "cultsport",
    title: "Glitch Logo Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1499",
    discount: "21% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qZJjgqsV7ySAmza8SCxBj3QD",
    company: "cultsport",
    title: "Mesh Logo Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1499",
    discount: "21% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Y3G7pBnts8qiBXXcQusQ3qTq",
    company: "cultsport",
    title: "Panelled Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1499",
    discount: "21% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/hr6uD1dJCHmmghCCKNYxgT6e",
    company: "cultsportone",
    title: "Textured Performance Tshirt with Logo",
    price: "₹ 599",
    strikethrough: "₹ 999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Rt6LUXkNe3NFaxfDJ9SuvdKB",
    company: "cultsportone",
    title: "Active Tshirt with Placement Graphic",
    price: "₹ 659",
    strikethrough: "₹ 1099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GfxNFQKwr2i8DdSagf1XyELJ",
    company: "cultsportone",
    title: "Performance Tshirt with Minimal Graphic",
    price: "₹ 659",
    strikethrough: "₹ 1099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QvYNwAaZvfoqbPQ1hdGEZWjQ",
    company: "cultsportone",
    title: "Active Tshirt with Minimal Graphic",
    price: "₹ 659",
    strikethrough: "₹ 1099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/exDsFWkJnQ1KXtQr27r73Uzp",
    company: "cultsportone",
    title: "Active Tshirt with Minimal Graphic",
    price: "₹ 659",
    strikethrough: "₹ 1099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/YLdcv7KsVvMgRuaTs79bX9F7",
    company: "cultsportone",
    title: "Branding Play Active Tshirt",
    price: "₹ 599",
    strikethrough: "₹ 999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UntjzSBirNCkBoyxmYVHCg9E",
    company: "cultsportone",
    title: "Branding Play Active Tshirt",
    price: "₹ 599",
    strikethrough: "₹ 999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QV53NNzZH1R6Un9BUn6djP2Q",
    company: "cultsport",
    title: "Textured Perfomance Tshirt",
    price: "₹ 1099",
    strikethrough: "₹ 1099",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GaiTrBEgTogE7hFHDSxiVJtE",
    company: "cultsport",
    title: "Solid Active Tshirt with Logo",
    price: "₹ 2499",
    strikethrough: "₹ 2499",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/cyYyuo1a69sEKZurdRJdggmC",
    company: "cultsport",
    title: "Solid Active Tshirt with Logo",
    price: "₹ 2499",
    strikethrough: "₹ 2499",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jHrnZD23RG55URwojpJzYS3D",
    company: "cultsport",
    title: "Solid Active Tshirt with Logo",
    price: "₹ 1874",
    strikethrough: "₹ 2499",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/c3uFKXERUQ8MsBHGZgxDFnTf",
    company: "cultsport",
    title: "Textured Active Tshirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LfdYgb41SiMwDwZbYbGLubQF",
    company: "cultsport",
    title: "Textured Active Tshirt",
    price: "₹ 1899",
    strikethrough: "₹ 1899",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kFgqofHcoNVLwmcaWTMARBjk",
    company: "cultsport",
    title: "Textured Perfomance Tshirt",
    price: "₹ 1899",
    strikethrough: "₹ 1899",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uypNEfQfSNnfePJNDsDwEh4H",
    company: "cultsport",
    title: "Textured Perfomance Tshirt",
    price: "₹ 1599",
    strikethrough: "₹ 1599",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/PQgNKRobtV66yXUABJ8TJdQR",
    company: "cultsportone",
    title: "Performance Tshirt with Chest Print",
    price: "₹ 719",
    strikethrough: "₹ 1199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/m6hPQzL7ZeoxrDVho4zZwjRx",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QayKgTPmxjaSYYgJKt1QsKzU",
    company: "cultsport",
    title: "Vitals Print Training Tshirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WZxX226LjEoypA84gugWRwKK",
    company: "cultsport",
    title: "Vitals Lifestyle Polo Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bTW3mQinK76VZ1VTXTyYaSSs",
    company: "cultsport",
    title: "Vitals Lifestyle Polo Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8bqevtbTEspkxdKnMyvaoAPE",
    company: "cultsport",
    title: "Vitals Lifestyle Polo Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XVGSotuAudrpG1Lw1MYrxNyL",
    company: "cultsport",
    title: "Vitals Logo Running T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ng1omNbwsh7Tm6cF6jA6ELCZ",
    company: "cultsport",
    title: "Vitals Logo Running T-Shirt",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qr5qPgGqhLbrczBXv7aaEu8x",
    company: "cultsport",
    title: "Vitals Running T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/izVCSjNrQKx7tvUSydYuqPxy",
    company: "cultsport",
    title: "Vitals Lifestyle Polo T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gZfDb2DcR8S8cnjopEjKYK4f",
    company: "cultsport",
    title: "Vitals Lifestyle Polo T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1799",
    discount: "42% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nRpwGPJWuoyqF9JQmXFjEgiF",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/eSUtFReSXxCVP13nFyL2A2pu",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 839",
    strikethrough: "₹ 1399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/KFwn9BJgVA4PWWDdw1UsdEc5",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 1259",
    strikethrough: "₹ 2099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XJV9DvJxD57RqSGRBXxT8uvd",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QuGxk3pUaZNgC1D8G9oiyZ6D",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2WcM9LhHRYMTZBAT2tv6ZNbp",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gfmVCQwJgvSMo7ZDV75QnN8F",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/q4g3VWureEUdc15PZW5qyH6c",
    company: "cultsport",
    title: "Vitals Running T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XHrhVnJVKpn4MmruG8obr4kH",
    company: "cultsport",
    title: "Colourblock Active Polo T-shirt",
    price: "₹ 1424",
    strikethrough: "₹ 1899",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3ZT1bejFW38pk2dmYBRMY8Re",
    company: "cultsport",
    title: "Tempo Graphic Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1499",
    discount: "21% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/hVPTyQGBkeZmKCdf5yhs1Erd",
    company: "cultsport",
    title: "Styrograph Logo Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RPmgGrj6PeUm82QBBazwEZUb",
    company: "cultsport",
    title: "VMan Graphic Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SdPEcddramzPDmogJdoixDf7",
    company: "cultsport",
    title: "Training Club Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XnuHfKJ7n7p9HdF3AqFssvEF",
    company: "cultsport",
    title: "Logo Graphic Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1499",
    discount: "21% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/beibHW9BMt6ZNgscj6xmaP13",
    company: "cultsport",
    title: "Dimension Graphic Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1499",
    discount: "21% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4SujPn55mRjrHaxF8j1HkwSA",
    company: "cultsport",
    title: "Dimension Graphic Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XfExFgSF4Bwm94XZpABxqRE4",
    company: "cultsport",
    title: "Pixel Graphic Active T-shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1399",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mrakn2oHEMMTS1cmD5B4jDL5",
    company: "cultsport",
    title: "Panelled Active T-shirt",
    price: "₹ 1180",
    strikethrough: "₹ 1499",
    discount: "21% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/w7wSrr7jZsSGu6k6st9KTheo",
    company: "cultsportone",
    title: "Solid Performance Tshirt with Logo",
    price: "₹ 599",
    strikethrough: "₹ 999",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/x6YzxeZhwjwEHP6b71N2HiEs",
    company: "cultsportone",
    title: "Performance Tshirt with Chest Print",
    price: "₹ 719",
    strikethrough: "₹ 1199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RivDuAK8ZUiYNLaMctuYd32J",
    company: "cultsportone",
    title: "Solid Raglan Tshirt with Logo",
    price: "₹ 659",
    strikethrough: "₹ 1099",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NQdL3hU8KuYfEUWSfue2taac",
    company: "cultsport",
    title: "Textured Perfomance Tshirt",
    price: "₹ 824",
    strikethrough: "₹ 1099",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gtFj7vxHNcPsUWBnKVgvRMx9",
    company: "cultsport",
    title: "Solid Perfomance Tshirt",
    price: "₹ 1599",
    strikethrough: "₹ 1599",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/HCdD4cPuTzZedQhSFwy2mcqL",
    company: "cultsport",
    title: "Textured Active Tshirt",
    price: "₹ 1899",
    strikethrough: "₹ 1899",
    discount: "",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9LpG5wHHRXgheH8yjrmx7n11",
    company: "cultsport",
    title: "Abstract Bid Black Workout Tee",
    price: "₹ 719",
    strikethrough: "₹ 999",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Ym2sAF1TvViFKQE98r1PGNpR",
    company: "cultsport",
    title: "FAB Men's Polo T-shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1399",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ez7BPTyZ5kE8Mye7o2YCA3B1",
    company: "cultsport",
    title: "Men's Dumbbell Training Tee",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TZAp7TXyBXH92WqftcFawVo7",
    company: "cultsport",
    title: "FAB Men's Cube Training T-shirt",
    price: "₹ 791",
    strikethrough: "₹ 1099",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kBUfVxQAbzHPXVVqbCGcoR8J",
    company: "cultsport",
    title: "FAB Men's Minimalistic Workout T-shirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/G7nj9J62UYYzYhctWLqeA3LH",
    company: "cultsport",
    title: "FAB Men's Essential Workout T-shirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },

  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ftcdKnyDq5zqV6hfp3apqcMr",
    company: "cultsport",
    title: "FAB Men's Staple Training T-shirt",
    price: "₹ 791",
    strikethrough: "₹ 1099",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/21x2rCJwACH5uPcaiUCwahg8",
    company: "cultsport",
    title: "FAB Men's V-Neck T-shirt",
    price: "₹ 749",
    strikethrough: "₹ 999",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2STitUaoQYu2TkviLQ7DnFBo",
    company: "cultsport",
    title: "Men's Solid Training T-shirt",
    price: "₹ 779",
    strikethrough: "₹ 1199",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8z4aSKGJuGUYcJmz3rPrBJ1Z",
    company: "cultsport",
    title: "FlashRun Pace Men's Running Tshirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Uma5hcdHSVk6c6susn3Ehj5V",
    company: "cultsport",
    title: "FlashRun Neon Pop Men's Running Tshirt",
    price: "₹ 899",
    strikethrough: "₹ 1199",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VmH8d1kmtKhmhpbR7SH2MgZp",
    company: "cultsport",
    title: "Conversational Print Tshirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Lw9GkcLqMatKUqdGswQGU2gf",
    company: "cultsport",
    title: "Supersoft Yoga Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kCA2rugUPWKLcJFepU65r3Ty",
    company: "cultsport",
    title: "Branding Logo Graphic Tshirt",
    price: "₹ 1180",
    strikethrough: "₹ 1599",
    discount: "26% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VAp9m951DKHGFom1CTrf99oD",
    company: "cultsport",
    title: "Signature Print Workout Tshirt",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3BvAwGdmm6TEp86zcaF3gkF5",
    company: "cultsport",
    title: "Dance Graphic Print Workout Tshirt",
    price: "₹ 1039",
    strikethrough: "₹ 1599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/sJernEQxHpgQGf6hL8bRwGtY",
    company: "cultsport",
    title: "Gradient Stripe Workout Tshirt",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/KU5FQGGzFaehzsbvg4aGHurb",
    company: "cultsport",
    title: "Vitals Workout Tshirt",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Ban4au2ihUVE29FdmGTTycgY",
    company: "cultsport",
    title: "Vitals Logo Running T-Shirt",
    price: "₹ 974",
    strikethrough: "₹ 1499",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GDmAFq6WZLD9omKo6TuMGyZp",
    company: "cultsport",
    title: "Vitals Logo Running T-Shirt",
    price: "₹ 1039",
    strikethrough: "₹ 1599",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kZJ7q5HoS6LCpCpgetFsu5Gs",
    company: "cultsport",
    title: "Vitals Graphic Running T-Shirt",
    price: "₹ 779",
    strikethrough: "₹ 1199",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/fcXiJgkHhffEMWgNFfCrHsbX",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4obe6nMk4KaYj5GPBqs3u85y",
    company: "cultsport",
    title: "Tempo Graphic Active T-shirt",
    price: "₹ 1199",
    strikethrough: "₹ 1599",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/BZqNHkTxfAyrYeaenEWXuiMz",
    company: "cultsport",
    title: "Everydays Dial Blue Cotton Tee",
    price: "₹ 974",
    strikethrough: "₹ 1299",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/f9dd83ykR3W8pX1zHSrexXcM",
    company: "cultsport",
    title: "Everydays Zone Blue Cotton Tee",
    price: "₹ 575",
    strikethrough: "₹ 799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RLUSjvRM7EBSPSE5mBPh6WSD",
    company: "cultsport",
    title: "FAB Men's Solid Workout T-shirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/PLxrAavBrvJz4E6fCwtgj7tH",
    company: "cultsport",
    title: "Men's Dumbbell Training Tee",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yU6ThYdaF6A74mhqPqeYzN27",
    company: "cultsport",
    title: "FAB Men's Minimalistic Workout T-shirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ryyJusWDeqXM92Ra5BP7jgce",
    company: "cultsport",
    title: "FAB Men's Fundamental Workout T-shirt",
    price: "₹ 719",
    strikethrough: "₹ 999",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/BfPVwSHNLq9m4juZCLgoaDAK",
    company: "cultsport",
    title: "Men's Fundamental Workout T-shirt",
    price: "₹ 779",
    strikethrough: "₹ 1199",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Zsk418iRikr5nQ1R7qWeAR77",
    company: "cultsport",
    title: "Men's Sweat-Wicking Training T-shirt",
    price: "₹ 899",
    strikethrough: "₹ 1199",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/dCBv1apDHJRVYn5YKGXLHqn3",
    company: "cultsport",
    title: "FlashRun Print Mix Men's Running Tshirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/1dx24dmcAFcDTCJtyYXRKxwF",
    company: "cultsport",
    title: "FlashRun Neon Pop Men's Running Tshirt",
    price: "₹ 899",
    strikethrough: "₹ 1199",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RB56sL7pdEVCQF9HRB58xVco",
    company: "cultsport",
    title: "FlashRun Reflective Signature Men's Running Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1399",
    discount: "25% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UWwDLWRZFj3FKNSRNyopZBXD",
    company: "cultsport",
    title: "Minimalistic Print Tshirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DnGMK1KFbWPvaVVSEcUpS1i4",
    company: "cultsport",
    title: "Pixel Graphic Tshirt",
    price: "₹ 714",
    strikethrough: "₹ 1099",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vCe2Zfj9T18HgCqJWFNMn8gR",
    company: "cultsport",
    title: "Supersoft Yoga Tshirt",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/pTMhuQFpK22g2dNhxR7PrhKp",
    company: "cultsport",
    title: "Graphic Print Workout Tshirt",
    price: "₹ 1295",
    strikethrough: "₹ 1799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/SgTQSqJqK3HAPfAEGpnB1U1k",
    company: "cultsport",
    title: "Logo Graphic Print Tshirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GYxRAZLFfu6LptPvj3bPfxfi",
    company: "cultsport",
    title: "Vitals Lifestyle T-Shirt",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mvth4LVt8EYFCTnGRRTxgfxc",
    company: "cultsport",
    title: "Vitals Solid Running T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UF2Lmo8CeibSw9J95co12LzR",
    company: "cultsport",
    title: "Vitals Solid Running T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yZZFHavxTfcxC5ysgfcLSFYU",
    company: "cultsport",
    title: "Vitals Solid Running T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bxUetfAMWWG3NiX3KErbez2c",
    company: "cultsport",
    title: "Graphic Print Workout Tshirt",
    price: "₹ 1295",
    strikethrough: "₹ 1799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/MwfFiToe7gn7Ku2PeguNoUHo",
    company: "cultsport",
    title: "Pixelated Logo Print Tshirt",
    price: "₹ 714",
    strikethrough: "₹ 1099",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/a5dMiB2RDN9a9GKzRCPaUK34",
    company: "cultsport",
    title: "Gradient Stripe Workout Tshirt",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nTdJCke1RVo4zoqXUAM9XZyc",
    company: "cultsport",
    title: "Vitals Print Training Tshirt",
    price: "₹ 909",
    strikethrough: "₹ 1399",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5cUgjWYRWaNnbup7U1dRfMyF",
    company: "cultsport",
    title: "Vitals Solid Running T-shirt",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QyxzbjxA7H1z9V9jzpFewYd4",
    company: "cultsport",
    title: "FAB Men's Grade Training T-shirt",
    price: "₹ 791",
    strikethrough: "₹ 1099",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/sV79RRmvizpQdmvivhgBGNNg",
    company: "cultsport",
    title: "Men's Dumbbell Training Tee",
    price: "₹ 779",
    strikethrough: "₹ 1199",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vDqy4WcL9qggDjAkHAzZwukp",
    company: "cultsport",
    title: "FAB Men's Staple Training T-shirt",
    price: "₹ 791",
    strikethrough: "₹ 1099",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/wcZrUKVU3BBnKF1sxumZKekj",
    company: "cultsport",
    title: "Men's Essential Polyester Training T-shirt",
    price: "₹ 863",
    strikethrough: "₹ 1199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GFweLY5ZapJ7s3SN3Eem8Jcy",
    company: "cultsport",
    title: "Men's Relaxed Training T-shirt",
    price: "₹ 779",
    strikethrough: "₹ 1199",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gux7BrYicme5pv3Qkwd7k6rW",
    company: "cultsport",
    title: "FlashRun Matrix Men's Running Tshirt",
    price: "₹ 1007",
    strikethrough: "₹ 1399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6TAcJ69vuPY2Kf8Rm7fMRy9B",
    company: "cultsport",
    title: "Conversational Polo Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1499",
    discount: "30% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/r3RubzQpLrvdRtLZ7ALR2pvz",
    company: "cultsport",
    title: "Striper Workout Tshirt",
    price: "₹ 935",
    strikethrough: "₹ 1299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/cpBNs7xWDhkqXeekNLbvQSSi",
    company: "cultsport",
    title: "Vitals Camo Training Tshirt",
    price: "₹ 1049",
    strikethrough: "₹ 1899",
    discount: "45% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NYQ49TZ8LSuJE1ti1VsBZY1K",
    company: "cultsport",
    title: "Vitals Solid Running T-Shirt",
    price: "₹ 1049",
    strikethrough: "₹ 1599",
    discount: "34% Off",
  },
];

var slideshowArr = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/4a672b60-f376-4636-b6be-531bd152a136.jpg",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/b1b3b6cb-dcba-44ca-bd6c-321ddb6709e0.jpg",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_622,ar_1312:560/dpr_2/image/vm/2d634fd9-c1ed-4f60-bc18-d2c512b103ef.jpg",
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
append(mentshirt, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

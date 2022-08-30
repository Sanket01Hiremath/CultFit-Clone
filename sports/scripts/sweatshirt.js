import navbar from "../components/navbar.js";
let navbarcont = document.getElementById("navbar");
navbarcont.innerHTML = navbar();

var sweatshirt = [
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NdvEpwV9voi5Kq17ZhcQgeHy",
    company: "cultsport",
    title: "Layr Lifestyle Sweatshirt",
    price: "₹ 1739",
    strikethrough: "₹ 2899",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZMFaKHM9gxMUMEvZmwoyBvWH",
    company: "cultsport",
    title: "Layr Lifestyle Sweatshirt",
    price: "₹ 1439",
    strikethrough: "₹ 2399",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Tig3Am4aK6WDR8GfNgsCkdop",
    company: "cultsport",
    title: "LAYR Graphic Sweatshirt",
    price: "₹ 1943",
    strikethrough: "₹ 2699",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yvV25h27YjQ9AJoS4oEcJbGf",
    company: "cultsport",
    title: "LAYR Graphic Sweatshirt",
    price: "₹ 1943",
    strikethrough: "₹ 2699",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NaPVVD8gbPsRtYwyqW7Zdqw9",
    company: "cultsport",
    title: "LAYR Logo Print Sweatshirt",
    price: "₹ 2058",
    strikethrough: "₹ 2899",
    discount: "29% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jduPMjfP6xXpSUAjJg2HRCNE",
    company: "cultsport",
    title: "LAYR Graphic Sweatshirt",
    price: "₹ 1919",
    strikethrough: "₹ 3199",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jyVNT5iB6DcELcvucbTSh2SR",
    company: "cultsport",
    title: "LAYR Graphic Sweatshirt",
    price: "₹ 2303",
    strikethrough: "₹ 3199",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5sC7xvqn7UVtbQF6w89BmpSj",
    company: "cultsport",
    title: "Layr Lifestyle Sweatshirt",
    price: "₹ 2015",
    strikethrough: "₹ 2799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ifJiojWFbNM6GqPiKNzH59rm",
    company: "cultsport",
    title: "Layr Lifestyle Sweatshirt",
    price: "₹ 1819",
    strikethrough: "₹ 2799",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GCsWyQx5YwFCSUiX5qgkNrtr",
    company: "cultsport",
    title: "Layr Lifestyle Sweatshirt",
    price: "₹ 2015",
    strikethrough: "₹ 2799",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/PFUUS6D98dQZs8gJygVV7HXA",
    company: "cultsport",
    title: "Flexoft Men's Classic Bomber Sweatshirt",
    price: "₹ 1727",
    strikethrough: "₹ 2399",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/f9iKkS2eZ82vX3WWACyQ6jte",
    company: "cultsport",
    title: "LAYR Graphic Sweatshirt",
    price: "₹ 1943",
    strikethrough: "₹ 2699",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/CoZp2nY4igTQvCWGHuwEq2YG",
    company: "cultsport",
    title: "LAYR Colorblock Sweatshirt",
    price: "₹ 2339",
    strikethrough: "₹ 3899",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Q3jyzaEWcQ1ST8vzye54kQjZ",
    company: "cultsport",
    title: "Layr Lifestyle Sweatshirt",
    price: "₹ 1739",
    strikethrough: "₹ 2899",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/xs5Hx18JDmvPMWc14Rn5yeNv",
    company: "cultsport",
    title: "Layr Lifestyle Sweatshirt",
    price: "₹ 1679",
    strikethrough: "₹ 2799",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Sa2mmLBkMJms3jf8sjeSG7EY",
    company: "cultsport",
    title: "Layr Lifestyle Sweatshirt",
    price: "₹ 1679",
    strikethrough: "₹ 2799",
    discount: "40% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Dz7eQ9pCJW48fritiAa4eZS2",
    company: "cultsport",
    title: "LAYR Solid Sweatshirt",
    price: "₹ 2404",
    strikethrough: "₹ 3699",
    discount: "35% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WUvKWYbg8pU6uevzTNuEufNs",
    company: "cultsport",
    title: "Flexoft Men's Signature Twist Hooded Sweatshirt",
    price: "₹ 1655",
    strikethrough: "₹ 2299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LehrSEzCufWF8L38jFg8nmDG",
    company: "cultsport",
    title: "Flexoft Men's Signature Twist Hooded Sweatshirt",
    price: "₹ 1655",
    strikethrough: "₹ 2299",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/swYAHdbDqtwgYDA3cv617sqw",
    company: "cultsport",
    title: "LAYR Graphic Sweatshirt",
    price: "₹ 1943",
    strikethrough: "₹ 2699",
    discount: "28% Off",
  },
  {
    Image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/1h1fPDP2r2WyNYgoUQmqsCHY",
    company: "cultsport",
    title: "LAYR Logo Print Sweatshirt",
    price: "₹ 2484",
    strikethrough: "₹ 3499",
    discount: "29% Off",
  },
];

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "/dusty-hat-6390/sports/index.html";
});

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
append(sweatshirt, container);

function cartfun(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}

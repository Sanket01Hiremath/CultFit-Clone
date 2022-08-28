function homepage() {
  window.location.href = "index.html";
}

let count = 10;
let exmple = 10;
let margin = 350;

let zoomElement = document.querySelectorAll(".zoom_effect");
let secondElement = document.getElementById("second_bottom_img_container");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  zoomElement.forEach(function (el) {
    if (scroll > 490 && scroll < 1280) {
      count += 10;
      //   console.log(count);
      el.style.transform = `translate3d(0px, -${count}px, 0px)`;
    } else {
      el.style.transform = `translate3d(0px, 0px, 0px)`;
      count = 0;
    }
  });
  if (scroll > 1000 && scroll < 1800) {
    margin -= 25;
    secondElement.style.marginTop = `${margin}px`;
  } else {
    margin = 350;
    secondElement.style.marginTop = `${margin}px`;
  }
});

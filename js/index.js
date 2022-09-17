const carouselSlide = document.querySelector(".carousel");
const carouselImag = document.querySelectorAll(".carousel img");
const imgs = document.querySelectorAll(".chose > div > img");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const result = document.getElementById("result");
const popupImg = document.querySelector("section .main-img img");
const closeBtn = document.getElementById("close-btn");
const addCart = document.getElementById("add-cart");

// Buttons
const prevBtn = document.querySelector("#pre");
const nextBtn = document.querySelector("#nxt");

// Counter
let counter = 1;
const size = carouselImag[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// Event Listinar
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transition = "transform .4s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImag.length - 1) return;
  counter++;
  carouselSlide.style.transition = "transform .4s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImag[counter].className === "last-copy") {
    carouselSlide.style.transition = "none";
    counter = carouselImag.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImag[counter].className === "first-copy") {
    carouselSlide.style.transition = "none";
    counter = carouselImag.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    const mainImg =
      img.parentElement.parentElement.parentElement.querySelector(
        ".main-img img"
      );
    const src = img.src.split("-");
    const newSrc = src
      .map((ele) => {
        if (ele == "thumbnail.jpg") return `.jpg`;
        else return ele;
      })
      .reduce((pre, cur) => {
        if (pre == "" || parseInt(cur) == cur || cur == ".jpg")
          return pre + cur;
        else return `${pre}-${cur}-`;
      }, "");
    mainImg.src = newSrc;
    imgs.forEach((img) => img.parentElement.classList.remove("active"));
    img.parentElement.classList.add("active");
  });
});

// add item or remove
plusBtn.addEventListener("click", () => {
  result.innerText++;
});

minusBtn.addEventListener("click", () => {
  if (parseInt(result.innerText) > 0) result.innerText--;
});

// popup Img
popupImg.addEventListener("click", () => {
  const popup = document.getElementById("popup-img");
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  const popup = document.getElementById("popup-img");
  popup.classList.add("hidden");
});

// Add Cart
addCart.addEventListener("click", () => {
  const ntf = document.getElementById("ntf");
  const content = document.querySelector(".content");
  if (parseInt(result.innerText) > 0) {
    content.innerHTML = `
      <div class="flex flex-row items-center w-full">
        <img
          class="w-16 rounded-md mr-4"
          src="./images/image-product-1-thumbnail.jpg"
          alt="" />
        <div
          class="flex-1 flex flex-row justify-between items-center">
            <div class="font-normal text-sm">
              <p>Fall Limited Edition Sneakers</p>
              <p>
              $125.00 x ${result.innerText}<span class="font-bold">
              $${result.innerText * 125}.00</span>
              </p>
            </div>
            <img class="w-4" src="./images/icon-delete.svg" alt="" />
          </div>
        </div>
        <button
          class="block mt-4 bg-Orange text-white py-3 rounded-lg w-full">
          Checkout
        </button>
      </div>
  `;

    ntf.classList.remove("hidden");
    ntf.innerText = result.innerText;
  } else {
    content.innerText = "Your cart is empty.";
    ntf.classList.add("hidden");
  }
});

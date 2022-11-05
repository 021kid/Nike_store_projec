const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ایر فورس",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./Eraser/air_3_rang-removebg-preview.png",
      },
      {
        code: "white",
        img: "./Eraser/air_sef.png",
      },
    ],
  },

  {
    id: 1,
    title: "جردن",
    price: 499,
    colors: [
      {
        code: "palevioletred",
        img: "./Eraser/jord_7rang-removebg-preview.png",
      },
      {
        code: "darkblue",
        img: "./Eraser/jordn5_abi.png",
      },
    ],
  },

  {
    id: 1,
    title: "بلیزر",
    price: 399,
    colors: [
      {
        code: "black",
        img: "./Eraser/blazer_meshki.png",
      },
      {
        code: "white",
        img: "./Eraser/blz_sefid.png",
      },
    ],
  },

  {
    id: 1,
    title: "بی پی",
    price: 139,
    colors: [
      {
        code: "darkblue",
        img: "./Eraser/bp1.png",
      },
      {
        code: "darkblue",
        img: "./Eraser/bp2.png",
      },
    ],
  },

  {
    id: 1,
    title: "تراویس",
    price: 299,
    colors: [
      {
        code: "brown",
        img: "./Eraser/TRAVIS-SCOOT1.png",
      },
      {
        code: "pink",
        img: "./Eraser/1111.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change choosenProduct
    choosenProduct = products[index];

    // change texts of choosenProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    // assin new color
    currentProductColor.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

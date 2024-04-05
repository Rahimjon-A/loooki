// slider
//
let list = document.querySelector(".hero .list");
let item = document.querySelectorAll(".hero .list .item");
let dots = document.querySelectorAll(".hero .dots li");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

console.log();

let active = 0;
let itemLength = item.length - 1;

next.onclick = function () {
    if (active + 1 > itemLength) {
        active = 0;
    } else {
        active += 1;
    }

    reloadSlider();
};

prev.onclick = function () {
    if (active - 1 < 0) {
        active = itemLength;
    } else {
        active -= 1;
    }
    reloadSlider();
};

let refreshSlider = setInterval(() => {
    next.click();
}, 4000);
function reloadSlider() {
    let checkLeft = item[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastActivedot = document.querySelector(".hero .dots li.active");
    lastActivedot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click();
    }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener("click", () => {
        active = key;
        reloadSlider();
    });
});

// slider
//

// like counter 
let spanNewElements = [];
// like counter


// product cards
const productWrapper1 = document.querySelector("#product-list")


const response1 = fetch("https://fakestoreapi.com/products")
    .then((request) => request.json())
    .then((data) =>
        data.slice(0, 4).forEach((element) => {

        const item = document.createElement("div");
        item.classList.add("item");

        const  image = document.createElement("div");
        image.classList.add("image");

        const createImage = document.createElement("img");
        createImage.src = element.image;

        const spanNew = document.createElement("span");
        spanNew.textContent = "New";
        spanNew.classList.add("new");

        const spanLike = document.createElement("span");
        spanLike.classList.add("like");
        spanLike.innerHTML = `<i class="fa-regular fa-heart"></i>`;

        spanNewElements.push(spanLike);

        const content = document.createElement("div");
        content.classList.add("content");

        const title = document.createElement("h2");
        title.textContent = element.title;

        const price = document.createElement("div");
        price.classList.add("price");

        const spanPrice = document.createElement("p");
        spanPrice.textContent = `Price: ${element.price} $`;

        const spanRating = document.createElement("div");
        spanRating.classList.add("price-tag");

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "t";

        spanRating.appendChild(link);
        price.appendChild(spanPrice);
        price.appendChild(spanRating);

        content.appendChild(title);
        content.appendChild(price);
           
        image.appendChild(createImage);
        image.appendChild(spanNew);
        image.appendChild(spanLike);

        item.appendChild(image);
        item.appendChild(content);

        productWrapper1.appendChild(item);
          
      
          
        })
    );


   

const productWrapper2 = document.querySelector("#product-items");

    const response2 = fetch("https://fakestoreapi.com/products")
    .then((request) => request.json())
    .then((data) =>
        data.slice(4, 8).forEach((element) => {

        const item = document.createElement("div");
        item.classList.add("item");

        const  image = document.createElement("div");
        image.classList.add("image");

        const createImage = document.createElement("img");
        createImage.src = element.image;

        const spanNew = document.createElement("span");
        spanNew.textContent = "New";
        spanNew.classList.add("new");

        const spanLike = document.createElement("span");
        spanLike.classList.add("like");
        spanLike.innerHTML = `<i class="fa-regular fa-heart"></i>`;

        spanNewElements.push(spanLike);

        const content = document.createElement("div");
        content.classList.add("content");

        const title = document.createElement("h2");
        title.textContent = element.title;

        const price = document.createElement("div");
        price.classList.add("price");

        const spanPrice = document.createElement("p");
        spanPrice.textContent = `Price: ${element.price} $`;

        const spanRating = document.createElement("div");
        spanRating.classList.add("price-tag");

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "t";

        spanRating.appendChild(link);
        price.appendChild(spanPrice);
        price.appendChild(spanRating);

        content.appendChild(title);
        content.appendChild(price);
           
        image.appendChild(createImage);
        image.appendChild(spanNew);
        image.appendChild(spanLike);

        item.appendChild(image);
        item.appendChild(content);

        productWrapper2.appendChild(item);
      
          
        })
    ); 

//  productWrapper


//  likes 


// likes
   
// hamburger Menu

    const hamburger = document.querySelector("#hamburger");
    const hiddenWindow = document.querySelector("#hiddenWindow");
    const closerMenu = document.querySelector("#closer-menu");


    hamburger.addEventListener("click", () => {
        hiddenWindow.classList.toggle("displayNone");
    });
 
    closerMenu.addEventListener("click", () => {
        hiddenWindow.classList.toggle("displayNone");
    });
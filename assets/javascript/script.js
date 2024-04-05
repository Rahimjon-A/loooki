const searcher = document.querySelector("#searcher");

const wrapper = document.querySelector("#wrapper");

const cards = document.querySelector("#search-card");

const searchInput = document.querySelector("#search-input");

const xmark = document.querySelector("#xmark");

searcher.addEventListener("click", () => {
    cards.classList.toggle("active");
    searchInput.classList.toggle("active");
});


xmark.addEventListener("click", () => {
    cards.classList.remove("active");
    searchInput.classList.remove("active");
});






// const response = fetch("https://fakestoreapi.com/products")
//     .then((request) => request.json())
//     .then((data) =>
//         data.forEach((element) => {
//             const card = document.createElement("div");
//             const cardTitle = document.createElement("p");
//             const cardImage = document.createElement("img");
//             const cardContent = document.createElement("div");
//             const cardPrice = document.createElement("p");
//             const cardButton = document.createElement("button");
//             const cardRate = document.createElement("p");

//             cardButton.textContent = "Add to Cart";
//             cardRate.textContent = `Rating: ${element.rating.rate} `;
//             cardPrice.textContent = ` Price: ${element.price} $`;

//             cardContent.classList.add("content");
//             cardTitle.classList.add("title");

//             cardContent.appendChild(cardPrice);
//             cardContent.appendChild(cardRate);
//             cardContent.appendChild(cardButton);

//             card.classList.add("box");
//             cardTitle.textContent = element.title;
//             cardImage.src = element.image;

//             card.appendChild(cardImage);
//             card.appendChild(cardContent);
//             card.appendChild(cardTitle);
//             wrapper.appendChild(card);
//         })
//     );

//GET api (read data)

// api end point : https://dummyjson.com/products

let apiUrl = "https://dummyjson.com/products?limit=10&skip=10";
let cardContainer = document.getElementById("cardContainer");

// 1 fetch api
// 2 get response and extract data
// 3 display data on screen i.e in card container in a card like ui

async function fetchProducts() {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    let allProducts = data.products;
    console.log(allProducts);

    allProducts.forEach((item) => {
      appendCardInCardContaier(item);
    });
  } catch (error) {
    console.log(error);
  }
}

function appendCardInCardContaier(productDetails) {
  let format = `<div id="card" class="w-full relative h-full m-2 rounded-md border">
  <div class="absolute top-0 bg-red-600 text-white p-2">${productDetails.id}</div>
        <div class="h-[150px] w-[150px] overflow-hidden">
          <img
            class="h-full w-full object-cover"
            src=${productDetails.thumbnail}
            alt="thumbnail-poster"
          />
        </div>
        <div class="p-2">
          <h3 class="text-md">${productDetails.title}</h3>
          <p class="text-xs line-clamp-2 text-blue-600">
            ${productDetails.description}
          </p>
          <div class="flex my-2 gap-2 flex-wrap">
            <div
              class="text-xs text-white bg-orange-600 rounded-full w-fit px-2"
            >
              ${productDetails.tags[0]}
            </div>
            <div
              class="text-xs text-white bg-orange-600 rounded-full w-fit px-2"
            >
              ${productDetails.tags[1]}
            </div>
          </div>
          <p>$ ${productDetails.price}</p>
          <span>category : ${productDetails.category}</span>
        </div>
      </div>`;
  cardContainer.innerHTML += format;
}

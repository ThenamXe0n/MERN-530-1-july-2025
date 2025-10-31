// web api fetch()

//api calling
// 1// calling api
// 2 wait for response
// 3 convert the response from JSON format using i.e  responseVariableName.json()

// async function getProductData() {
//   try {
//     let response = await fetch("https://dummyjson.com/products");
//     let data = await response.json();
//     console.log(data.products[0].price);
//     console.log(data.products[1].price);
//     console.log(data.products[2].price);
//     console.log(data.products[3].price);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// getProductData();

// let product = [
//   {
//     movie: "thaama",
//     poster:
//       "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/10/Thama.jpg",
//   },
//   {
//     movie: "3idiots",
//     poster: "https://fontmeme.com/images/3-Idiots-Poster.jpg",
//   },
//   {
//     movie: "kantara",
//     poster: "https://fontmeme.com/images/3-Idiots-Poster.jpg",
//   },
// ];

async function loadAndAppendMovies() {
  let response = await fetch("https://dummyjson.com/products",{
    method:"POST"
  });
  let data = await response.json();
  let product = data.products

  product.forEach((item, idx) => {
    let formatedHtml = `<div style="display: flex;flex-direction: column;max-width: 80px;border: 2px solid; padding: 10px ;align-items: center;">
        <img src=${item.thumbnail} height="100" alt="3idiots" >
        <p>${item.title}</p>
        <p>₹ ${item.price}</p>
    </div>`;
    document.body.innerHTML += formatedHtml;
  });
}

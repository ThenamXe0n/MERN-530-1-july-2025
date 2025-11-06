let api_endPoint = "https://dummyjson.com/recipes";
let container = document.querySelector("main");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchBtn");

let recipeList;

async function loadDataOfRecipes() {
  try {
    let response = await fetch(api_endPoint);
    let data = await response.json();
    console.log(data);
    recipeList = data.recipes;
    container.innerHTML = "";
    recipeList.forEach((item) => {
      addRecipeCard(item);
    });
  } catch (error) {
    console.log(error);
  }
}

loadDataOfRecipes();

//to show data on screen

// recipeDetail = {
//     name:"",
//     image:"",
//     ingredients:[],
//     rating:4
// }
function addRecipeCard(recipeDetail) {
  let recipeCard = `   <div
        class="w-full flex flex-col justify-between h-full min-h-64 rounded-md overflow-hidden"
      >
        <div id="" class="w-full relative">
        <section class='w-full bg-white h-full z-50 fixed top-0 left-0 flex items-center justify-center'>
  <!-- From Uiverse.io by yohohopizza --> 
<div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
  <div
    class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"
  ></div>
  <div
    class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"
  ></div>
</div>

  </section>
          <img
            class="h-full w-full image"
            src=${recipeDetail.image}
            alt=${recipeDetail.name}
          />
        </div>
        <div class="p-3 bg-orange-100">
          <p class="capitalize">
            rating : <span class="text-orange-500">${recipeDetail.rating} </span>/5
          </p>
          <h3 class="font-bold text-lg">${recipeDetail.name}</h3>
          <div class="flex mt-2 items-center flex-wrap gap-2">
            <b
              class="px-2 text-xs uppercase text-white shadow-sm shadow-yellow-200 bg-orange-500 rounded-full"
              >${recipeDetail.ingredients[0]}</b
            >
            <b
              class="px-2 text-xs uppercase text-white shadow-sm shadow-yellow-200 bg-orange-500 rounded-full"
              >${recipeDetail.ingredients[1]}</b
            >
          </div>
          <button
            class="bg-black text-white px-3 w-full hover:bg-green-500 duration-200 active:scale-95 active:shadow-black active:shadow-lg active:bg-red-600 uppercase cursor-pointer mt-3 rounded-md"
          >
            view receipe
          </button>
        </div>
      </div>`;

  //add card in container
  container.innerHTML += recipeCard;
}

function handleSearchRecipe() {
  let filteredRecipeList = recipeList.filter((item) => {
    if (
      item.name.toLowerCase().includes(searchInput.value) ||
      item.cuisine.toLowerCase().includes(searchInput.value) ||
      item.ingredients.includes(searchInput.value)
    ) {
      return item;
    }
  });

  container.innerHTML = "";
  filteredRecipeList.forEach((item) => {
    addRecipeCard(item);
  });
  console.log(filteredRecipeList);
}

searchButton.addEventListener("click", handleSearchRecipe);

function handleLoad() {
  document.getElementById("loader").style.display = "none";
}

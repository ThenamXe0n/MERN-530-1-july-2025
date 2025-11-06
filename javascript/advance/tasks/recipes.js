let mainContainer = document.querySelector("main");
let loadButton = document.getElementById("loadBtn");
let recipes ;
async function fetchRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
 recipes = data?.recipes;
    mainContainer.innerHTML = "";
    console.log(recipes);
    recipes.forEach((receipe) => {
      showDataOnPage(receipe);
    });
  } catch (error) {
    console.log(error);
  }
}

function showDataOnPage(recipe, idx) {
  let html = `    <div class="w-full flex flex-col justify-between h-full min-h-64 rounded-md overflow-hidden">
        <div class="w-full">
          <img
            class="h-full w-full"
            src=${recipe.image}
            alt=${recipe.name}
          />
        </div>
        <div class="p-3 bg-orange-100">
          <p class="capitalize">rating : <span class="text-orange-500">${
            recipe.rating
          }</span>/5</p>
          <h3 class="font-bold text-lg">${recipe.name}</h3>
          <div class="flex mt-2 items-center flex-wrap gap-2">
           ${recipe.ingredients
             .slice(0, 2)
             .map(
               (item) =>
                 `<b class="px-2 text-xs uppercase text-white shadow-sm shadow-yellow-200 bg-orange-500 rounded-full">${item}</b>`
             )}
          </div>
          <button class="bg-black text-white px-3 w-full hover:bg-green-500 duration-200 active:scale-95 active:shadow-black active:shadow-lg active:bg-red-600 uppercase cursor-pointer mt-3 rounded-md">view receipe</button>
        </div>
      </div>`;

  mainContainer.innerHTML += html;
}

loadButton.addEventListener("click", fetchRecipes);
document.querySelector("input").addEventListener("change",(e)=>{
let filtered = recipes.filter((i)=>i.name.toLowerCase().includes())
})
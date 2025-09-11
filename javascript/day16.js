let recipesData = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta with meat sauce.",
    ingredients: [
      "200g spaghetti",
      "1 onion",
      "2 cloves garlic",
      "400g canned tomatoes",
      "Salt",
      "Pepper",
      "Olive oil",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "Sauté onions and garlic in olive oil.",
      "Stir in canned tomatoes, salt, and pepper. Simmer for 20 minutes.",
      "Serve sauce over spaghetti.",
    ],
    prep_time: "10 minutes",
    cook_time: "30 minutes",
    servings: 2,
  },
  {
    id: 2,
    title: "Chicken Caesar Salad",
    description: "A fresh Caesar salad topped with grilled chicken.",
    ingredients: [
      "2 chicken breasts",
      "1 romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing",
      "Salt",
      "Pepper",
      "Olive oil",
    ],
    instructions: [
      "Grill chicken breasts seasoned with salt and pepper.",
      "Chop romaine lettuce and place in a bowl.",
      "Add croutons, parmesan, and sliced grilled chicken.",
      "Drizzle with Caesar dressing and toss.",
    ],
    prep_time: "15 minutes",
    cook_time: "15 minutes",
    servings: 2,
  },
  {
    id: 3,
    title: "Vegetable Stir Fry",
    description: "Quick and colorful vegetable stir fry.",
    ingredients: [
      "1 bell pepper",
      "1 zucchini",
      "1 carrot",
      "1 broccoli head",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "Garlic",
      "Ginger",
    ],
    instructions: [
      "Chop all vegetables into bite-sized pieces.",
      "Sauté garlic and ginger in sesame oil.",
      "Add vegetables and stir fry for 5–7 minutes.",
      "Add soy sauce and cook for another 2 minutes.",
    ],
    prep_time: "10 minutes",
    cook_time: "10 minutes",
    servings: 2,
  },
  {
    id: 4,
    title: "Pancakes",
    description: "Fluffy homemade pancakes.",
    ingredients: [
      "1 cup flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1 egg",
      "1 cup milk",
      "2 tbsp melted butter",
      "Pinch of salt",
    ],
    instructions: [
      "Mix dry ingredients in a bowl.",
      "Whisk in egg, milk, and butter.",
      "Pour batter onto a hot greased skillet.",
      "Flip when bubbles form. Cook until golden brown.",
    ],
    prep_time: "5 minutes",
    cook_time: "10 minutes",
    servings: 4,
  },
  {
    id: 5,
    title: "Tomato Soup",
    description: "Creamy tomato soup perfect for a cold day.",
    ingredients: [
      "1 tbsp butter",
      "1 onion",
      "2 garlic cloves",
      "500g canned tomatoes",
      "1 cup vegetable broth",
      "Salt",
      "Pepper",
      "Basil",
    ],
    instructions: [
      "Sauté onions and garlic in butter.",
      "Add tomatoes and broth, bring to a boil.",
      "Simmer for 15 minutes, then blend until smooth.",
      "Season with salt, pepper, and basil.",
    ],
    prep_time: "5 minutes",
    cook_time: "20 minutes",
    servings: 3,
  },
  {
    id: 6,
    title: "Grilled Cheese Sandwich",
    description: "Golden brown sandwich with melted cheese.",
    ingredients: ["2 slices of bread", "2 slices of cheese", "Butter"],
    instructions: [
      "Butter one side of each bread slice.",
      "Place cheese between unbuttered sides.",
      "Grill on a skillet until golden brown and cheese is melted.",
    ],
    prep_time: "3 minutes",
    cook_time: "5 minutes",
    servings: 1,
  },
  {
    id: 7,
    title: "Scrambled Eggs",
    description: "Soft and creamy scrambled eggs.",
    ingredients: ["3 eggs", "Salt", "Pepper", "1 tbsp butter", "2 tbsp milk"],
    instructions: [
      "Whisk eggs with milk, salt, and pepper.",
      "Melt butter in a pan over low heat.",
      "Cook eggs, stirring slowly until just set.",
    ],
    prep_time: "2 minutes",
    cook_time: "5 minutes",
    servings: 1,
  },
  {
    id: 8,
    title: "Beef Tacos",
    description: "Tacos with seasoned ground beef.",
    ingredients: [
      "200g ground beef",
      "1 taco seasoning packet",
      "4 taco shells",
      "Lettuce",
      "Tomatoes",
      "Cheese",
      "Sour cream",
    ],
    instructions: [
      "Cook ground beef and add taco seasoning.",
      "Warm taco shells.",
      "Fill shells with beef, lettuce, tomatoes, cheese, and sour cream.",
    ],
    prep_time: "10 minutes",
    cook_time: "15 minutes",
    servings: 2,
  },
  {
    id: 9,
    title: "Banana Smoothie",
    description: "A healthy banana smoothie.",
    ingredients: [
      "2 bananas",
      "1 cup milk",
      "1 tbsp honey",
      "1/2 tsp vanilla extract",
      "Ice cubes",
    ],
    instructions: ["Blend all ingredients until smooth.", "Serve chilled."],
    prep_time: "5 minutes",
    cook_time: "0 minutes",
    servings: 2,
  },
  {
    id: 10,
    title: "Avocado Toast",
    description: "Simple and delicious avocado on toast.",
    ingredients: [
      "1 avocado",
      "2 slices of bread",
      "Salt",
      "Pepper",
      "Lemon juice",
      "Chili flakes (optional)",
    ],
    instructions: [
      "Toast the bread slices.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Spread on toast and sprinkle chili flakes.",
    ],
    prep_time: "5 minutes",
    cook_time: "2 minutes",
    servings: 1,
  },
  {
    id: 11,
    title: "Mac and Cheese",
    description: "Creamy and cheesy macaroni pasta.",
    ingredients: [
      "200g elbow macaroni",
      "2 tbsp butter",
      "2 tbsp flour",
      "2 cups milk",
      "2 cups shredded cheese",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Cook macaroni according to package directions.",
      "Make a roux with butter and flour.",
      "Add milk and stir until thickened.",
      "Mix in cheese, then combine with pasta.",
    ],
    prep_time: "10 minutes",
    cook_time: "20 minutes",
    servings: 3,
  },
  {
    id: 12,
    title: "Greek Yogurt Parfait",
    description: "Layered yogurt, granola, and fruit.",
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup granola",
      "1/2 cup mixed berries",
      "Honey",
    ],
    instructions: [
      "Layer yogurt, granola, and berries in a glass.",
      "Drizzle with honey.",
    ],
    prep_time: "5 minutes",
    cook_time: "0 minutes",
    servings: 1,
  },
  {
    id: 13,
    title: "Omelette",
    description: "Quick and tasty egg omelette.",
    ingredients: [
      "3 eggs",
      "Salt",
      "Pepper",
      "Butter",
      "Cheese",
      "Bell peppers",
      "Onion",
    ],
    instructions: [
      "Beat eggs with salt and pepper.",
      "Sauté veggies in butter.",
      "Pour eggs into the pan and cook until set.",
      "Add cheese, fold, and serve.",
    ],
    prep_time: "5 minutes",
    cook_time: "7 minutes",
    servings: 1,
  },
];


let foundRecipe = recipesData.find((recipe)=>{
return recipe.id===13
})
let foundRecipe1 = recipesData.find((recipe)=>{
return recipe.ingredients.includes("1 carrot")
})

console.log("recipe matched is  : ",foundRecipe1)




/// filter veg recipes
let vegRecipes = recipesData.filter((item)=>{
    return item.description.toLowerCase().includes("vegetable")
})

console.log("veg ==>",vegRecipes)





// // /findIndex ====> used to find index of a item in array on behalf or a condition 
// let names = ["raj","mindcoders","rohit"]
// let indexOfMindcodr = names.findIndex((name,i)=>{
//     console.log(name,i)
//     return name.includes("r")
// })

// console.log(indexOfMindcodr)

let itemIndex = recipesData.findIndex((item)=>{
    return item.title.toLowerCase().includes("grilled cheese sandwich")
})

console.log("Grilled Cheese Sandwich index is  ===>",itemIndex)
console.log(recipesData[itemIndex])
// DOM Elements
const favoritesGrid = document.getElementById("favoritesGrid")
const noFavorites = document.getElementById("noFavorites")
const modal = document.getElementById("recipeModal")
const closeModal = document.querySelector(".close")
const recipeDetails = document.getElementById("recipeDetails")
const loginBtn = document.getElementById("loginBtn")
const registerBtn = document.getElementById("registerBtn")
const logoutBtn = document.getElementById("logoutBtn")

// Sample recipe data (same as in scripts.js)
const recipes = [
  {
    id: "R001",
    name: "Grilled Chicken Salad",
    category: "healthy",
    image: "ChatGPT Image May 9, 2025, 09_48_11 AM.png",
    nutrition: {
      calories: "320 kcal",
      protein: "28g",
      carbs: "12g",
      fat: "18g",
    },
    ingredients: [
      { name: "Chicken breast", amount: "200g" },
      { name: "Mixed greens", amount: "100g" },
      { name: "Cherry tomatoes", amount: "50g" },
      { name: "Cucumber", amount: "50g" },
      { name: "Olive oil", amount: "1 tbsp" },
      { name: "Lemon juice", amount: "1 tbsp" },
      { name: "Salt", amount: "1/4 tsp" },
      { name: "Black pepper", amount: "1/4 tsp" },
    ],
    steps: [
      "Season chicken breast with salt and pepper.",
      "Grill chicken for 6-7 minutes on each side until fully cooked.",
      "Slice the chicken into strips once cooled.",
      "In a large bowl, combine mixed greens, cherry tomatoes, and cucumber.",
      "Add the sliced chicken on top.",
      "Drizzle with olive oil and lemon juice.",
      "Toss gently and serve immediately.",
    ],
  },
  {
    id: "R002",
    name: "Chocolate Chip Cookies",
    category: "notHealthy",
    image: "ChatGPT Image May 9, 2025, 09_48_14 AM.png",
    nutrition: {
      calories: "180 kcal",
      protein: "2g",
      carbs: "24g",
      fat: "9g",
    },
    ingredients: [
      { name: "All-purpose flour", amount: "150g" },
      { name: "Butter", amount: "100g" },
      { name: "Brown sugar", amount: "100g" },
      { name: "White sugar", amount: "50g" },
      { name: "Egg", amount: "1" },
      { name: "Vanilla extract", amount: "1 tsp" },
      { name: "Chocolate chips", amount: "100g" },
      { name: "Baking soda", amount: "1/2 tsp" },
      { name: "Salt", amount: "1/4 tsp" },
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Cream together butter, brown sugar, and white sugar.",
      "Beat in egg and vanilla extract.",
      "In a separate bowl, mix flour, baking soda, and salt.",
      "Gradually add dry ingredients to the wet mixture.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto baking sheets.",
      "Bake for 10-12 minutes until edges are golden brown.",
      "Allow cookies to cool on the baking sheet for 5 minutes before transferring to a wire rack.",
    ],
  },
  {
    id: "R003",
    name: "Vegetable Stir Fry",
    category: "healthy",
    image: "ChatGPT Image May 9, 2025, 09_48_17 AM.png",
    nutrition: {
      calories: "250 kcal",
      protein: "8g",
      carbs: "30g",
      fat: "12g",
    },
    ingredients: [
      { name: "Broccoli", amount: "100g" },
      { name: "Bell peppers", amount: "100g" },
      { name: "Carrots", amount: "50g" },
      { name: "Snow peas", amount: "50g" },
      { name: "Garlic", amount: "2 cloves" },
      { name: "Ginger", amount: "1 tbsp" },
      { name: "Soy sauce", amount: "2 tbsp" },
      { name: "Sesame oil", amount: "1 tbsp" },
      { name: "Rice", amount: "150g" },
    ],
    steps: [
      "Cook rice according to package instructions.",
      "Heat sesame oil in a wok or large frying pan.",
      "Add minced garlic and ginger, stir for 30 seconds.",
      "Add vegetables and stir fry for 5-7 minutes until crisp-tender.",
      "Add soy sauce and toss to coat.",
      "Serve hot over cooked rice.",
    ],
  },
  {
    id: "R005",
    name: "Quinoa Bowl",
    category: "healthy",
    image: "ChatGPT Image May 9, 2025, 09_48_18 AM.png",
    nutrition: {
      calories: "380 kcal",
      protein: "15g",
      carbs: "45g",
      fat: "16g",
    },
    ingredients: [
      { name: "Quinoa", amount: "100g" },
      { name: "Avocado", amount: "1/2" },
      { name: "Cherry tomatoes", amount: "50g" },
      { name: "Cucumber", amount: "50g" },
      { name: "Chickpeas", amount: "100g" },
      { name: "Feta cheese", amount: "30g" },
      { name: "Olive oil", amount: "1 tbsp" },
      { name: "Lemon juice", amount: "1 tbsp" },
      { name: "Salt", amount: "1/4 tsp" },
      { name: "Black pepper", amount: "1/4 tsp" },
    ],
    steps: [
      "Cook quinoa according to package instructions.",
      "Drain and rinse chickpeas.",
      "Dice avocado, halve cherry tomatoes, and slice cucumber.",
      "In a bowl, combine cooked quinoa, chickpeas, avocado, tomatoes, and cucumber.",
      "Crumble feta cheese over the top.",
      "Drizzle with olive oil and lemon juice.",
      "Season with salt and pepper, toss gently, and serve.",
    ],
  },
  {
    id: "R006",
    name: "Pasta Carbonara",
    category: "notHealthy",
    image: "ChatGPT Image May 9, 2025, 09_48_20 AM.png",
    nutrition: {
      calories: "650 kcal",
      protein: "25g",
      carbs: "70g",
      fat: "30g",
    },
    ingredients: [
      { name: "Spaghetti", amount: "200g" },
      { name: "Bacon", amount: "100g" },
      { name: "Eggs", amount: "2" },
      { name: "Parmesan cheese", amount: "50g" },
      { name: "Garlic", amount: "2 cloves" },
      { name: "Black pepper", amount: "1/2 tsp" },
      { name: "Salt", amount: "1/4 tsp" },
      { name: "Olive oil", amount: "1 tbsp" },
    ],
    steps: [
      "Cook spaghetti in salted water according to package instructions.",
      "While pasta cooks, heat olive oil in a large pan.",
      "Add diced bacon and minced garlic, cook until bacon is crispy.",
      "In a bowl, whisk eggs and grated Parmesan cheese.",
      "Drain pasta, reserving 1/4 cup of pasta water.",
      "Add hot pasta to the pan with bacon, remove from heat.",
      "Quickly stir in the egg and cheese mixture, adding pasta water as needed to create a creamy sauce.",
      "Season with black pepper and serve immediately.",
    ],
  },
]

// Check if user is logged in
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  if (isLoggedIn) {
    loginBtn.style.display = "none"
    registerBtn.style.display = "none"
    logoutBtn.style.display = "block"
  } else {
    loginBtn.style.display = "block"
    registerBtn.style.display = "block"
    logoutBtn.style.display = "none"

    // Redirect to login page if not logged in
    window.location.href = "login.html"
  }
}

// Logout function
function logout() {
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("user")
  checkLoginStatus()
}

// Initialize page
function init() {
  checkLoginStatus()
  displayFavorites()

  // Event listeners
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })

  logoutBtn.addEventListener("click", logout)
}

// Display favorite recipes
function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || []

  if (favorites.length === 0) {
    noFavorites.style.display = "block"
    favoritesGrid.style.display = "none"
    return
  }

  noFavorites.style.display = "none"
  favoritesGrid.style.display = "grid"
  favoritesGrid.innerHTML = ""

  // Get favorite recipes
  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id))

  favoriteRecipes.forEach((recipe) => {
    const recipeCard = document.createElement("div")
    recipeCard.className = "recipe-card"
    recipeCard.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class="recipe-content">
                <span class="recipe-category ${recipe.category}">${recipe.category === "healthy" ? "Healthy" : "Not Healthy"}</span>
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-info">
                    <span class="recipe-id">ID: ${recipe.id}</span>
                    <div class="recipe-actions">
                        <button class="favorite-btn favorite-active" data-id="${recipe.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <a href="#" class="view-recipe" data-id="${recipe.id}">View Recipe</a>
            </div>
        `

    favoritesGrid.appendChild(recipeCard)

    // Add event listener to view recipe button
    const viewRecipeBtn = recipeCard.querySelector(".view-recipe")
    viewRecipeBtn.addEventListener("click", function (e) {
      e.preventDefault()
      const recipeId = this.getAttribute("data-id")
      showRecipeDetails(recipeId)
    })

    // Add event listener to favorite button
    const favoriteBtn = recipeCard.querySelector(".favorite-btn")
    favoriteBtn.addEventListener("click", function () {
      const recipeId = this.getAttribute("data-id")
      toggleFavorite(recipeId, this)
      // Refresh the favorites display
      displayFavorites()
    })
  })
}

// Show recipe details in modal
function showRecipeDetails(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId)
  if (!recipe) return

  recipeDetails.innerHTML = `
        <div class="recipe-detail-header">
            <div class="recipe-detail-title">
                <h2>${recipe.name}</h2>
                <span class="recipe-category ${recipe.category}">${recipe.category === "healthy" ? "Healthy" : "Not Healthy"}</span>
            </div>
            <div class="recipe-detail-actions">
                <button class="favorite-btn favorite-active" data-id="${recipe.id}">
                    <i class="fas fa-heart"></i>
                    Remove from Favorites
                </button>
            </div>
        </div>
        
        <div class="recipe-detail-content">
            <div class="recipe-detail-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            
            <div class="recipe-detail-info">
                <div class="nutrition-info">
                    <h3>Nutrition Information</h3>
                    <div class="nutrition-grid">
                        <div class="nutrition-item">
                            <span class="nutrition-label">Calories</span>
                            <span class="nutrition-value">${recipe.nutrition.calories}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Protein</span>
                            <span class="nutrition-value">${recipe.nutrition.protein}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Carbs</span>
                            <span class="nutrition-value">${recipe.nutrition.carbs}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Fat</span>
                            <span class="nutrition-value">${recipe.nutrition.fat}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="recipe-ingredients">
            <h3>Ingredients</h3>
            <div class="ingredients-list">
                ${recipe.ingredients
                  .map(
                    (ing) => `
                    <div class="ingredient-item">
                        <i class="fas fa-check"></i>
                        <span>${ing.name} - ${ing.amount}</span>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
        
        <div class="recipe-steps">
            <h3>Instructions</h3>
            <div class="steps-list">
                ${recipe.steps
                  .map(
                    (step, index) => `
                    <div class="step-item">${step}</div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `

  modal.style.display = "block"

  // Add event listener to favorite button in modal
  const favoriteBtn = recipeDetails.querySelector(".favorite-btn")
  favoriteBtn.addEventListener("click", function () {
    const recipeId = this.getAttribute("data-id")
    toggleFavorite(recipeId, this)
    // Refresh the favorites display
    displayFavorites()
  })
}

// Toggle favorite status of a recipe
function toggleFavorite(recipeId, button) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || []

  // Remove from favorites (since we're in the favorites page)
  favorites = favorites.filter((id) => id !== recipeId)
  button.classList.remove("favorite-active")
  button.querySelector("i").className = "fas fa-heart-o"

  if (button.textContent.includes("Remove")) {
    button.textContent = " Add to Favorites"
    button.prepend(document.createElement("i"))
    button.querySelector("i").className = "fas fa-heart-o"
  }

  localStorage.setItem("favorites", JSON.stringify(favorites))
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", init)

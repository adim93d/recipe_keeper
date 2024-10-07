
let recipeForm = document.getElementById('recipeForm');
let recipeNameForm = document.getElementById('recipeName');
let ingredientsForm = document.getElementById('listIngredients');
let stepsForm = document.getElementById('steps');
let imgForm = document.getElementById('recipeImage')
// let recipeSubmitButton = document.getElementById('recipeSubmitButton');
let displayArea = document.getElementById('recipes');
let recipes = [];

recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('form submitted')

    let enteredRecipeName = recipeNameForm.value;
    let enteredIngredients = ingredientsForm.value;
    let enteredSteps = stepsForm.value;
    let enteredImgUrl = imgForm.value;
    let newRecipe = {
        name: enteredRecipeName,
        ingredients: enteredIngredients,
        steps: enteredSteps,
        image: enteredImgUrl
    };
    // We'll be adding more functionality here in the next steps.
    displayRecipe(newRecipe);
    recipeForm.reset();
});

function displayRecipe(recipe) {
    console.log('Displaying recipe:', recipe);  // Debug log

    // create a div for the new recipe
    let recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe-card');  // Optional: Add a class for styling

    // Create elements for the recipe's name, ingredients, and steps
    let recipeNameElement = document.createElement('h3');
    recipeNameElement.textContent = recipe.name;

    let ingredientsElement = document.createElement('p');
    ingredientsElement.textContent = "Ingredients: " + recipe.ingredients;

    let stepsElement = document.createElement('p');
    stepsElement.textContent = "Steps: " + recipe.steps;

    let imageElement = document.createElement('img');
    imageElement.src = recipe.image;
    imageElement.alt = "Image: " + recipe.name;
    imageElement.width = 200;
    // imageElement.height = 200;

    // Append the created elements to the recipeDiv
    recipeDiv.appendChild(recipeNameElement);
    recipeDiv.appendChild(ingredientsElement);
    recipeDiv.appendChild(stepsElement);
    recipeDiv.appendChild(imageElement);

    // Add the new recipe div to the display area
    displayArea.appendChild(recipeDiv);
}





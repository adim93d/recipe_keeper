let recipeForm = document.getElementById('recipeForm');
let recipeNameForm = document.getElementById('recipeName');
let ingredientsForm = document.getElementById('listIngredients');
let stepsForm = document.getElementById('steps');
let imgForm = document.getElementById('recipeImage');
let displayArea = document.getElementById('recipes');

async function fetchUserData(resource) {
    try {
        const response = await fetch(resource);
        const data = await response.json();        
        return data 
    } catch (error) {
        console.log('Error fetching data', error);
    }
    
}

function formRecipeData(form){
    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log('form submitted');

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
        form.reset();
        return newRecipe;

    });
}

fetchUserData('recipes.json');

// Display a recipe on the page
function displayRecipe(recipe) {
    console.log('Displaying recipe:', recipe);  // Debug log

    // Create a div for the new recipe
    let recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe-card');  // Add class for styling

    // Create elements for the recipe's name, ingredients, steps, and image
    let recipeNameElement = document.createElement('h3');
    recipeNameElement.textContent = recipe.name;

    let ingredientsElement = document.createElement('p');
    ingredientsElement.textContent = "Ingredients: " + recipe.ingredients;

    let stepsElement = document.createElement('p');
    stepsElement.textContent = "Steps: " + recipe.steps;

    let imageElement = document.createElement('img');
    imageElement.src = recipe.image;  // Set the src to the image URL
    imageElement.alt = "Image of " + recipe.name;
    imageElement.width = 200;  // Optional: Set width

    // Add a delete button for each recipe
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Recipe";
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        // deleteRecipe(recipe);
        // recipeDiv.remove();  // Remove the recipe from the page
    });

    // Append the created elements to the recipeDiv
    recipeDiv.appendChild(recipeNameElement);
    recipeDiv.appendChild(ingredientsElement);
    recipeDiv.appendChild(stepsElement);
    recipeDiv.appendChild(imageElement);
    recipeDiv.appendChild(deleteButton);

    // Add the new recipe div to the display area
    displayArea.appendChild(recipeDiv);
}

// // Load recipes from local storage when the page loads
// window.addEventListener('DOMContentLoaded', function() {
//     if (localStorage.getItem('recipes')) {
//         recipes = JSON.parse(localStorage.getItem('recipes'));
//         // Display the loaded recipes on the page
//         recipes.forEach(recipe => displayRecipe(recipe));
//     }
// });

// // Save recipes to local storage
// function saveToLocalStorage() {
//     localStorage.setItem('recipes', JSON.stringify(recipes));
// }

// // Handle form submission
// recipeForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('form submitted');

//     // Collect input values
//     let enteredRecipeName = recipeNameForm.value;
//     let enteredIngredients = ingredientsForm.value;
//     let enteredSteps = stepsForm.value;
//     let enteredImgUrl = imgForm.value;

//     // Create a new recipe object
//     let newRecipe = {
//         name: enteredRecipeName,
//         ingredients: enteredIngredients,
//         steps: enteredSteps,
//         image: enteredImgUrl
//     };

//     // Add the new recipe to the array
//     recipes.push(newRecipe);

//     // // Save updated recipes array to local storage
//     // saveToLocalStorage();

//     // Display the new recipe
//     displayRecipe(newRecipe);

//     // Reset the form after adding the recipe
//     recipeForm.reset();
// });



// Delete a recipe
function deleteRecipe(recipeToDelete) {
    // Find the index of the recipe to be deleted
    recipes = recipes.filter(recipe => recipe.name !== recipeToDelete.name);

    // Save the updated recipes array to local storage
    // saveToLocalStorage();
}


function readJson(){}

function writeJson(){}

function createJson(){}

function createHtmlElements(){}

function readRecipe(){}

function formRecipe(){}

function addRecipe(){}

function updateRecipe(){}

function deleteRecipe(){}

window.onload = () => {}
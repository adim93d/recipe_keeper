let recipeForm = document.getElementById('recipeForm');
let recipeNameForm = document.getElementById('recipeName');
let ingredientsForm = document.getElementById('listIngredients');
let stepsForm = document.getElementById('steps');
let imgForm = document.getElementById('recipeImage');
let displayArea = document.getElementById('recipes');
let recipeSubmitButton = document.getElementById('recipeSubmitButton');
let editMode = false;
let currentRecipeId = null;

async function fetchRecipeData() {
    try {
        const response = await fetch('http://localhost:8000/recipes');
        const data = await response.json();
        createHtmlElements(data);
        return data;
    } catch (error) {
        console.log('Error fetching data', error);
    }
}

// Handle form submission for both adding and editing recipes
recipeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('form submitted');

    let enteredRecipeName = recipeNameForm.value;
    let enteredIngredients = ingredientsForm.value.split(', ');
    let enteredSteps = stepsForm.value;
    let enteredImgUrl = imgForm.value;

    let newRecipe = {
        name: enteredRecipeName,
        ingredients: enteredIngredients,
        steps: enteredSteps,
        img: enteredImgUrl
    };

    if (editMode) {
        // Edit existing recipe
        await fetchUpdateRecipe(currentRecipeId, newRecipe);
        recipeSubmitButton.textContent = 'Add Recipe';  // Reset button label
        editMode = false;  // Reset edit mode
    } else {
        // Add new recipe
        await fetchPostNewRecipe(newRecipe);
    }

    // Reset the form
    recipeForm.reset();
    await fetchRecipeData();
});

function createHtmlElements(recipesData) {
    let recipeContainer = displayArea;
    recipeContainer.innerHTML = '';

    recipesData.forEach(recipe => {
        let recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe-card');

        let recipeNameElement = document.createElement('h3');
        recipeNameElement.textContent = recipe.name;

        let ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = "Ingredients: " + recipe.ingredients.join(", ");

        let stepsElement = document.createElement('p');
        stepsElement.textContent = "Steps: " + recipe.steps;

        let imageElement = document.createElement('img');
        imageElement.src = recipe.img;
        imageElement.alt = "Image of " + recipe.name;
        imageElement.width = 200;

        // Edit Button
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            loadRecipeForEditing(recipe);
            smoothScrollToForm();
        });

        // Delete Button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', async () => {
            await fetchDeleteRecipe(recipe.id);
            await fetchRecipeData();
        });

        recipeDiv.appendChild(recipeNameElement);
        recipeDiv.appendChild(ingredientsElement);
        recipeDiv.appendChild(stepsElement);
        recipeDiv.appendChild(imageElement);
        recipeDiv.appendChild(editButton);
        recipeDiv.appendChild(deleteButton);

        recipeContainer.appendChild(recipeDiv);
    });
}

function loadRecipeForEditing(recipe) {
    recipeNameForm.value = recipe.name;
    ingredientsForm.value = recipe.ingredients.join(", ");
    stepsForm.value = recipe.steps;
    imgForm.value = recipe.img;
    currentRecipeId = recipe.id;
    recipeSubmitButton.textContent = 'Edit Recipe';
    editMode = true;
}

// Function to scroll smoothly to the form
function smoothScrollToForm() {
    document.querySelector('aside').scrollIntoView({ behavior: 'smooth' });
}

// API for adding a new recipe
async function fetchPostNewRecipe(newRecipeData) {
    try {
        await fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipeData)
        });
    } catch (error) {
        console.error('Error: ', error);
    }
}

// API for updating an existing recipe
async function fetchUpdateRecipe(recipeId, updatedRecipeData) {
    try {
        await fetch(`http://localhost:8000/recipes/${recipeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRecipeData)
        });
    } catch (error) {
        console.error('Error: ', error);
    }
}

// API for deleting a recipe
async function fetchDeleteRecipe(recipeId) {
    try {
        await fetch(`http://localhost:8000/recipes/${recipeId}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Error: ', error);
    }
}

// On window load, fetch recipes from the FastAPI server
window.onload = () => {
    fetchRecipeData();
};

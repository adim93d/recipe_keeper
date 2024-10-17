let recipeForm = document.getElementById('recipeForm');
let recipeNameForm = document.getElementById('recipeName');
let ingredientsForm = document.getElementById('listIngredients');
let stepsForm = document.getElementById('steps');
let imgForm = document.getElementById('recipeImage');
let displayArea = document.getElementById('recipes');

async function fetchRecipeData() {
    try {
        // Update to fetch from the FastAPI endpoint
        const response = await fetch('http://localhost:8000/recipes');
        const data = await response.json();
        createHtmlElements(data);       
        return data;
    } catch (error) {
        console.log('Error fetching data', error);
    }
}

// Handle form submission and POST data
recipeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('form submitted');

    let enteredRecipeName = recipeNameForm.value;
    let enteredIngredients = ingredientsForm.value.split(', ');
    let enteredSteps = stepsForm.value;
    let enteredImgUrl = imgForm.value;

    let newRecipe = {
        name: enteredRecipeName,
        ingredients: enteredIngredients,  // Convert to list
        steps: enteredSteps,
        img: enteredImgUrl
    };
    console.log('new recipe:', newRecipe);

    // Reset the form
    recipeForm.reset();

    // Send POST request with the new recipe data
    await fetchPostNewRecipe(newRecipe);

    // Re-fetch the updated recipe data from the API
    await fetchRecipeData();
});

function createHtmlElements(recipesData) {
    let recipeContainer = displayArea;
    recipeContainer.innerHTML = '';  // Clear the previous content before adding new ones

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
        imageElement.src = recipe.img;  // Set the src to the image URL
        imageElement.alt = "Image of " + recipe.name;
        imageElement.width = 200;  // Optional: Set width

        recipeDiv.appendChild(recipeNameElement);
        recipeDiv.appendChild(ingredientsElement);
        recipeDiv.appendChild(stepsElement);
        recipeDiv.appendChild(imageElement);

        displayArea.appendChild(recipeDiv);
    });
}

async function fetchPostNewRecipe(newRecipeData) {
    try {
        const response = await fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipeData)
        });

        const result = await response.json();
        console.log('Success: ', result);
    } catch (error) {
        console.error('Error: ', error);
    }
}

// On window load, fetch recipes from the FastAPI server
window.onload = () => {
    fetchRecipeData();
};

// function updateRecipe(){}

// function deleteRecipe(){}

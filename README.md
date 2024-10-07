
# Recipe Keeper

Recipe Keeper is a simple web-based application that allows users to add, view, and manage their favorite recipes. It saves recipes to the browser's local storage so that they are persisted across sessions. Users can add recipes with a name, ingredients, preparation steps, and an image URL. Recipes can also be deleted, and all actions are reflected in the local storage.

## Features

- Add new recipes with a name, ingredients, preparation steps, and image URL.
- View added recipes on the same page in an organized layout.
- Save all recipes to local storage, making them available across browser sessions.
- Delete recipes from the page and local storage.

## Technologies Used

- **HTML5**: Structure of the web application.
- **CSS3**: Styling for layout, responsiveness, and design.
- **JavaScript**: Handles form submissions, local storage interaction, and dynamic content updates.
- **LocalStorage**: Saves the recipes in the browser so they are available across page reloads.

## Project Structure

- `homepage.html`: The main HTML file containing the structure of the application.
- `styles.css`: CSS file for styling the form, recipe cards, and responsiveness.
- `function.js`: JavaScript file that handles form submissions, displaying recipes, saving to local storage, and deletion of recipes.

## How to Use

1. Open `homepage.html` in a web browser.
2. Fill out the "Add Recipe" form with a recipe name, ingredients (separated by commas), preparation steps, and an image URL for the dish.
3. Click "Add Recipe" to save the recipe. It will be displayed on the right side of the page.
4. Recipes are stored in the browser's local storage, so they will persist across page reloads.
5. To delete a recipe, click the "Delete Recipe" button next to the corresponding recipe.

## File Descriptions

- `homepage.html`: Contains the HTML structure with the form for adding recipes and the section to display saved recipes.
- `styles.css`: Contains the styling for a modern, clean UI, with responsive behavior for smaller screens.
- `function.js`: Contains the logic to handle form submissions, save/load/delete recipes from local storage, and dynamically update the UI.

## Responsive Design

The layout is designed to be responsive, with the form on the left side and the recipes displayed on the right side. On smaller screens, the layout adjusts to stack the form and recipes vertically for a better mobile experience.

## Future Enhancements

- Add functionality to edit existing recipes.
- Implement categories or tags for recipes.
- Allow users to upload an image instead of providing a URL.

## License

This project is open-source and available under the MIT License.

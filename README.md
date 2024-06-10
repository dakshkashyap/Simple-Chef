# Project Title: SimpleChef: Quick Recipes with 3 Ingredients

## Overview
SimpleChef is a full-stack web application designed to help users find and share simple recipes that require only three ingredients. The app aims to make cooking easier and less time-consuming for busy individuals, particularly students and working professionals.

### Problem
Many people, especially students and busy professionals, struggle with finding the time and resources to cook healthy meals. Complex recipes with long lists of ingredients can be overwhelming and impractical for those with limited time and kitchen supplies. SimpleChef addresses this problem by providing a platform where users can discover and share recipes that require only three ingredients, making meal preparation quick, simple, and accessible.

### User Profile

- **Primary Users**: Undergraduate students, working professionals, and anyone looking for quick and easy meal solutions.
- **Usage**: Users will search for recipes using three ingredients they have on hand, view recipe details, rate and review recipes, and save their favorites. Logged-in users can also add their own recipes and manage their profiles.
- **Special Considerations**: The app should be intuitive and mobile-friendly to cater to users who may access it on-the-go.

### Features

1. Recipe Search:
As a user, I want to enter three ingredients and find matching recipes.
If no exact match is found, suggest similar recipes.

2. Recipe Grid:
As a user, I want to see a grid of matching recipes with images and brief descriptions.

3. Recipe Details:
As a user, I want to view detailed instructions, ingredients, and user reviews for a selected recipe.

4. User Authentication:
As a user, I want to sign up, log in, and log out securely.

5. Add Recipes:
As a logged-in user, I want to add new recipes to the database.

## Implementation

### Tech Stack

- Frontend: HTML, CSS/SASS, JavaScript, React
- Backend: Node.js, Express.js
- Database: MySQL, Knex.js
- Libraries: Axios for HTTP requests, JWT for authentication, CORS for cross-origin requests

> [!NOTE]
> APIs: No external data sources required; all data will be managed within the app's own database.

### Sitemap

1. Landing Page:
Search bar for entering three ingredients.

2. Recipe Grid Page:
Displays a grid of recipes matching the search criteria.

3. Recipe Details Page:
Shows detailed recipe information, user reviews, and ratings.

4. Login Page:
Allows users to log into their accounts.

5. Signup Page:
Allows new users to create an account.

6. Add Recipe Page:
Form for logged-in users to submit new recipes.

### Mockups

Create mockups using Figma or hand-drawn sketches to visualize the layout and design of each page.

### Data

- **Users**: id, name, username, password (hashed), email
- **Recipes**: id, title, ingredients, instructions, image URL

### Endpoints

- Auth:
  - POST /signup: Create a new user account
  - POST /login: Authenticate the user and return a JWT

- Recipes:
  - GET /recipes Get a list of all recipes
  - GET /recipes/:id: Get details of a specific recipe
  - GET /recipes/category/:category: Get recipes by category
  - POST /recipes: Add a new recipe (authenticated)
  - PUT /recipes/:id:  Edit a recipe
  - DELETE /recipes/:id: Delete a recipe (authenticated)

- Users:
  - GET /users: Get all users

- Search:
  - POST /search: Search recipes by ingredients

### Auth
- Implement user authentication using JWT.
- Protect routes for adding recipes, viewing profile, and deleting account.
- Store JWT in HttpOnly cookies for security.

### Roadmap:

- Day 1-5:
  Set up the project structure.
  Implement user authentication (signup, login, logout).
  Create the landing page with search functionality.
  Develop the recipe grid page and recipe details page.
  Implement adding recipes functionality for logged-in users.
  Create user profile page with edit and delete options.

- Day 5-9:
  Integrate frontend with backend using Axios.
  Test all functionalities thoroughly.
  Fix bugs and optimize performance.

- Day 9-12:
Finalize design and UI/UX improvements.
Prepare for deployment and deploy the app.
Collect user feedback and make final adjustments.

### Nice-to-haves:

- Advanced Search: Allow users to filter recipes by category, cooking time, and dietary restrictions.
- Social Features: Enable users to follow each other and see a feed of their friends' recipes.
- Notifications: Notify users about new recipes from their followed users or new reviews on their recipes.
- Recipe Collections: Allow users to create and share collections of their favorite recipes.
- User Profile: As a logged-in user, I want to view and edit my profile, see my favorite recipes, and delete my account.

## Requirement: RecipeRack — Recipe Management

### Scenario: App header displays RecipeRack branding
GIVEN a logged-in user
WHEN they view any page of the application
THEN the header displays the name "RecipeRack"

### Scenario: Browse recipe card grid
GIVEN a logged-in user
WHEN they navigate to the home page
THEN all recipes are displayed as cards in a responsive grid, each showing the recipe title and a favorite indicator

### Scenario: Add a recipe
GIVEN a logged-in user
WHEN they submit a new recipe with a title, at least one ingredient, and instructions
THEN the recipe is saved and immediately appears in the card grid

### Scenario: Add a recipe with missing required fields
GIVEN a logged-in user
WHEN they submit a recipe form with any required field (title, ingredients, or instructions) empty
THEN a validation error is returned and the recipe is not saved

### Scenario: Add a recipe with an empty ingredients list
GIVEN a logged-in user
WHEN they submit a recipe with no ingredients entered
THEN a validation error is returned indicating at least one ingredient is required

### Scenario: View recipe detail
GIVEN a logged-in user
WHEN they click on a recipe card
THEN the full recipe is displayed, including title, ingredients list, and instructions

### Scenario: Edit a recipe
GIVEN a logged-in user viewing a recipe
WHEN they submit updated fields
THEN the recipe is updated and the changes are reflected in the grid and detail view

### Scenario: Delete a recipe
GIVEN a logged-in user viewing a recipe
WHEN they confirm deletion
THEN the recipe is removed from the database and no longer appears in the card grid

### Scenario: Recipe not found
GIVEN a logged-in user
WHEN they request a recipe that does not exist or has been deleted
THEN the response is 404 Not Found and an appropriate message is shown

### Scenario: Search recipes by title
GIVEN a logged-in user with one or more recipes saved
WHEN they enter text in the search field
THEN only recipes whose titles contain the search text (case-insensitive) are displayed in the grid

### Scenario: Search returns no results
GIVEN a logged-in user
WHEN they search for a title that matches no existing recipes
THEN an empty-state message is displayed and no cards are shown

### Scenario: Toggle favorite on a recipe
GIVEN a logged-in user viewing the recipe card grid
WHEN they click the favorite toggle on a recipe card
THEN the recipe's favorite status is flipped and persisted, and the indicator updates immediately

### Scenario: Unauthenticated access
GIVEN an unauthenticated user
WHEN they attempt to access any recipe page or API endpoint
THEN the response is 401 Unauthorized and they are redirected to the login page

### Scenario: Unauthorized role
GIVEN a user without the required role
WHEN they attempt to access a protected resource
THEN the response is 403 Forbidden

### Scenario: Upstream database failure
GIVEN the database is unavailable
WHEN a user attempts to load, create, update, or delete a recipe
THEN a 503 Service Unavailable error is returned and a user-friendly error message is displayed

@nfr
### Scenario: Recipe grid load time
GIVEN normal load conditions with up to 500 recipes
WHEN the recipe card grid page is loaded
THEN the response completes within 300ms at p95

## Auth
- model: full_auth
- roles: user

## Deployments
- postgresql
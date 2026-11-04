# Chef Claude

Chef Claude is a React app for keeping track of ingredients and asking Claude to suggest recipes based on what's available. Recipes are displayed in Markdown format.

## Features

- Add ingredients to a list.
- Request a recipe recommendation when the list contains more than three ingredients.
- Display AI-generated recipes.

## Technologies

- React
- Vite
- Anthropic SDK
- react-markdown

## Requirements

- Node.js dan npm
- Anthropic API key

## Run locally

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env`, then add your API key:

   ```bash
   ANTHROPIC_API_KEY=your_api_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open the local URL shown by Vite in the terminal. `npm start` is also available as an alias.

## How to use

1. Enter ingredients one at a time, then select **Add ingredient**.
2. Once you have more than three ingredients, select **Get a recipe**.
3. Wait for the recipe recommendation to appear on the page.

## npm scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| npm run dev     | Start the Vite development server   |
| npm start       | Alias for starting the dev server   |
| npm run build   | Create a production build in `dist` |
| npm run preview | Preview the local build             |

## Main project files

- `App.jsx` — organizes the header and main content.
- `components/Main.jsx` — manages ingredients, the form, and recipe requests.
- `components/IngredientsList.jsx` — displays the ingredient list and recipe button.
- `components/ClaudeRecipe.jsx` — renders the Markdown recipe.
- `components/Header.jsx` — displays the logo and title.
- `ai.js` — sends recipe requests to Anthropic.
- `index.css` — app styles.

## Security note

Do not use this configuration for public deployment. Vite currently includes `ANTHROPIC_API_KEY` in the browser bundle, and the SDK is allowed to run in the browser. This means the API key may be visible to app users. For deployment, move Anthropic calls to a backend or serverless function, and store the API key in the server environment.

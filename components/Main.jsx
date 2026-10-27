import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;
    setIngredients((currentIngredients) => [
      ...currentIngredients,
      newIngredient,
    ]);
    e.currentTarget.reset();
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}

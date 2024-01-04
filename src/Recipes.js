const Recipes = () => {

  return ( 
    <main className="recipe-wrapper">
      <div id="loader"></div>
      <div className="recipe-container container-fluid">
        <h1 className="recipe-title">Recipe Name:</h1>
      <div className="recipe-main">
        <div className="ingredients">
          <h1 className="ingredient-title">
            Ingredients
          </h1>
          <p className="ingredient-para">

          </p>
        </div>
        <div className="instructions">
          <h1 className="instruction-title">
            Instructions
          </h1>
          <p className="instructions-para">

          </p>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Recipes;
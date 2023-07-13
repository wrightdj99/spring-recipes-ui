function RecipeDetailsHelper({recipeDetails}) {
    return(
        <div>
            <img
                src={(recipeDetails.meals[0].strMealThumb !== "")?recipeDetails.meals[0].strMealThumb:""}
                alt="Meal image"
            />
            <p>Ingredients: </p>
            <div className="ingredientDetails">
                <p>{(recipeDetails.meals[0].strIngredient1 !== "")?recipeDetails.meals[0].strIngredient1:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient2 !== "")?recipeDetails.meals[0].strIngredient2:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient3 !== "")?recipeDetails.meals[0].strIngredient3:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient4 !== "")?recipeDetails.meals[0].strIngredient4:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient5 !== "")?recipeDetails.meals[0].strIngredient5:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient6 !== "")?recipeDetails.meals[0].strIngredient6:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient7 !== "")?recipeDetails.meals[0].strIngredient7:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient8 !== "")?recipeDetails.meals[0].strIngredient8:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient9 !== "")?recipeDetails.meals[0].strIngredient9:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient10 !== "")?recipeDetails.meals[0].strIngredient10:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient11 !== "")?recipeDetails.meals[0].strIngredient11:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient12 !== "")?recipeDetails.meals[0].strIngredient12:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient13 !== "")?recipeDetails.meals[0].strIngredient13:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient14 !== "")?recipeDetails.meals[0].strIngredient14:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient15 !== "")?recipeDetails.meals[0].strIngredient15:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient16 !== "")?recipeDetails.meals[0].strIngredient16:""}</p>
                <p>{(recipeDetails.meals[0].strIngredient17 !== "")?recipeDetails.meals[0].strIngredient17:""}</p>
            </div>
            <p>Recipe Procedure:</p>
            <div className="recipeDetails">
                <p>{(recipeDetails.meals[0].strInstructions !== "")?recipeDetails.meals[0].strInstructions:""}</p>
            </div>
        </div>
    );
}

export default RecipeDetailsHelper;
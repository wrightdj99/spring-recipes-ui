import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeDetailsHelper from "./RecipeDetailsHelper";

function RandomRecipe() {
    const [recipeData, setRecipeData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:8080/recipes-random").then(res => {
            setLoading(false);
            console.log(res.data);
            setRecipeData(res.data);
        }, [])
    }, [])
    return(
        <div>
            <Header/>
            <div>
                <h3>If youre lacking inspiration for your next meal, try this!</h3>
            </div>
            <h1>{(!loading && recipeData.meals[0].strMeal !== "")?recipeData.meals[0].strMeal:""}</h1>
            {!loading?<RecipeDetailsHelper recipeDetails={recipeData}/>:""}
        </div>
    );
}

export default RandomRecipe;
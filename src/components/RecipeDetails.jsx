import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import RecipeDetailsHelper from "./RecipeDetailsHelper";

function RecipeDetails() {
    const [recipeDetails, setRecipeDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const {recipeName} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8080/get-recipe-by-name/" + recipeName).then(res=>{
            setLoading(false);
            console.log(recipeName);
            console.log(res.data);
            console.log(res.data.length);
            setRecipeDetails(res.data);
        }, [])
    }, [])
    return(
        <div>
            <Header/>
            <h2>{!loading?recipeDetails.meals[0].strMeal:""}</h2>
            {!loading?<RecipeDetailsHelper recipeDetails={recipeDetails}/>:""}
        </div>
    );
}

export default RecipeDetails;
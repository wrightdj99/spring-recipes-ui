import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Homepage() {
    const [recipeData, setRecipeData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get("http://localhost:8080/popular-recipes").then(res=>{
            setLoading(false);
            console.log(res.data);
            console.log(res.data.length);
            setRecipeData([res.data]);
        }, [])
    }, [])
    return(
        <div id="Homepage">
            <Header/>
            <ul>
                <h2>Featured Recipes</h2>
                {!loading?recipeData.map(payload=>(
                    payload.meals.map(meal => {
                        return <li key={meal.idMeal}><Link to={'/get-recipe-by-name/'+meal.strMeal.replaceAll(" ", "+")}>{meal.strMeal}</Link></li>
                    })
                )):""}
            </ul>

        </div>
    );
}

export default Homepage;
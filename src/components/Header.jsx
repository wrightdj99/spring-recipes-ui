import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
    const [mealToSearch, setMealToSearch] = useState();
    return(
        <div className="Header">
            <h1>Country Spring Recipes</h1>
            <input name="recipeSearch" placeholder="What are you looking for?" onChange={e => setMealToSearch(e.target.value)}/><br/>
            <Link to={"/random-recipe"}><button>Lacking Inspiration?</button></Link>
            <Link to={"/"}><button>Home</button></Link>
        </div>
    );
}

export default Header;
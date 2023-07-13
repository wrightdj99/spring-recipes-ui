import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import RandomRecipe from './components/RandomRecipe';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/random-recipe' element={<RandomRecipe/>}/>
        <Route path='/get-recipe-by-name/:recipeName' element={<RecipeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

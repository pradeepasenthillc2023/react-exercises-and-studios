import logo from './logo.svg';
import './App.css';
import RecipeDescription from '../src/Components/Description.js';
import RecipeIngredients from '../src/Components/Ingredients.js';
import RecipePhoto from '../src/Components/Photos';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
        <div className="recipePhotoBlock">

        <RecipeDescription />
        <RecipeIngredients />

     </div>
    </div>
    </div>
  );
}

export default App;
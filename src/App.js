import Home from "./Home";
import Recipes from "./Recipes";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="recipe" element={<Recipes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

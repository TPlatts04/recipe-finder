import {Link} from "react-router-dom"
import $ from "jquery"

const NavBar = () => {


  async function getInformation() {

    try {
      const SEARCH_VALUE = document.getElementById('search-bar').value;
        const API_KEY = 'USE YOUR API KEY';
        const API_URL = `https://api.api-ninjas.com/v1/recipe?query=${SEARCH_VALUE}` 
        const OBJ_FETCH = {
          method: 'GET',
          headers: {'X-Api-Key': API_KEY}
        }
    
        const RESPONSE = await fetch(API_URL, OBJ_FETCH)
        const DATA = await RESPONSE.json()
        const INGREDIENTS = DATA[0].ingredients.replace(/[;|]+/g, "\n");
        const INSTRUCTIONS = DATA[0].instructions.replace(/[;|]+/g, "\n")

      $(document).ready(function() {
  
        $('.ingredients').css("padding", "10px")
        $('.ingredient-para').text(INGREDIENTS).css('fontSize', '25px').css("color", "black")
        $('.instruction').css("padding","10px")
        $('.instructions-para').text(INSTRUCTIONS).css('fontSize', '25px').css("color", "black")
  
      })
      
    } catch (error) {
      $(document).ready(function() {
        $('.ingredients').html(`<h1>${new Error("An error has occured, likely due to search being empty")}</h1>`)
        $('.instructions').html(`<h1>${new Error("An error has occured, likely due to search being empty")}</h1>`)
      })
    }
  }


  return ( 
    <main className="nav-wrapper container-fluid">
      <nav className="nav-container">
        <div className="title-wrapper col-xs-2">
          <h1 className="title">Recipe Finder</h1>
        </div>
        <div className="search-wrapper col-xs-3">
          <input type="search" name="Search" id="search-bar"  className="search-bar" placeholder="Search Recipe..."/>
          <Link to="/recipe" className="recipe-link"><button type="button" className="search-btn" id="search-btn" onClick={getInformation}><i className="fa fa-search search-icon"></i></button></Link>
        </div>
        <div className="icon">
          <h2><i className="fa fa-utensils col-xs-4"></i></h2>
        </div>
      </nav>
    </main>
  );
}

export default NavBar;
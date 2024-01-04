import NavBar from "./Navbar";

const Home = () => {
  return ( 
    <main className="wrapper">
      <NavBar/>
      <div className="home-page-container container-fluid">
        <h1 className="home-title">
          Recipe Finder | Homepage
        </h1>
        <div className="information">
          <p className="inside-information">
            <h3 className="info-title">
              How does this Recipe Finder work from a Progammers perspective?
            </h3>
            <ol>
              <li>First things first, we create the base page, which is what you see here under the name of "Homepage". <br/>This will ensure that we have the base ready to start creating our project.</li>
              <li>Second of all we will go ahead and use a website of our choice to be able to grab recipe data as we <b>DO NOT</b><br/>want to be using an object within JavaScript to store <b>hundreds</b> potentially <b>thousands</b> of recipes within our code.<br/> The website which i have decided to use was <a target="_blank" rel="noreferrer" href="https://api-ninjas.com/api">API Ninjas.</a></li>
              <li>Thirdly, we will implement our API key within our JavaScript code like so <code>const APIKEY = 'your API key'</code>. Make sure that<br/> you store this in an async function. You can call this variable whatever you like but this ensures that you are able to use<br/> your APIKey whenever it is needed. Furthermore, you will then have to ensure that you can get data from the Recipe<br/> website by using an Object which uses the GET method keyword (If you are using API Ninjas, then create an object<br/> following these rules: <code>method: 'GET', url: 'https://api.api-ninjas.com/v1/recipe?query=' + query, headers:  <br/>'X-Api-Key': 'YOUR_API_KEY'</code>) where you can link the given API link into a URL key, which is all given to you via<br/> the chosen webiste. <b>IF YOU NEED HELP VIEW THE WEBSITES DOCUMENTATION</b></li>
              <li>Finally, once the the object has been created using the following rules, you can then assign a varialbe of any name,<br/> and use the await fetch (objName, APIUrl) so for example <code>const response = await fetch(ObjName, APIUrl)</code>. This will<br/> ensure that the repsonse is gathered before continuing to the next line of code. After this line you would want to<br/> declare a variable which holds the data which has been collected, in this variable use the same await and fetch<br/> method like so <code>const data = await fetch(response)</code>. Then you can go ahead and use the data as you please.</li>
            </ol>
          </p>
          <h1 className="started">
            Let's get started! Search a food you'd like the recipe for!
          </h1>
          <p className="note">NOTE: You have to be specific with the name</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
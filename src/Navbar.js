const NavBar = () => {
  return ( 
    <main className="nav-wrapper container-fluid">
      <nav className="nav-container">
        <div className="title-wrapper col-xs-2">
          <h1 className="title">Recipe Finder</h1>
        </div>
        <div className="search-wrapper col-xs-3">
          <input type="search" name="Search" id="search-bar"  className="search-bar" placeholder="Search Recipe..."/>
          <button type="button" className="search-btn" id="search-btn"><i className="fa fa-search search-icon"></i></button>
        </div>
        <div className="icon">
          <h2><i className="fa fa-utensils col-xs-4"></i></h2>
        </div>
      </nav>
    </main>
  );
}

export default NavBar;
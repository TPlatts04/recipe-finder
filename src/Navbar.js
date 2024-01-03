const NavBar = () => {
  return ( 
    <main className="nav-wrapper container-fluid">
      <nav className="nav-container">
        <div className="title-wrapper col-xs-4">
          <h1 className="title">Recipe Finder</h1>
        </div>
        <div className="search-wrapper">
          <input type="search" name="Search" id="search-bar"  className="search-bar"/>
        </div>
        <div className="icon">
          <h2><i className="fa fa-utensils"></i></h2>
        </div>
      </nav>
    </main>
  );
}

export default NavBar;
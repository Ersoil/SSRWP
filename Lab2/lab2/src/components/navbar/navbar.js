import "./navbar.css";

function Navbar(){
    return(
        <div className="Navbar">
            <nav className="nav">
              <div className="container">
                  <div className="nav-row">
                      <a href="./index.html" className="logo"><strong>Vaverko 4.205-1</strong> modern tools for web development</a>
                      <ul className="nav-list">
                          <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Home</a></li>
                          <li className="nav-list__item"><a href="./works.html" className="nav-list__link">Lab-works</a></li>
                      </ul>
                  </div>
              </div>
          </nav>
        </div>
    )
}
export default Navbar;
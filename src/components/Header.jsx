import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
// /assets/Logo.png
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light phone">
      <div className="container-fluid">
        <Link className="navbar-brand ms-2" to="/">
          <Avatar
            src="/assets/Logo.png"
            // className="shadow-lg"
            
            alt=""
            sx={{
              width: 55,
              height: 55,
              
            }}
          />
        </Link>
        <button
          className="navbar-toggler shadow"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/profile">
                About
              </Link>
            </li>
            <li className="nav-item dropdown mx-3 ">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul
                className="dropdown-menu phone shadow"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link
                    to="/residential-projects"
                    className="dropdown-item"
                    href="#"
                  >
                    Residential
                  </Link>
                </li>
                <li>
                  <Link
                    to="/commercial-projects"
                    className="dropdown-item"
                    href="#"
                  >
                    Commercial
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/clients">
                Cients
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/certificate">
                Certificates
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

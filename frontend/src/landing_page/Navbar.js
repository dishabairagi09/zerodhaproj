import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#fff", height:'3rem'}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="Logo" style={{width: "25%"}} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="google.comnavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex " role="search">
                <ul class="navbar-nav   mb-lg-0">
              <li class="nav-item">
                <Link class="nav-Link active" aria-current="page" to="/signup " style={{textDecoration:"none", color: "black "}}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link active" aria-current="page" to="/Login " style={{textDecoration:"none", color: "black "}}>
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link active" aria-current="page" to="/about" style={{textDecoration:"none", color: "black "}}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link active" aria-current="page" to="/product" style={{textDecoration:"none", color: "black "}}>
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link active" aria-current="page" to="/pricing" style={{textDecoration:"none", color: "black "}}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link active" aria-current="page" to="/support" style={{textDecoration:"none", color: "black "}}>
                  Support
                </Link>
              </li>
             
            </ul>
              </form>
            
          </div>
        </div>
      </nav>
  );
}

export default Navbar;

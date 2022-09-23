import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">Navigation</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

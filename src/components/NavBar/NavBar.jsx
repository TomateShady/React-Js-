import React from 'react';
import CartWidget from './CartWidget';
import './navBar.css';
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav id='navegador'>
          <Link to="/"><h2>MI TIENDA</h2></Link>
        <div className="navGroupList">
            <ul className="listaPeliculas">
                <li>
                     <Link to="/category/Pelicula"> Peliculas </Link>
                </li>
                <span>/</span>
                <li>
                     <Link to="/category/Serie">Series</Link>
                </li>
                <li>
                     <CartWidget />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar;
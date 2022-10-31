import React from 'react';
import CartWidget from './CartWidget';
import './navBar.css';

function NavBar() {
  return (
    <nav id='navegador'>
         <h2>MI TIENDA</h2>
        <div className="navGroupList">
            <ul className="listaPeliculas">
                <li>
                    <a href="/">Peliculas</a>
                </li>
                <li>
                    <a href="/">Series</a>
                </li>
                <li>
                <a href="#"><CartWidget counter="0" /> </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
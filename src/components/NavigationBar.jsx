import React from "react";
// Importing images
import logo from "./../assets/images/foxbel-music@3x.png";
// Importing estilos SASS
import "./../styles/component/navigationBar.scss";

const NavigationBar = () => {
  return (
    <>
      <aside className="menu">
        <div className="menu__container">
          <div className="menu__logo">
            <img src={logo} alt="Logo Foxbel Music" />
          </div>
          <h3 className="menu__heading">Mi Librería</h3>
          <ul className="menu__list">
            <li>
              <a href="#">Recientes</a>
            </li>
            <li>
              <a href="#">Artistas</a>
            </li>
            <li>
              <a href="#">Álbums</a>
            </li>
            <li>
              <a href="#">Canciones</a>
            </li>
            <li>
              <a href="#">Estaciones</a>
            </li>
          </ul>

          <h3 className="menu__heading">Playlist</h3>
          <ul className="menu__list">
            <li>
              <a href="#">Metal</a>
            </li>
            <li>
              <a href="#">Para bailar</a>
            </li>
            <li>
              <a href="#">Rock 90s</a>
            </li>
            <li>
              <a href="#">Baladas</a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default NavigationBar;

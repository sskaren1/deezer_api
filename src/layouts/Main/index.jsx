// Importando Hooks
import { useState } from "react";
// Importando react-router
import { Outlet } from "react-router-dom";
// Importing components
import NavigationBar from "./../../components/NavigationBar";
import SearchBar from "./../../components/SearchBar";
import MusicPlayer from "./../../components/MusicPlayer";
// Importando estilos
import "./../../styles/layouts/main.scss";

const Main = () => {
  const [btnMenu, setBtnMenu] = useState(false);

  const HandleBtnMenu = () => {
    if (btnMenu === true) {
      setBtnMenu(false);
    } else {
      setBtnMenu(true);
    }
  };

  const classMenu = btnMenu ? "aside aside--float" : "aside";

  return (
    <>
      <div className="main">
        <div className="main__container">
          <div className={classMenu}>
            <NavigationBar />
          </div>

          <div className="content">
            <div className="content__container">
              <div className="header--main">
                <SearchBar funcion={HandleBtnMenu} />
              </div>

              <div className="Outlet">
                <Outlet />
              </div>
            </div>
          </div>

          <div className="player">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

// Importing Hooks
import { useEffect, useState } from "react";
// Importing MUI
import { Paper, InputBase, IconButton } from "@mui/material";
// Importing Material Icons
import { MenuIcon, PersonIcon, SearchIcon } from "@mui/icons-material";
// Importing estilos SASS
import "./../styles/component/searchBar.scss";

const SearchBar = (props) => {
  const [navBar, setNavBar] = useState(false);

  // A partir de esa cantidad de pixeles de altura manda true al navbar
  const NavegacionFija = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  // Inicializando con el evento scroll
  useEffect(() => {
    window.addEventListener("scroll", NavegacionFija, true);
    // Remove the event listener
    return () => {
      window.removeEventListener("scroll", NavegacionFija, true);
    };
  }, []);

  const classNavBar = navBar ? "navBar--fijo" : "navBar";

  return (
    <>
      <div className={classNavBar}>
        <div className="navBar__container">
          <div className="navBar__item navBar__item--search">
            <Paper
              component="form"
              sx={{
                p: "1px 4px",
                display: "flex",
                alignItems: "center",
                borderRadius:"30px",
                background: "transparent",
                borderColor:"#000"
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar"
                inputProps={{ "aria-label": "buscar" }}
                className="inputLabel"
              />
              <IconButton  sx={{ p: "8px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>            
          </div>

          <div className="navBar__item navBar__item--user">
            <button className="icon icon--navBar icon--user">
              <PersonIcon />
              <span>Karen O.</span>
            </button>

            <button
              href="/"
              className="icon icon--navBar icon--bar"
              onClick={props.funcion}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

// Importing Hooks
import { useEffect, useState, useContext } from "react";
// Importing Context
import { UserContext } from "../context/UserContext";
// Importing data
import data from "./../assets/data/data.json";
// Importing MUI
import { Paper, InputBase, IconButton } from "@mui/material";
// Importing Material Icons
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
// Importing estilos SASS
import "./../styles/component/searchBar.scss";

const SearchBar = (props) => {
  const { setSongs, sendSearch } = useContext(UserContext);

  // Navegación fija
  const [navBar, setNavBar] = useState(false);
  // A partir de esa cantidad de pixeles de altura manda true al navbar
  const NavegacionFija = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  // Search
  const [songsSearch, setSongsSearch] = useState([]);
  const fetchData = async () => {
    const response = await data;
    setSongsSearch(response);
  };

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    console.log("input buscado", searchInput);

    if (searchInput.length === 0 || searchInput.length === 1) {
      fetchData();
    }

    if (searchInput.length > 1) {
      const filterSong = songsSearch.filter((song) =>
        (song.cancion.toUpperCase() && song.album.toUpperCase()).includes(
          searchInput.toUpperCase()
        )
      );
      setSongsSearch(filterSong);
      console.log("songs filtrados", filterSong);
    }
  };

  const buttonSearch = () => {
    const data = songsSearch;
    sendSearch(data)
  };

  //useEffect(() => {
  //fetchData();
  //}, []);

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
                borderRadius: "30px",
                background: "transparent",
                borderColor: "#828282",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar"
                inputProps={{ "aria-label": "buscar" }}
                className="inputSearch"
                onChange={handleSearch}
              />
              <IconButton
                sx={{ p: "8px" }}
                aria-label="search"
                onClick={buttonSearch}
              >
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

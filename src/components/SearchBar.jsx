// Importing Hooks
import { useEffect, useState } from "react";
// Importing MUI
import { Box, TextField } from "@mui/material";
// import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
// import TextField from '@mui/material/TextField';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// Importing Material Icons
import DehazeIcon from "@mui/icons-material/Dehaze";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
// Importing estilos SASS
import "./../styles/component/searchBar.scss";

const SearchBar = (props) => {
  const [navBar, setNavBar] = useState(false);

  // A partir de esa cantidad de pixeles de altura manda true al navbar
  const NavegacionFija = () => {
    if (window.scrollY >= 10) {
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
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-search">
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-search"
                // type={values.showPassword ? "text" : "password"}
                // value={values.password}
                // onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <SearchIcon />
                      {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                    </IconButton>
                  </InputAdornment>
                }
                label="Search"
              />
            </FormControl>
          </div>

          <div className="navBar__item navBar__item--user">
            <button className="icon icon--navBar">
              <PersonIcon />
              <span>Francisco M.</span>
            </button>

            <button
              href="/"
              className="icon icon--navBar icon--bar"
              onClick={props.funcion}
            >
              <DehazeIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

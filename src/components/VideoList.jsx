// Importing Axios
import axios from "axios"
// Importing Hooks
import { useState, useEffect, useContext } from "react";
// Importing Context
import { UserContext } from "../context/UserContext";
// Importing data
import data from "./../assets/data/data.json";
// Importing MUI
import IconButton from "@mui/material/IconButton";
// Importing Material Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// Importing estilos SASS
import "./../styles/component/videoList.scss";
// import { getAlbum } from "../service";

const VideoList = () => {
  // const [album]
  const { songs } = useContext(UserContext);

  // const fetchData = async () => {
  //   const data = await getAlbum();
  //   console.log(data);
  //   // if(data.ok){
  //   //   setGenero(data);
  //   // }
  //   // console.log(data)
  // };

  // const dataFilter = async () => {
  //   const dbFilter = await songs;
  //   return dbFilter;
  // };

  useEffect(() => {
    axios
      .get(
        "https://api.deezer.com/album/317218537"
      )
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <section className="resultsMusics">
      <h2>Resultados</h2>
      <div className="resultsMusics__card">
        {data.length > 0 &&
          data.map((db, index) => (
            <div className="card--music" key={index}>
              <div className="card--music-image">
                <img src={db.imagen_album} alt="imagen de la canción" />
                <div className="card-image__play">
                  <IconButton aria-label="play">
                    <PlayArrowIcon />
                  </IconButton>
                </div>
                <div className="card-image__more">
                  <IconButton aria-label="more">
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </div>
              <div className="card--music__info">
                <h3>{db.cancion}</h3>
                <p>{db.nombre_cantante}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default VideoList;

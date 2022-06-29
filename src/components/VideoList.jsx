import React from "react";
// Importing data
import data from "./../assets/data/data.json";
// Importing MUI
import IconButton from "@mui/material/IconButton";
// Importing Material Icons
import { PlayArrowIcon, MoreVertIcon } from "@mui/icons-material";
// Importing estilos SASS
import "./../styles/component/videoList.scss";

const VideoList = () => {
 

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

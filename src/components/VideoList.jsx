import React from "react";
// Importing images
import music from "./../assets/images/pik5.png";

import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./../styles/component/videoList.scss";

const VideoList = () => {
  
  return (
    <section className="resultsMusics">
      <h2>Resultados</h2>
      <div className="resultsMusics__card">
        <div className="card--music">
          <div className="card--music-image">
            <img src={music} alt="imagen de la canción" />
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
            <h3>Title de la canción</h3>
            <p>Nombre del cantante</p>
          </div>
        </div>

        <div className="card--music">
          <div className="card--music-image">
            <img src={music} alt="imagen de la canción" />
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
            <h3>Title de la canción</h3>
            <p>Nombre del cantante</p>
          </div>
        </div>

        <div className="card--music">
          <div className="card--music-image">
            <img src={music} alt="imagen de la canción" />
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
            <h3>Title de la canción</h3>
            <p>Nombre del cantante</p>
          </div>
        </div>

        <div className="card--music">
          <div className="card--music-image">
            <img src={music} alt="imagen de la canción" />
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
            <h3>Title de la canción</h3>
            <p>Nombre del cantante</p>
          </div>
        </div>

        <div className="card--music">
          <div className="card--music-image">
            <img src={music} alt="imagen de la canción" />
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
            <h3>Title de la canción</h3>
            <p>Nombre del cantante</p>
          </div>
        </div>

        <div className="card--music">
          <div className="card--music-image">
            <img src={music} alt="imagen de la canción" />
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
            <h3>Title de la canción</h3>
            <p>Nombre del cantante</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoList;

import React from "react";

import music from "./../assets/images/pik5.png";

import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

import "./../styles/component/musicPlayer.scss";

const MusicPlayer = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="musicPlayer">
        <div className="musicPlayer__image">
          <img src={music} alt="logo music" />
        </div>
        <div className="musicPlayer__content">
          <div>
            <h3>Nombre de la canción</h3>
            <p>Artista</p>
          </div>
          <div className="musicPlayer__controls">
            <IconButton aria-label="previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="play">
              <PlayArrowIcon />
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
          </div>
          <div className="musicPlayer__volume">
            <IconButton aria-label="volumeDown">
              <VolumeDown />
            </IconButton>
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <IconButton aria-label="volumeUp">
              <VolumeUp />
            </IconButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicPlayer;

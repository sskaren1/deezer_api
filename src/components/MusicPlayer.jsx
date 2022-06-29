import React from "react";
// Importing MUI
import { IconButton, Slider, SkipPreviousIcon, VolumeDown, VolumeUp } from "@mui/material";
// Importing Material Icons
import { PlayArrowIcon, SkipNextIcon } from "@mui/icons-material";
// Importing estilos SASS
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
          <img src="https://i.ibb.co/x51FTFc/adele-1.jpg" alt="logo music" />
        </div>
        <div className="musicPlayer__content">
          <div className="musicPlayer__info">
            <h3>Rolling in the Deep</h3>
            <p>Adele - 21</p>
          </div>
          <div className="musicPlayer__controls">
            <div className="controls">
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
            <div className="volume">
              <IconButton aria-label="volumeDown">
                <VolumeDown />
              </IconButton>
              <Slider
                aria-label="Volume"
                value={value}
                onChange={handleChange}
              />
              <IconButton aria-label="volumeUp">
                <VolumeUp />
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicPlayer;

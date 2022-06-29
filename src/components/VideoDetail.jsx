import React from "react";
// Importing Axios
import axios from "axios"
//Importing Hooks
import { useState, useEffect } from "react";
// Importing MUI
import { Stack, Button, IconButton }from "@mui/material";
// Importing Material Icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// Importing estilos SASS
import "./../styles/component/videoDetail.scss";

const VideoDetail = () => {
  // const fetchGenero = async () => {
  //   const data = await getGenero();
  //   if(data.ok){
  //     setGenero(data);
  //   }
  //   // console.log(data)
  // };

  // const fetchSearch = async() => {
  //   const data = await searchDeezer("eminem");
  //   console.log("data",data);
  // }

  // useEffect(() => {
  // axios
  //   .get(
  //     "https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?app_id=548842&secret=4544433e07d6887d68f93d58cb67f076&code=fr3a1bb1518dc624ff4418e50dfecdc5"
  //   )
  //   .then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <>
      <section className="videoDetail">
        {/* <Stack spacing={0} direction="row" className="videoDetail-contain"> */}
        <div className="videoDetail-container">
          <div className="videoDetail__image">
            <img
              src="https://i.ibb.co/x51FTFc/adele-1.jpg"
              alt="imagen del artista"
            />
            <div className="card-image__play">
              <IconButton aria-label="play">
                <PlayArrowIcon />
              </IconButton>
            </div>
          </div>
          <div className="videoDetail__info">
            <h2>Adele 21</h2>
            <p>
              Lo mejor de Adele <span>525000 seguidores</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              praesentium ab, fugiat et quam sint!
            </p>
            <Stack spacing={2} direction="row">
              <Button variant="contained" className="button--reproducir">Reproducir</Button>
              <Button variant="outlined" className="button--follow">Seguir</Button>
              <IconButton aria-label="delete" size="small" className="button--more">
                <MoreHorizIcon />
              </IconButton>
            </Stack>
          </div>
        </div>
      </section>
      {/* 
      <iframe
        title="deezer-widget"
        src="https://widget.deezer.com/widget/dark/album/1668645"
        width="100%"
        height="300"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media; clipboard-write"
      ></iframe> */}
    </>
  );
};

export default VideoDetail;

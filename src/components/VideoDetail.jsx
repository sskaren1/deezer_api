import React from "react";
//Importando Hooks
import axios from "axios";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// Importing images
import artista from "./../assets/images/pik5.png";
import { getGenero } from "./../service";

const VideoDetail = () => {
  const [genero, setGenero] = useState([]);
  // Obteniendo la base de datos tblPostulantes
  // const fetchApplicants = async () => {
  //   const data = await getGenero();
  //   console.log(data)
  //   // return data;
  // };

  // const fetchGenero = async () => {
  //   const data = await getGenero();
  //   if(data.ok){
  //     setGenero(data.content);
  //   }
  //   // console.log(data)
  // };

  // const fetchSearch = async() => {
  //   const data = await searchDeezer("eminem");
  //   console.log("data",data);
  // }

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?app_id=548842&secret=4544433e07d6887d68f93d58cb67f076&code=fr3a1bb1518dc624ff4418e50dfecdc5"
      )
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <>
      <section className="videoDetail">
        <Stack spacing={2} direction="row">
          <div className="videoDetail__image">
            <img src={artista} alt="imagen del artista" />
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
              <Button variant="contained">Reproducir</Button>
              <Button variant="outlined">Seguir</Button>
              <IconButton aria-label="delete" size="small">
                <MoreHorizIcon />
              </IconButton>
            </Stack>
          </div>
        </Stack>
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

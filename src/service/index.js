import axios from "axios";
import { URL_ALBUM } from "../environments/environments";

export const getAlbum = () => {
  axios
    .get(
      "URL_ALBUM/317218537"
    )
    .then((response) => {
      this.setState({ response });
    })
    .catch((err) => {
      console.log("error", err);
    });
};






// const headers = {
//   "Access-Control-Allow-Origin": "*",
// };

// export const rapidapi = async (busqueda) => {
//   let configuracion = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "fe58f38737mshcb6537de0547dc6p1099acjsne3f97714fbc9",
//       "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//     },
//   };

//   try {
//     let rpta = await fetch(
//       `https://deezerdevs-deezer.p.rapidapi.com/search?q=${busqueda}`,
//       configuracion
//     );
//     const data = await rpta.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };



// export const getGenero2 = async (busqueda) => {
//   let configuracion = {
//     method: "GET",
//     headers,
//   };

//   try {
//     let rpta = await fetch(
//       `https://api.deezer.com/user/${id}`,
//       configuracion
//     );
//     const data = await rpta.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };


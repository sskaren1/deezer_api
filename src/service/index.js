import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

const headers = {
  "Access-Control-Allow-Origin": "*",
};

export const getGenero = () => {
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127"
    )
    .then((response) => {
      this.setState({ response });
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const getGenero2 = async (busqueda) => {
  let configuracion = {
    method: "GET",
    headers,
  };

  try {
    let rpta = await fetch(
      `https://api.deezer.com/user/${id}`,
      configuracion
    );
    const data = await rpta.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// export const searchDeezer = async (busqueda) => {
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

// fetch(url, options2)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));

// const options = {
//     method: 'GET',
//     url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
//     params: {q: 'eminem'},
//     headers: {
//       'X-RapidAPI-Key': 'fe58f38737mshcb6537de0547dc6p1099acjsne3f97714fbc9',
//       'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//     }
//   };

//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

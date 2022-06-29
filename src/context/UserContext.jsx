// Importing UserContext, hooks
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [songs, setSongs] = useState(
    JSON.parse(localStorage.getItem("songs")) ?? []
  );

  const sendSearch = (search) => {
    setSongs([...songs, search]);
    localStorage.setItem("songs", JSON.stringify([...songs, search]));
  };

  return (
    <UserContext.Provider
      value={{
        songs,
        setSongs,
        sendSearch
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
// Importing react-router-dom
import Router from "./router";
// Importing userProvider
import { UserProvider } from "./context/UserContext";
// Importing styles sass
import "./styles/base/global.scss";

function App() {
  return (
    <UserProvider>
      <div>
        <Router />
      </div>
    </UserProvider>
  );
}

export default App;

import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <RouterProvider fallbackElement={<h1>WRONG SHIT</h1>} router={router} />
  );
}

export default App;

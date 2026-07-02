import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import GlobalProvider from "./context/GlobalContext";
import GlobalProvider from "./context/GlobalProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <GlobalProvider>
  <App />
  </GlobalProvider>
  </BrowserRouter>
);

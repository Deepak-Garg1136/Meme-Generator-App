import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MemeApp from "./MemeApp.jsx";
createRoot(document.getElementById("root")).render(
  // NOTE :- Meme Generator App
  <BrowserRouter>
    <MemeApp />
  </BrowserRouter>
  // </StrictMode>
);

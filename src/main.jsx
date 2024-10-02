import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";
// import { StrictMode } from 'react'
// import App from "./App.jsx";
// import BackgroundChanger from "./project_1_bg_changer/bgChanger.jsx";
// import PG from "./project_2_password_generator/pg.jsx";
// import Board from "./project_3_Tic_Tac_Toe_game/Board.jsx";
// import InputBox from "./project_4_currency_converter/components/InputBox";
// import MainComponent from "./project_4_currency_converter/components/mainComponent";
// import UserContextProvider from "./Context API/project_5_context_api/context/UserContextProvider";
// import Login from "./Context API/project_5_context_api/components/login";
// import Profile from "./Context API/project_5_context_api/components/profile";
// import { UseContextProvider } from "./Context API/project_5_context_api/context/UserContext2";
// import ContextFile from "./ContextFile";
// import MyToDoApp from "./MyToDoApp.jsx";
// import WeatherApp from "./WeatherApp.jsx";
import MemeApp from "./MemeApp.jsx";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />

  // INFO :- Since App component is a function, we can also use this as normal function calling i.e App()
  // App()

  // NOTE :- Background Color Changer Project
  // <BackgroundChanger />

  // NOTE :- Project 2 - Password Generator
  // <PG />

  // NOTE :- Tic Tac Toe game
  // <Board />

  // NOTE :- Currency Converter
  // <MainComponent />

  // NOTE :- Context API
  // <UserContextProvider>
  //   <Login />
  //   <Profile />
  // </UserContextProvider>

  // NOTE :- Context API second way
  // <ContextFile />

  // NOTE :- Todo APP
  // <MyToDoApp />

  // NOTE :- Weather App
  // <WeatherApp />
  // INFO :- Before running weatherapp, uncomment the #root in weather.css file

  // NOTE :- Meme Generator App
  <BrowserRouter>
    <MemeApp />
  </BrowserRouter>
  // </StrictMode>
);

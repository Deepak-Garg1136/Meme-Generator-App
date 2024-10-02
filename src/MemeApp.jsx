import React, { useEffect } from "react";
// import Card from "./project_8_meme_generator_app/components/Card";
import { Route, Routes } from "react-router-dom";
import HomePage from "./project_8_meme_generator_app/pages/HomePage";
import EditPage from "./project_8_meme_generator_app/pages/EditPage";
function MemeApp() {
  //   useEffect(() => {
  //     getMemes();
  //   }, []);
  return (
    <>
      <h1 className="memeTitle">Welcome to the Meme Generator!</h1>
      {/* Add your meme generator components here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default MemeApp;

import React from "react";
import "../meme.css";
import { useNavigate } from "react-router-dom";
function Card({ url, title }) {
  const navigate = useNavigate();
  return (
    <div className="memecard">
      <img src={url} alt="Placeholder Image" />
      <h5>{title}</h5>
      <button onClick={() => navigate(`/edit/?url=${url}`)}>Edit</button>
    </div>
  );
}

export default Card;

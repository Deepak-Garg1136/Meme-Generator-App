import React, { useState } from "react";
import "../meme.css";
import Draggable from "react-draggable";

function Text({ position }) {
  const [editable, setEditable] = useState(false);
  const [val, setVal] = useState("Your Text Here");

  return (
    <Draggable>
      <div
        className="textSize"
        style={{
          position: "absolute", // Position the text over the image
          top: position?.top || 0, // Use position prop if passed
          left: position?.left || 0,
          color: "white", // Text color
          fontSize: "2em", // Adjust the font size
          fontWeight: "bold", // Make it bold for visibility
          border: "2px solid black",
          padding: "5px", // Add some padding for better visibility
          borderRadius: "5px", // Make the border round for a clean look
          background: "rgba(0, 0, 0, 0.7)", // Transparent background for better visibility
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add a drop shadow for depth
          transition: "transform 0.3s ease-in-out", // Smooth transition for hover effect
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)", // Add shadow for contrast
          cursor: "pointer", // Optionally make the text draggable later
        }}
      >
        {editable ? (
          <input
            type="text"
            value={val}
            onBlur={() => setEditable(false)} // When you leave the input, return to static text
            onChange={(e) => setVal(e.target.value)} // Set the new value
            autoFocus // Automatically focus the input when clicked
          />
        ) : (
          <h5 onDoubleClick={() => setEditable(true)}>{val}</h5> // Set editable when text is double-clicked
        )}
      </div>
    </Draggable>
  );
}

export default Text;

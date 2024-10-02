import React, { createRef, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";
import "../meme.css";
import Text from "../components/Text";

function EditPage() {
  const [params] = useSearchParams();
  //  const [count, setCount] = useState(0);
  const [textElements, setTextElements] = useState([]);
  const memeRef = createRef();
  const addText = () => {
    // setCount(count + 1);
    const newPosition = {
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    };
    setTextElements([...textElements, newPosition]);
  };

  return (
    <div className="editDiv">
      {/* Container with relative position */}
      <div  ref={memeRef} className="editImage" style={{ position: "relative" }}>
        <img
          src={params.get("url")}
          alt=""
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />

        {/* Dynamically added Text components */}
        {textElements.map((arrayElements, index) => (
          <Text key={index} position={arrayElements} />
        ))}
      </div>
      <div className="editButtons">
        <button onClick={addText}>Add Text</button>
        <button onClick={(e) => exportComponentAsJPEG(memeRef)}>
          Download
        </button>
      </div>
    </div>
  );
}

export default EditPage;

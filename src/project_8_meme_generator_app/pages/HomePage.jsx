import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import getMemes from "../getMemes";

function HomePage() {
  const [myMemes, setMyMemes] = useState([]);
  //   const [id, setId] = useState(0);
  useEffect(() => {
    async function fetchMeme() {
      setMyMemes(await getMemes());
    }
    fetchMeme();
    // setMyMemes(res);
  }, []);

  //   const [myMemes, setMyMemes]
  return (
    <div className="mainMemeDiv">
      {myMemes.map((element) => (
        <Card key={element.id} url={element.url} title={element.name} />
      ))}
    </div>
  );
}

export default HomePage;

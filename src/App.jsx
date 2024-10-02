// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import "./index.css";
function App() {
  let [count, setCount] = useState(10);
  // function increaseCount() {
  //   setCount(count + 1);
  // }

  const increaseCount = () => {
    if (count + 1 > 12) {
      return;
    }
    setCount(count + 1);
  };

  const reduceCount = () => {
    if (count - 1 < 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <h2 className="bg-green-100">This is Deepak</h2>
      <button onClick={increaseCount}>Add count</button>
      <button onClick={reduceCount}>Reduce count</button>
    </>
  );
}

export default App;

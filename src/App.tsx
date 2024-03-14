import { useState } from "react";
import Block from "./components/Block";
function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [curentTurn, setCurrentTurn] = useState("X");

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);
    stateCopy[index] = curentTurn;
    setCurrentTurn(curentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  };
  console.log("state", state);
  return (
    <>
      <div className="p-20 ">
        <div className="flex">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>
        <div className="flex">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>
        <div className="flex">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>
      </div>
    </>
  );
}

export default App;

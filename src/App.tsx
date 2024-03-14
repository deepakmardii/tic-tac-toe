import { useState } from "react";
import Block from "./components/Block";
function App() {
  const [state, setState] = useState(Array(9).fill(null));
  console.log("state", state);
  return (
    <>
      <div className="p-20 ">
        <div className="flex">
          <Block value="x" />
          <Block value="o" />
          <Block value="x" />
        </div>
        <div className="flex">
          <Block />
          <Block />
          <Block />
        </div>
        <div className="flex">
          <Block />
          <Block />
          <Block />
        </div>
      </div>
    </>
  );
}

export default App;

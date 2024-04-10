import { useState } from "react";
import Block from "./components/Block";

const App: React.FC = () => {
  const [state, setState] = useState(Array(9).fill(null));
  console.log(state);
  return (
    <div>
      <div>Tic-Tac-Toe</div>
      <div>
        <Block />
      </div>
    </div>
  );
};

export default App;

import Block from "./components/Block";
function App() {
  return (
    <>
      <div className="flex">
        <div className="ROW ">
          <Block />
          <Block />
          <Block />
        </div>
        <div className="ROW">
          <Block />
          <Block />
          <Block />
        </div>
        <div className="ROW">
          <Block />
          <Block />
          <Block />
        </div>
      </div>
    </>
  );
}

export default App;

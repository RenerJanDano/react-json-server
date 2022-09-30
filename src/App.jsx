import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <h1 className="text-center">Population Stats</h1>
      <div className="App  d-flex align-items-center justify-content-center">
        <Stats />
      </div>
    </>
  );
}

export default App;

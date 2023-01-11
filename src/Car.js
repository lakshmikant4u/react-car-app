//import Chassis from "./components/chassis/Chassis";
import Structure from "./components/structure/Structure";
import "./Car.css";
import Chassis from "./components/chassis/Chassis"

function Car() {
  return (
    <>
      <div className="App">
        <h1>Cars</h1>
      </div>
      <Structure />
      <Chassis />
    </>
  );
}

export default Car;

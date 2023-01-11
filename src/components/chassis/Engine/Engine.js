import React, { useEffect, useState } from "react";
import Diesel from "./Diesel/Diesel";

export default function Engine() {
  const [car1, setCar1] = useState({ id: 1, engine: "Ford", capacity: "1000cc" });
  const [car2, setCar2] = useState({ id: 1, engine: "Tata", capacity: "500cc" });
  return (
    <>
      <div>
        <span>Engines</span>
        <Diesel type="Diesel" engineCapacity={car1.capacity} engine={car1.engine} />
        <Diesel type="Diesel" engine={car2.engine} engineCapacity={car2.capacity} />
      </div>
    </>

  )
}

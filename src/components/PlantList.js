import React from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";

function PlantList({plantArr, setPlantArr}) {
  const mappedPlantArr = plantArr.map((plantObj) => {
    return (
      // console.log(plantObj)
      <PlantCard 
        key = {plantObj.id}
        name = {plantObj.name}
        image = {plantObj.image}
        price = {plantObj.price}
      />
    )
  })
  return (
    <ul className="cards">{/* render PlantCards components in here */}
      {mappedPlantArr}
      {/* <><NewPlantForm plantArr={plantArr} setPlantArr={setPlantArr} /></> */}
    </ul>
  );
}

export default PlantList;

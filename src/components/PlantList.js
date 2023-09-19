import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArr}) {
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
    </ul>
  );
}

export default PlantList;

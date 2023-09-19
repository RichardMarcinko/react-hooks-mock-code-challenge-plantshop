import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArr, setPlantArr] = useState([])
  const [searchPlants, setSearchPlants] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlantArr(data))
  }, [])

  const filteredPlantArr = plantArr.filter((plantObj) => {
    return(
      plantObj.name.toLowerCase().includes(searchPlants.toLowerCase())
    )
  })

  return (
    <main>
      <NewPlantForm />
      <Search setSearchPlants={setSearchPlants} />
      <PlantList plantArr={filteredPlantArr} />
    </main>
  );
}

export default PlantPage;

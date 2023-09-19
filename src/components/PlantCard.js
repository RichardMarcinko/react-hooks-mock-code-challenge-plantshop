import React, {useState} from "react";

function PlantCard(props) {
  const [inStock, setInStock] = useState(true)
  
  return (
    <li className="card">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      {inStock ? (
        <button onClick={(e) => setInStock(!inStock)} className="primary" >In Stock</button>
      ) : (
        <button onClick={(e) => setInStock(!inStock)} >Out of Stock</button>
      )}
      
    </li>
  );
}

export default PlantCard;

import React from "react";
import { useState } from "react";
const SuperHeroSelector = ({ superHeroStats }) => {
  const [selectedHeroe, setSelectedHeroe] = useState();
  console.log(selectedHeroe);
  return (
    <div className="superheroselector">
      <h1>See your favourite SuperHeroes</h1>
      <p>Select a hero or enter any superheroe name </p>

      <select
        className="selectedHeroe"
        name="Options"
        id="Options"
        onChange={(event) =>
          setSelectedHeroe(
            superHeroStats.filter((heroe) => {
            return heroe.name === event.target.value
           
            })
          
          )
         
        }
      >
        <option>Select Your SuperHeroe</option>
        {superHeroStats.map((heroe) => (
          <option key={heroe.id} value={heroe.name}>
            {heroe.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SuperHeroSelector;

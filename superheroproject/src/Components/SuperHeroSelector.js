import React from "react";
import { useState } from "react";
const SuperHeroSelector = ({ superHeroStats }) => {
  const [selectedHeroe, setSelectedHeroe] = useState();
  console.log(selectedHeroe);
  return (
    <div className="superheroselector-container">
      <h1 className="heading">See your favourite SuperHeroes</h1>
      <p className="sub-heading">Select a hero or enter any superheroe name </p>

      <select
        className="selectedHeroe"
        name="Options"
        id="Options"
        onChange={(event) =>
          superHeroStats.filter((heroe) => {
            const name = event.target.value;
            if (heroe.name === name) {
              return setSelectedHeroe(name);
            }
          })
        }
      >
        <option className="selectedHeroe">Select Your SuperHeroe</option>
        {superHeroStats.map((heroe) => (
          <option className="selectedHeroe" key={heroe.id} value={heroe.name}>
            {heroe.name}
          </option>
        ))}
      </select>
      <button className="power-button">Power Up!</button>
    </div>
  );
};

export default SuperHeroSelector;

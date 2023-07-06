import React from "react";
import { useState } from "react";
import SuperHeroCard from "./SuperHeroCard";
const SuperHeroSelector = ({ superHeroStats }) => {
  console.log(superHeroStats);

  const [power, setPower] = useState(false);
  const [selectedHeroe, setSelectedHeroe] = useState();
  const [HeroData, setHeroData] = useState([]);

  const HeroStats = () => {
    const SelectedItem = superHeroStats.filter(
      (item) => item.name === selectedHeroe
    );
    setHeroData(SelectedItem[0]);
  };

  return (
    <>
      <div className="superheroselector-container">
        <h1 className="heading">See your favourite SuperHeroes</h1>
        <p className="sub-heading">
          Select a hero or enter any superheroe name{" "}
        </p>

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
        <button onClick={HeroStats} className="power-button">
          Power Up!
        </button>
      </div>

      <div className="SuperHeroStats">
        <img />
      </div>

      <SuperHeroCard HeroData={HeroData}/>
    </>
  );
};

export default SuperHeroSelector;

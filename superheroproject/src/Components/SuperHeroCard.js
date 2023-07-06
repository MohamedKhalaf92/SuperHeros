import React from "react";
import { useState } from "react";

const SuperHeroCard = ({ HeroData }) => {
    const [showList, setShowList] = useState(false);
  console.log(HeroData);
  return (
    <div className="superHero-card">
      <div className="superHero-title-container">
        <img src={HeroData.images.sm} className="superHero-image" />
        <h1>Hello I am {HeroData.name}</h1>
      </div>
      <div className="superstats-container">
        <div className="superhero-stats">
          <h1>BioGraphy</h1>
          {showList && <ul>
            <li>My fullname is: {HeroData.biography.fullName}</li>
            <li>My Place of birth is: {HeroData.biography.placeOfBirth} </li>
            <li>My Publisher name is: {HeroData.biography.publisher} </li>
          </ul>}
        </div>

        <div className="superhero-stats">
          <h1>Appearance</h1>
          {showList && <ul>
            <li>My eye color is: {HeroData.appearance.eyeColor}</li>
            <li>My gender is: {HeroData.appearance.gender} </li>
            <li>My hair colour : {HeroData.appearance.hairColor} </li>
          </ul>}
        </div>

        <div className="superhero-stats">
          <h1>Power Stats</h1>
          {showList && <ul>
            <li>My eye color is: {HeroData.appearance.eyeColor}</li>
            <li>My gender is: {HeroData.appearance.gender} </li>
            <li>My hair colour : {HeroData.appearance.hairColor} </li>
          </ul>}
        </div>

        <div className="superhero-stats">
          <h1>Group Affiliations</h1>
          {showList && <ul>
            <li>{HeroData.connections.groupAffiliation}</li>
          </ul>}
        </div>
        <div className="superhero-stats">
          <h1>Aliases</h1>
          {showList && <ul>
            <li>{HeroData.biography.aliases}</li>
          </ul>}
        </div>
      </div>
    </div>
  );
};

export default SuperHeroCard;

import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import SuperHeroSelector from "./Components/SuperHeroSelector";
import { useEffect, useState } from "react";

function App() {
  const [superHeroStats, setSuperHeroStats] = useState([]);
  const url = "https://superhero-search.p.rapidapi.com/api/heroes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3ef23c4ba2mshc49505720bd538ap104586jsn9e9fa873d6dc",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setSuperHeroStats(result);
        console.log(superHeroStats);
        return result;
      } catch (error) {
        console.error(error);
      }
    };
    FetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
      <SuperHeroSelector superHeroStats={superHeroStats}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

//Get the data pulled from mapi for the different superheroes. and also api call for the super hero stats.

//Plan for the other two conmponents.

//SuperHeroSelect

//SuperHeroStats

import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


//Plan for the other two conmponents. 

//SuperHeroSelect 


//SuperHeroStats 

import React from "react"
import './App.css';
import Row from "./components/Row.jsx"
import requests from "./requests.js";

function App() {
  return (
    <div className="App">
      <h1 className="font-bold text-5xl text-red-700  border-spacing-4 border-black" >
        NETFLIX
      </h1>

      <Row title = "Netflix originals" fetchUrl = {requests.fetchNetflixOriginals}/> 
      <Row title ="Trending Now" fetchUrl={requests.latest.data} />
      
    </div>
  );
}

export default App;

import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import { Header } from './components/Header';
import { Recipes } from './components/Recipes';
//https://www.themealdb.com/api.php
function App() {

  const [searchValue, setSearchValue] = useState("chicken");

  const [recipes, setRecipes] = useState([]);

  const APP_ID = "ee83e2ba";
  const APP_KEY = "beb74d03b63259d328fcdc0636736e75";
  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const url1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;


  const getRecipe = async () => {
    const res = await axios.get(url1);
    if(res.data && res.data.meals){
      setRecipes(res.data.meals);
    }
    else{
      setRecipes([]);
    }
    
  }
  useEffect(() => {
    getRecipe();
  }, []);

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const onSearchClick = ()=>{
    getRecipe();
  }
  return (
    <div className="App">
      <Header searchValue={searchValue} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
        <Recipes searchValue={searchValue} recipes={recipes} />
      </div>

    </div>
  );
}

export default App;

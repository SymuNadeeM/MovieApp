import React, { useEffect, useState } from "react";
import Movielist from "./Movielist";
import AddFav from "./AddFav";
import Remove from "./Remove";
import "./index.css";

const FontPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchV] = useState("kid");
  const [addfav, setAddfav] = useState([]);

  const getMovies = async (searchValue) => {
    const url = await fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=5e62611f`
    );
    const res = await url.json();

    if (res.Search) {
      setMovies(res.Search);
      console.log(res.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);
  //......................Local Storage.....................
  // useEffect(() => {
  //   const movifavourites = JSON.parse(
  //     localStorage.getItem("react-movie-app-favourites")
  //   );
  //   setAddfav(movifavourites);
  // }, []);

  // const localStoragesave = (items) => {
  //   localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  // };
  //............................................................
  const handleAddfav = (movi) => {
    const newAddfav = [...addfav, movi];
    setAddfav(newAddfav);
    // localStoragesave(newAddfav);
  };

  const removeFav = (movi) => {
    const newfav = addfav.filter((curFav) => curFav.imdbID !== movi.imdbID);
    setAddfav(newfav);
  };

  return (
    <>
      <div className="movie-app">
        <div className="heading_div">
          <h2>Movie App</h2>
          <input
            type="text"
            placeholder="Search here.."
            value={searchValue}
            onChange={(e) => setSearchV(e.target.value)}
          />
        </div>
        <div className="fontpage_div">
          <Movielist
            movies={movies}
            handleFavourites={handleAddfav}
            handleComponents={AddFav}
          />
        </div>
        <div className="heading_div">
          <h2>Favourite</h2>
        </div>
        <div className="fontpage_div">
          <Movielist
            movies={addfav}
            handleFavourites={removeFav}
            handleComponents={Remove}
          />
        </div>
      </div>
    </>
  );
};

export default FontPage;

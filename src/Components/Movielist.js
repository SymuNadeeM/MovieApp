import React from "react";

const Movielist = (props) => {
  const FavouriteIcons = props.handleComponents;

  return (
    <>
      <div className="listof_movi">
        {props.movies.map((movi, index) => (
          <>
            <div className="grid_part">
              <img src={movi.Poster} alt="movie mama" />
              <button onClick={() => props.handleFavourites(movi)}>
                Add To Favourite <FavouriteIcons className="atom" />
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Movielist;

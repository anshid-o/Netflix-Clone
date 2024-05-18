import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constats/constants";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data.results[Math.floor(Math.random() * 20)]);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie ? (movie.name ? movie.name : movie.title) : ""}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <div className="description">{movie ? movie.overview : ""}</div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

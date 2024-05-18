import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constats/constants";
import YouTube from "react-youtube";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovieTrailer = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        if (res.data.results.length !== 0) {
          setUrlId(res.data.results[0]);
        }
      });
  };
  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj) => (
            <img
              onClick={() => {
                console.log(obj.id);
                handleMovieTrailer(obj.id);
                console.log("clicked");
              }}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
            />
          ))}
        </div>
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </>
  );
}

export default RowPost;

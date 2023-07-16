import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import classes from "./MovieDaital.module.css";
//import media from "./youtobe";

const MovieDetail = (props) => {
  const [moviedata, setmoviedata] = useState([]);

  //console.log(moviedata);
  const check = moviedata.length !== 0;
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=cb347dca5e899e4bdacb92b38305ba69`
      );

      const data = await reponse.json();

      setmoviedata(data.results);
    };

    fetchData().catch(console.error);
  }, [props.movieId]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //lọc các phần tử có type giông hướng dẫn
  const locMovie = moviedata.filter(
    (item) => item.type === "Teaser" || item.type === "Trailer"
  );
  const checkMovie = locMovie.length !== 0;
  //console.log(locMovie);
  return (
    <div className={classes.daitail}>
      <div className={classes.tieude}>
        {check && <h2>{moviedata[0].name}</h2>}
        {check && <h3>Release Date: {moviedata[0].published_at}</h3>}
        <h3>Vote:6.6/10</h3>
        <p>
          Four year Isla was destroyed, dinosaur now live-and hunt- along all
          over the world.This gragile balace will reshape the future and
          determin, once àn for all, whether humamn beging are to remain the
          apex predator on a planet they now share with history's most fearsome
          creatures
        </p>
      </div>
      <div className={classes.film}>
        {checkMovie ? (
          <YouTube videoId={locMovie[0].key} opts={opts} />
        ) : (
          <div>
            <img
              style={{ height: "300", width: "500" }}
              src={`https://image.tmdb.org/t/p/w500/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg
              `}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;

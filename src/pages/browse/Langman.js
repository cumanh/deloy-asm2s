import React, { useEffect, useState } from "react";
import classes from "./TopRate.module.css";

const Langman = (props) => {
  //lưu trữ data
  const [Langman, setLangman] = useState([]);
  //lưu trữ id
  const [movieId, setmovieId] = useState("");

  props.onMovieId(movieId);

  //console.log(Langman);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3${props.Langman}`
      );

      const data = await reponse.json();

      setLangman(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className={classes.rate_top}>
      <h3>Lãng mạn</h3>
      <div className={classes.hinh_anh}>
        {Langman.map((item) => {
          return (
            <img
              onClick={() => {
                setmovieId(item.id);
              }}
              alt={item.original_title}
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Langman;

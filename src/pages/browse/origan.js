import React, { useEffect, useState } from "react";
import classes from "./TopRate.module.css";

const Origan = (props) => {
  //lưu data mơi lấy
  const [Origan, setOrigan] = useState([]);
  //lưu trữ id
  const [movieId, setmovieId] = useState("");

  props.onMovieId(movieId);

  //console.log(movieId);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3${props.Origan}`
      );

      const data = await reponse.json();

      setOrigan(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className={classes.rate_top}>
      <div className={classes.hinh_anh_origan}>
        {Origan.map((item) => {
          return (
            <img
              onClick={() => {
                setmovieId(item.id);
              }}
              alt={item.original_title}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Origan;

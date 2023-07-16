import React, { useEffect, useState } from "react";
import classes from "./TopRate.module.css";

const KinhDi = (props) => {
  //lưu data
  const [KinhDi, setKinhDi] = useState([]);
  //lưu trữ id
  const [movieId, setmovieId] = useState("");

  props.onMovieId(movieId);

  // console.log(KinhDi);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3${props.kinhdi}`
      );

      const data = await reponse.json();

      setKinhDi(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className={classes.rate_top}>
      <h3>Kinh Dị</h3>
      <div className={classes.hinh_anh}>
        {KinhDi.map((item) => {
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

export default KinhDi;

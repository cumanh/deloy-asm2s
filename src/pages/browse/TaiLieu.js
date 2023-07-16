import React, { useEffect, useState } from "react";
import classes from "./TopRate.module.css";

const Tailieu = (props) => {
  //lưu trữ data
  const [Tailieu, setTailieu] = useState([]);
  //lưu trữ id
  const [movieId, setmovieId] = useState("");

  props.onMovieId(movieId);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3${props.document}`
      );

      const data = await reponse.json();

      setTailieu(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  console.log(movieId);
  return (
    <div className={classes.rate_top}>
      <h3>Tài Liệu</h3>
      <div className={classes.hinh_anh}>
        {Tailieu.map((item) => {
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

export default Tailieu;

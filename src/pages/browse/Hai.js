import React, { useEffect, useState } from "react";
import classes from "./TopRate.module.css";

const PhimHai = (props) => {
  //lưu data mới lấy được
  const [hai, setHai] = useState([]);

  //lưu trữ id
  const [movieId, setmovieId] = useState("");
  props.onMovieId(movieId);
  //console.log(movieId);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(`https://api.themoviedb.org/3${props.hai}`);

      const data = await reponse.json();

      setHai(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className={classes.rate_top}>
      <h3>Phim Hài</h3>
      <div className={classes.hinh_anh}>
        {hai.map((item) => {
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

export default PhimHai;

import React, { useEffect, useState } from "react";
import classes from "./TopRate.module.css";

const TopRate = (props) => {
  //lưu data mơi lấy
  const [xepHangCao, setxepHangCao] = useState([]);
  //lưu trữ id
  const [movieId, setmovieId] = useState("");

  props.onMovieId(movieId);

  // console.log(xepHangCao);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3${props.TopRate}`
      );

      const data = await reponse.json();

      setxepHangCao(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className={classes.rate_top}>
      <h3>Xếp hạng cao</h3>
      <div className={classes.hinh_anh}>
        {xepHangCao.map((item) => {
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

export default TopRate;

import React, { useEffect, useState } from "react";
import classes from "./TopRate.module.css";

const HanhDong = (props) => {
  //lưu data
  const [hanhDong, sethanhDong] = useState([]);
  //lưu trữ id
  const [movieId, setmovieId] = useState("");

  props.onMovieId(movieId);
  //console.log(hanhDong);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3${props.hanhDong}`
      );

      const data = await reponse.json();

      sethanhDong(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className={classes.rate_top}>
      <h3>Hành động</h3>
      <div className={classes.hinh_anh}>
        {hanhDong.map((item) => {
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

export default HanhDong;

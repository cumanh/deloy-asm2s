import React, { useEffect, useState } from "react";
import classes from "./TopRate.module.css";

const Xuhuong = (props) => {
  //lưu data mới lây
  const [xuHuong, setXuhuong] = useState([]);
  //lưu trữ id
  const [movieId, setmovieId] = useState("");

  props.onMovieId(movieId);

  //console.log(xuHuong);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3${props.Xuhuong}`
      );

      const data = await reponse.json();

      setXuhuong(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className={classes.rate_top}>
      <h3>Xu hướng</h3>
      <div className={classes.hinh_anh}>
        {xuHuong.map((item) => {
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

export default Xuhuong;

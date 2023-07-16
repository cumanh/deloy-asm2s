import React, { useState } from "react";
import classes from "./SearchForm.module.css";
const RessultList = (props) => {
  //lưu id khi bắt sự kiện vào ảnh
  const [searchId, setsearchId] = useState("");
  //console.log(searchId);
  //truyền id cho phần tiếp theo xử lý
  props.onId(searchId);
  return (
    <div className={classes.rate_top}>
      <h3 className={classes.results}>Search results</h3>
      <div className={classes.hinh_anh}>
        {props.dataform.results.map((item) => {
          return (
            <img
              onClick={() => {
                setsearchId(item.id);
              }}
              alt={item.original_title}
              src={`https://image.tmdb.org/t/p/w500${
                item.backdrop_path ? item.backdrop_path : item.poster_path
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RessultList;

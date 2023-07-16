import React, { useState, useEffect } from "react";
import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  //lưu trữ input từ khoa lấy từ form
  const [keyword, setKeyword] = useState("");
  //console.log(keyword);
  //lưu trữ data khi tim được
  const [timphim, setTimphim] = useState({});
  //hàm thay đổi từ khóa
  const OnChangeHandler = (event) => {
    setKeyword(event.target.value);
  };
  //hàm sự kiện khi kích nút search
  const SearchHandler = () => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cb347dca5e899e4bdacb92b38305ba69&language=en-US`
      );

      const data = await reponse.json();
      //console.log(data);
      setTimphim(data);
    };

    fetchData().catch(console.error);
    // kiểm tra ô input có trông không
    if (keyword.trim().length === 0) {
      alert("hãy điền từ khóa tìm kiếm");
      return;
    }
    //reset lại ô input
    setKeyword("");
  };
  //truyền data lên search jsx
  props.onAdd(timphim);
  return (
    <div className={classes.container}>
      <div className={classes.batman}>
        <input type="text" value={keyword} onChange={OnChangeHandler}></input>
        <span className={classes.icon} onClick={SearchHandler}>
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </span>
      </div>
      <div className={classes.two_but}>
        <button className={classes.reset}>RESET</button>
        <button className={classes.search} onClick={SearchHandler}>
          SEARCH
        </button>
      </div>
    </div>
  );
};
export default SearchForm;

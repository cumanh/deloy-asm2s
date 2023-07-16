import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import classes from "./SearchForm.module.css";

const SearchDetail = (props) => {
  //lưu trữ data
  const [moviedata, setmoviedata] = useState([]);
  //kiểm tra mảng có trống hay không
  const check = moviedata.length !== 0;
  //lọc các phần tử có type giông hướng dẫn
  const loc = moviedata.filter(
    (item) => item.type === "Teaser" || item.type === "Trailer"
  );
  //console.log(loc, moviedata);
  //xử lý lấy data
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        `https://api.themoviedb.org/3/movie/${props.newId}/videos?api_key=cb347dca5e899e4bdacb92b38305ba69`
      );

      const data = await reponse.json();

      setmoviedata(data.results);
    };

    fetchData().catch(console.error);
  }, [props.newId]);
  //xử lý xem youtube
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={classes.daitail}>
      <div className={classes.tieude}>
        {check && <h2>{moviedata[0].name}</h2>}
        {check && <h3>Release Date: {moviedata[0].published_at}</h3>}
        <h3>Vote:6.6/10</h3>
        <p>
          Four year Isla was destroyed, dinosaur now live-and hunt- along all
          over the world.This gragile balace will reshape the future and
          determin, once àn for all, whether humamn beging are to remain the
          apex predator on a planet they now share with history's most fearsome
          creatures
        </p>
      </div>
      <div className={classes.film}>
        {loc.length > 0 ? (
          <YouTube videoId={loc[0].key} opts={opts} />
        ) : (
          <div>
            <img
              style={{ height: "300", width: "300" }}
              src={`https://image.tmdb.org/t/p/w500/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg
              `}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDetail;

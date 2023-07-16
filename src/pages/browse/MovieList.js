import React, { useState, useEffect } from "react";
import Origan from "./origan";
import Xuhuong from "./XuHuong";
import TopRate from "./Toprate";
import HanhDong from "./HanhDong";
import PhimHai from "./Hai";
import KinhDi from "./KinhDi";
import Langman from "./Langman";
import Tailieu from "./TaiLieu";
import MovieDetail from "./MovieDetail";

const requests = {
  fetchTrending: `/trending/all/week?api_key=cb347dca5e899e4bdacb92b38305ba69&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=cb347dca5e899e4bdacb92b38305ba69&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=cb347dca5e899e4bdacb92b38305ba69&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=cb347dca5e899e4bdacb92b38305ba69&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=cb347dca5e899e4bdacb92b38305ba69&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=cb347dca5e899e4bdacb92b38305ba69&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=cb347dca5e899e4bdacb92b38305ba69&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=cb347dca5e899e4bdacb92b38305ba69&with_genres=99`,
  //fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const MovieList = (props) => {
  //lưu giá trị id làm trung gian
  const [movieId, setMoveIs] = useState("");
  const AddmovieID = (item) => {
    setMoveIs(item);
  };
  //kiêm tra id có đúng hay không
  const check = movieId.length !== 0;
  return (
    <div>
      <Origan Origan={requests.fetchNetflixOriginals} onMovieId={AddmovieID} />
      <Xuhuong Xuhuong={requests.fetchTrending} onMovieId={AddmovieID} />
      <TopRate TopRate={requests.fetchTopRated} onMovieId={AddmovieID} />
      <HanhDong hanhDong={requests.fetchActionMovies} onMovieId={AddmovieID} />
      <PhimHai hai={requests.fetchComedyMovies} onMovieId={AddmovieID} />
      <KinhDi kinhdi={requests.fetchHorrorMovies} onMovieId={AddmovieID} />
      <Langman Langman={requests.fetchRomanceMovies} onMovieId={AddmovieID} />
      <Tailieu document={requests.fetchDocumentaries} onMovieId={AddmovieID} />
      {check && <MovieDetail movieId={movieId} />}
    </div>
  );
};

export default MovieList;

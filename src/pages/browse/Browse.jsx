import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MovieList from "./MovieList";

function Browse() {
  return (
    <div className="app" style={{ background: "black" }}>
      <Navbar />
      <MovieList />
    </div>
  );
}

export default Browse;

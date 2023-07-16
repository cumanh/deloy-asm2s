import React, { useState } from "react";
import Navbar from "../browse/Navbar";
import SearchForm from "./SearchForm";
import RessultList from "./ResultList";
import SearchDetail from "./SearchDetail";

const Search = () => {
  //lưu trữ data lấy từ form
  const [dataform, setDataform] = useState({});
  //lưu trữ id khi click vao ảnh
  const [id, setid] = useState("");
  //console.log(dataform);

  const addDataHandler = (item) => {
    setDataform(item);
  };
  //hàm lấy id từ seachlist
  const addIdHandler = (item) => {
    setid(item);
  };
  const ktra = id.length !== 0;

  const check = Object.values(dataform).length !== 0;
  return (
    <div className="app" style={{ backgroundColor: "black" }}>
      <Navbar />
      <SearchForm onAdd={addDataHandler} />
      {check && <RessultList dataform={dataform} onId={addIdHandler} />}
      {ktra && <SearchDetail newId={id} dataform={dataform} />}
    </div>
  );
};

export default Search;

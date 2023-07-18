import React, { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DaterangeComponent = () => {
  //gán giá trị trong date
  const [range, setrange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log(range);
  console.log(setrange);

  //dùng để lưu giá trị ẩn hiện date addDays(new Date(), 7)
  const [isOpen, setIsopen] = useState(false);

  const refCalen = useRef(null);

  //hanh động ấn bên ngoai
  const anKhiNhanBenNgoai = (event) => {
    // console.log(refCalen);
    // console.log(event.target);
    if (refCalen.current && !refCalen.current.contains(event.target)) {
      setIsopen(false);
    }
  };

  //sử dụng useEff để load
  useEffect(() => {
    //thêm sự kiện click hành độngtrên trang
    document.addEventListener("click", anKhiNhanBenNgoai, true);
  }, []);

  return (
    <div className="divcontainer">
      <i class="fas fa-calendar-o"></i>
      <input
        value={`${format(range[0].startDate, "dd-MM-yyyy")} to ${format(
          range[0].endDate,
          "dd-MM-yyyy"
        )}`}
        readOnly
        onClick={() => setIsopen(true)}
        style={{ width: "180px" }}
      ></input>
      <div className="calendar" ref={refCalen}>
        {isOpen && (
          <DateRange
            onChange={(item) => setrange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            direction="horizontal"
            month={2}
            ranges={range}
          />
        )}
      </div>
    </div>
  );
};

export default DaterangeComponent;

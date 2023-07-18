import React from "react";
import "./SearchList.css";

function SearchList(props) {
  return (
    <>
      {props.Searchlist.map(function (item) {
        return (
          <div className="khung">
            <div>
              <img className="list-img" src={item.image_url} />
            </div>
            <div className="khung-nho">
              <h3 className="list-name">{item.name}</h3>
              <p className="list-distance">{item.distance} from center</p>
              <p className="list-tag">{item.tag}</p>
              <p>
                <b className="list-descri">{item.description}</b>
              </p>
              <p className="list-type">{item.type}</p>
              <p>
                {/* điều kiện khi free_cancel=true thì hiển thị, false thi không */}
                {item.free_cancel === true ? (
                  <>
                    <p className="list-free">Free cancellation</p>
                    <p className="list-cancel">
                      you can cancel later, so lock in this great price today
                    </p>
                  </>
                ) : (
                  <p></p>
                )}
              </p>
            </div>
            <div>
              <span className="list-rtext">{item.rate_text}</span>
              <span className="list-rate">{item.rate}</span>

              <div className="includes">
                <p className="list-price">${item.price}</p>
                <p className="taxes">includes taxes and fees</p>
                <p className="see">See availability</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SearchList;

import React from "react";
import "./featuredProperties.css";
function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://global.aorus.com/upload/Admin/images/Egod_W-UMAA89RT.jpg"
          alt=""
          className="fpImg"
        />

        <span className="fpName">hotel name</span>
        <span className="fpCity">Marid</span>
        <span className="fpPrice">100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>good </span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://global.aorus.com/upload/Admin/images/Egod_W-UMAA89RT.jpg"
          alt=""
          className="fpImg"
        />

        <span className="fpName">hotel name</span>
        <span className="fpCity">Marid</span>
        <span className="fpPrice">100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>good </span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://global.aorus.com/upload/Admin/images/Egod_W-UMAA89RT.jpg"
          alt=""
          className="fpImg"
        />

        <span className="fpName">hotel name</span>
        <span className="fpCity">Marid</span>
        <span className="fpPrice">100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>good </span>
        </div>
      </div>
    </div>
  );
}
export default FeaturedProperties;

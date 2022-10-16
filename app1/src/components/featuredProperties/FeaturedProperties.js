import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
function FeaturedProperties() {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const imglink =
    "https://global.aorus.com/upload/Admin/images/Egod_W-UMAA89RT.jpg";

  return (
    <div className="fp">
      {loading
        ? "loading"
        : data.map((item) => {
            return (
              <div className="fpItem" key={item._id}>
                <img src={imglink} alt="" className="fpImg" />

                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">{item.price}</span>

                {item.rating && (
                  <div className="fpRating">
                    <button>8.9</button>
                    <span>good </span>
                  </div>
                )}
              </div>
            );
          })}
    </div>
  );
}
export default FeaturedProperties;

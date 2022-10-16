import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
function Featured() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,london,hcm"
  );

  return (
    <div className="featured">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              className="featuredImg"
            />

            <div className="featuredTitles">
              <h1>berlin</h1>
              <h2>{data[0]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />

            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[1]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />

            <div className="featuredTitles">
              <h1>HCM</h1>
              <h2>{data[2]}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Featured;

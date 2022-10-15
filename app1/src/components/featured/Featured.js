import React from "react";
import "./featured.css";
function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />

        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />

        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123</h2>
        </div>
      </div>
    </div>
  );
}
export default Featured;

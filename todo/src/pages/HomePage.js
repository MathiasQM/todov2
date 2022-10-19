import React from "react";
import MineLister from "../components/HomePage/MineLister.js";
import Noter from "../components/Noter/Noter";
import AddNote from "../components/Noter/AddNote";

const HomePage = () => {
  return (
    <div className="container">
      <MineLister />
      <div className="row">
        <div className="col-md-4">
          <AddNote />
        </div>
      </div>

      <div className="col-md-8">
        <Noter />
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import "./App.css";

const Main = ({ main_header, about_us, focus_areas, outgoing_efforts }) => {
  return (
    <div className="App">
      <div className="content">
        <div className="mission_wrapper">
          <div className="mission_content">
            <div className="main-header" dangerouslySetInnerHTML={{ __html: main_header }}>
            </div>
            <br />
            <div className="about" dangerouslySetInnerHTML={{ __html: about_us }}>
            </div>
            <div className="focus-areas" dangerouslySetInnerHTML={{ __html: focus_areas }}>
            </div>
          </div>
        </div>

        <div className="about_wrapper">
          <div className="about_content">
            <div className="outgoing-efforts" dangerouslySetInnerHTML={{ __html: outgoing_efforts }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import "./App.css";

const Team = ({ team_section }) => {
  return (
    <div className="content">
      <div className="team_wrapper" dangerouslySetInnerHTML={{ __html: team_section }} >
      </div>
    </div>
  );
};

export default Team;

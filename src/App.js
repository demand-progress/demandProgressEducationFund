import React from "react";
import "./App.css";
import Main from "./Main"
import Team from "./Team"
import { Switch, Route, Link} from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <div class="wrapper">
        <nav>
          <Link to="/">
            <img
              class="default-logo dark-version"
              alt="Demand Progress Education Fund"
              src="images/Demand_Progress_education_fund.png"
            />
          </Link>
          <div class="links">
            <Link to="./team">Our Team</Link>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/team" component={Team} />
        <Route path="/" component={Main} />
      </Switch>
      <p class="sisterOrg">
        Our sister 501(c)4 organization is Demand Progress.
      </p>
      <div class="footer" />
    </div>
  );
}

export default App;

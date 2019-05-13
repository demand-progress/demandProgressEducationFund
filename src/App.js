import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Team from "./Team";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    main_header: "",
    about_us: "",
    focus_areas: "",
    outgoing_efforts: ""
  };

  componentDidMount() {
    fetch(
      "https://6iz2t3g6ka.execute-api.us-east-1.amazonaws.com/dev/?page_id=2739"
    )
      .then(res => res.json())
      .then(({ meta, objects }) => {
        let page = objects[0];
        if (page) {
          this.setState({
            main_header: page.statement_leadin,
            about_us: page.statement_text,
            focus_areas: page.about_text,
            outgoing_efforts: page.thank_you_text
          });
        }
      });
  }

  renderMain = () => {
    return <Main {...this.state} />;
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <nav>
            <Link to="/">
              <img
                className="default-logo dark-version"
                alt="Demand Progress Education Fund"
                src="images/Demand_Progress_education_fund.png"
              />
            </Link>
            <div className="links">
              <Link to="./team">Our Team</Link>
            </div>
          </nav>
        </div>
        <Switch>
          <Route path="/team" component={Team} />
          <Route path="/" render={this.renderMain} />
        </Switch>
        <p className="sisterOrg">
          Our sister 501(c)4 organization is Demand Progress.
        </p>
        <div className="footer" />
      </div>
    );
  }
}
export default App;

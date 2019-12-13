import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Team from "./Team";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class App extends Component {
  state = {
    main_header: "",
    about_us: "",
    focus_areas: "",
    outgoing_efforts: "",
    loading: true
  };

  componentDidMount() {
    fetch('http://api.demandprogressaction.org/wp-json/wp/v2/pages/331')
      .then(res => res.json())
      .then((page) => {
        if (page) {
          const st8 = page.acf
          st8.loading = false
          this.setState(st8)
        }
      })
  }

  renderMain = () => {
    return <Main {...this.state} />;
  };

  renderTeam = () => {
    return <Team team_section={this.state.team} />;
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
          <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  className="default-logo dark-version"
                  alt="Demand Progress Education Fund"
                  src="images/Demand_Progress_education_fund.png"
                />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/team">
                  <Link className="dp-link">Our Team</Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="content">
            {loading ? (
              <div className="spinner-container">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ): (
              <Switch>
                <Route path="/team" render={this.renderTeam} />
                <Route path="/" render={this.renderMain} />
              </Switch>
            )}
          </div>
        <p className="sisterOrg">
          Our sister 501(c)4 organization is Demand Progress.
        </p>
        <div className="footer" />
      </div>
    );
  }
}
export default withRouter(App);

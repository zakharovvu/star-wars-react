import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";

import Home from "./Components/HomePage";
import PeoplePage from "./Components/People/PeoplePage";
import PersonPage from "./Components/People/PersonPage";
import FilmsPage from "./Components/Films/FilmsPage";
import FilmPage from "./Components/Films/FilmPage";




import './App.css';


class App extends Component {
  render() {
    return (
      <div className="Starwars">
        <h1>Star Wars</h1>

        <div className="Content">
          <menu className="Menu">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/people" >People</NavLink>
            <NavLink to="/films" >Films</NavLink>
            
          </menu>

          <section className="Section">
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path="/people/:id" component={PersonPage} />

            <Route exact path="/films" component={FilmsPage} />
            <Route exact path="/films/:id" component={FilmPage} />
          </section>
        </div>

      </div>
    );
  }
}

export default App;

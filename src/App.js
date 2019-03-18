import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";

import Home from "./Components/HomePage";
import PeoplePage from "./Components/People/PeoplePage";
import PersonPage from "./Components/People/PersonPage";
import FilmsPage from "./Components/Films/FilmsPage";
import FilmPage from "./Components/Films/FilmPage";
import Planets from "./Components/Planets/Planets";
import Planetdetails from "./Components/Planets/Planetdetails";





import './App.css';


class App extends Component {
  render() {
    return (
      <div className="Starwars">
        <h1>Star Wars</h1>

        <div className="Content">
          <menu className="Menu">
            <span className="Navlink"><NavLink exact activeClassName="Activ" to="/" >Home</NavLink></span>
            <span className="Navlink"><NavLink activeClassName="Activ" to="/people" >People</NavLink></span>
            <span className="Navlink"><NavLink activeClassName="Activ" to="/films" >Films</NavLink></span>
            <span className="Navlink"><NavLink activeClassName="Activ" to="/planets" >Planets</NavLink></span>
            
          </menu>

          <section className="Section">
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path="/people/:id" component={PersonPage} />           

            <Route exact path="/films" component={FilmsPage} />
            <Route exact path="/films/:id" component={FilmPage} />

            <Route exact path="/planets" component={Planets} />
            <Route exact path="/planets/:id" component={Planetdetails} />
          </section>
        </div>

      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import PokemonCreate from './components/PokemonCreate/PokemonCreate';
import NavBar from './components/NavBar/NavBar';



function App() {
    return (
      <BrowserRouter>
      <React.Fragment>
          <NavBar />
      <div className="App">
          <Route exact path= '/' component= {LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/details/:id' component={Details}/>
          <Route exact path='/pokemons' component={PokemonCreate}/>
        
      </div>
      </React.Fragment>
      </BrowserRouter>
  );
}

export default App;

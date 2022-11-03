import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import PokemonCreate from './components/PokemonCreate/PokemonCreate';
import NavBar from './components/NavBar/NavBar';



function App() {
    return (
      <BrowserRouter>
          <NavBar />
      <div className="App">
        <Switch>
          <Route exact path= '/' component= {LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/details/:id' component={Details}/>
          <Route exact path='/pokemons' component={PokemonCreate}/>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/products">
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="*">
            <NoMatch/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

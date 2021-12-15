import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Ahar from './components/ahar/Ahar';
import Drone from './components/Drone/Drone';
import Ibnesina from './components/Ibnesina/Ibnesina';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
       <Home></Home>
        </Route>
        <Route path="/home">
       <Home></Home>
        </Route>
        <Route path="/ahar">
       <Ahar></Ahar>
        </Route>
        <Route path="/drone">
       <Drone></Drone>
        </Route>
        <Route path="/ibnesina">
       <Ibnesina></Ibnesina>
        </Route>
        <Route path="/blog">
       <Blog></Blog>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

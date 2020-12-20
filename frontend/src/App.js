import "./App.css";
import Home from "./containers/home/home";
import Login from './containers/login/login';
import Signup from './containers/signup/signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

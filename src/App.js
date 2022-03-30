import "./App.css";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-full md:w-1/2 justify-center mx-auto font-Inter">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

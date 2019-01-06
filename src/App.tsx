import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

const Index = () => <h2>Home</h2>;
const Trips = () => <h2>Trips</h2>;
class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact={true} component={Index} />
          <Route path="/trips/" component={Trips} />
          <Link to="/trips/">Trips</Link>
        </div>
      </Router>
    );
  }
}

export default App;

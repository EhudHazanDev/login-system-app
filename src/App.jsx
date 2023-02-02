import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Login } from './pages/Login';
import { Info } from './pages/Info';

function App() {
  return (
    <div className="App">
      
      <Router>
            <Switch>
                <Route component={Info} path={'/info'}/>
                <Route component={Login} path={'/'}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

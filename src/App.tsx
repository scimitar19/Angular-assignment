
import './App.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/br-font/stylesheet.css";
// import "./custom.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';
// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

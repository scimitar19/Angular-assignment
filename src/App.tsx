
import './App.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/br-font/stylesheet.css";
// import "./custom.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';
// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
        </Switch>
      {/* </Layout> */}
      <MainLayout >
      <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
        </MainLayout>

    </BrowserRouter>
  );
}

export default App;

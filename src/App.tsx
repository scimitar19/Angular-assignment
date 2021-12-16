import "./App.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/br-font/stylesheet.css";
// import "./custom.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import CoursesView from "./pages/CoursesView";
import { StaticRoutesEnum } from "./utils/Enums/Routes";
// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/Login" exact component={Auth} />
        <MainLayout>
          <Route path={StaticRoutesEnum.DAHBOARD} exact component={Dashboard} />
          <Route path={StaticRoutesEnum.COURSES} exact component={CoursesView} />
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import "./App.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/br-font/stylesheet.css";
// import "./custom.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AdminSignUp from "./pages/Auth/Admin";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import CoursesView from "./pages/CoursesView";
import { StaticRoutesEnum } from "./utils/Enums/Routes";
import Verify from "./pages/Verify";
import UserSignUp from "./pages/Auth/User";
import AdminSingUp from "./pages/Auth/Admin";
// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/Login" exact component={Auth} />
        <Route path="/auth/user/Signup" exact component={UserSignUp} />
        <Route path="/auth/admin/Signup" exact component={AdminSignUp} />
        <MainLayout>
          <Route path={StaticRoutesEnum.DAHBOARD} exact component={Dashboard} />
          <Route path={StaticRoutesEnum.COURSES} exact component={CoursesView} />
          <Route path="/verify" exact component={Verify} />
          {/*<Route path="/dashboard" exact component={Dashboard} />*/}
          {/*<Route path="/courses" exact component={CoursesView} />*/}
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

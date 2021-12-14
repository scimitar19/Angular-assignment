import React, { lazy } from 'react';
import logo from './logo.svg';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/br-font/stylesheet.css";
// import "./custom.scss";
import Layout from './components/Layout';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

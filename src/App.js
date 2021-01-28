import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import SignIn from "./components/User/SignIn";
import Perfil from "./components/User/Perfil";
import SignOut from "./components/User/SignOut";
import Footer from "./components/Footer";
import Events from "./components/Events/Events";
import EventAdd from "./components/Events/EventAdd";
import Home from "./components/Home";
import UsersList from "./components/Admin/UsersList";
import Cotizador from "./components/Cotizador/CotizadorP";
import WebPage from "./components/Landing/WebPage";
import "./App.css";
import RAapp from "./components/Landing/RAapp.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            {/* Landings */}
            <Route path="/webpage">
              <WebPage />
            </Route>
            <Route path="/RAapp">
              <RAapp/>
            </Route>
            {/* Admin */}
            <Route path="/users-list">
              <UsersList />
            </Route>
            {/* User */}
            <Route path="/perfil">
              <Perfil />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signout">
              <SignOut />
            </Route>
            <Route path="/event">
              <Events />
            </Route>
            {/* Organizador */}
            <Route path="/eventadd">
              <EventAdd />
            </Route>

            <Route path="/cotizador">
              <Cotizador />
            </Route>
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;

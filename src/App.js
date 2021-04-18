import { Route, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

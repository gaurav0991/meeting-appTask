import React from "react";
import "./SideBar.css";
import menu from "../../assets/menu.svg";
import Home from "../../assets/Home.svg";
import AboutMe from "../../assets/AboutMe.svg";
import { Link } from "react-router-dom";

function SideBar() {
  const [dat, setDa] = React.useState(0);
  React.useEffect(() => {
    console.log(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <div className="SideBar">
      <div className="SideBar-top">
        <img className="menu-image" src={menu} />
        <p className="SideBar-roll">1806115</p>
      </div>
      <div className="SideBar-menu">
        <div
          className={`SideBar-item  ${
            window.location.pathname.toString() == "/" && dat == 0
              ? "selected"
              : ""
          }`}
        >
          <img className="SideBar-item-img" src={Home} />
          <Link
            onClick={() => {
              setDa(!dat);
            }}
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h4 className={`SideBar-item-title `}>Home</h4>
          </Link>
        </div>
        <div
          className={`SideBar-item  ${
            window.location.pathname.toString() == "/about" ? "selected" : ""
          }`}
        >
          <img className="SideBar-item-img" src={AboutMe} />
          <Link
            onClick={() => {
              setDa(!dat);
            }}
            to="/about"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            <h4 className="SideBar-item-title">About Me</h4>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

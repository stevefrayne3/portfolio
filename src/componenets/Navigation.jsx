import { Link, NavLink } from "react-router-dom";
import logo from "./logo.ico";
import { useState, useEffect } from "react";
import close from "./menuClose.svg";
import open from "./menuOpen.svg";
import aboutIcon from "../assests/navicons/VectorIcons-1.svg";
import homeIcon from "../assests/navicons/VectorIcons-2.svg";
import projectIcon from "../assests/navicons/ProjectsIcons.svg";
import resumeIcon from "../assests/navicons/ResumeIcons.svg";
import contactIcon from "../assests/navicons/VectorIcons.svg";

const Navigation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const toggleMenu = (event) => {
    event.preventDefault();
    active ? setActive(false) : setActive(true);
  };

  return (
    <header className="container-nav">
      <div className="container-nav-bar">
        <div className="container-nav-bar-logo">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: "2.3rem" }} />
          </Link>
        </div>
        {width > 800 ? (
          <div className="container-nav-bar-links">
            <NavLink to="/">
              <img
                src={homeIcon}
                alt=""
                style={{ height: "1.4rem", fill: "blue" }}
              />
              Home
            </NavLink>
            <NavLink to="about">
              <img
                src={aboutIcon}
                alt=""
                style={{ height: "1.5rem", fill: "blue" }}
              />
              About
            </NavLink>

            <NavLink to="projects">
              <img
                src={projectIcon}
                alt=""
                style={{ height: "1.6rem", fill: "blue" }}
              />
              Projects
            </NavLink>

            <NavLink to="resume">
              <img
                src={resumeIcon}
                alt=""
                style={{ height: "1.6rem", fill: "blue" }}
              />
              Resume
            </NavLink>

            <NavLink to="contact">
              <img
                src={contactIcon}
                alt=""
                style={{ height: "1.6rem", fill: "blue" }}
              />
              Contact
            </NavLink>
          </div>
        ) : (
          <div className={`hammenu $active ? '':''`} onClick={toggleMenu}>
            {active ? (
              <img src={open} alt="" style={{ height: "2rem" }} />
            ) : (
              <img src={close} alt="" style={{ height: "2rem" }} />
            )}
          </div>
        )}
      </div>
      {active ? <Hammenu active setActive={setActive} /> : ""}
    </header>
  );
};

const Hammenu = ({ active, setActive }) => {
  const retoggle = () => {
    setActive(false);
  };

  return (
    <div className={active ? "open opened" : ""}>
      <NavLink onClick={retoggle} to="/">
        <img src={homeIcon} alt="" style={{ height: "1.5rem", fill: "blue" }} />
        Home
      </NavLink>
      <NavLink onClick={retoggle} to="about">
        <img src={aboutIcon} alt="" style={{ height: "1.5rem", fill: "blue" }} />
        About
      </NavLink>
      <NavLink onClick={retoggle} to="projects">
        <img
          src={projectIcon}
          alt=""
          style={{ height: "1.6rem", fill: "blue" }}
        />
        Project
      </NavLink>
      <NavLink onClick={retoggle} to="resume">
        <img
          src={resumeIcon}
          alt=""
          style={{ height: "1.5rem", fill: "blue" }}
        />
        Resume
      </NavLink>
      <NavLink onClick={retoggle} to="contact">
        <img
          src={contactIcon}
          alt=""
          style={{ height: "1.5rem", fill: "blue" }}
        />
        Contact
      </NavLink>
    </div>
  );
};

export default Navigation;

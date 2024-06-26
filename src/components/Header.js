import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [showAboutInfo, setShowAboutInfo] = useState(false);
  const [showOwnerInfo, setShowOwnerInfo] = useState(false);
  const aboutRef = useRef();

  const toggleContactInfo = () => {
    setShowAboutInfo(!showAboutInfo);
  };

  const toggleOwnerInfo = () => {
    setShowOwnerInfo(!showOwnerInfo);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setShowAboutInfo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="App-header">
      <div className="headerText">
        <img
          src={
            "https://img.freepik.com/premium-vector/weather-cloud-sun-rain-lightning-logo-design-symbol-icon-template_23729-1786.jpg"
          }
          alt="Logo"
          className="logo logo-white"
        />
        <h2 className="WeatherApp">React Weather App</h2>
      </div>
      <nav className="Buttonss">
        <ul>
          <li>
            <a href="http://localhost:3000">Home</a>
          </li>
          <li>
            <button className="about-button" onClick={toggleContactInfo}>
              About
            </button>
            {showAboutInfo && (
              <div ref={aboutRef} className="about-info fadeIn">
                <p>
                  This is a weather app that allows you to search for weather
                  information by city name.
                  <br></br>
                  For example, you can search for "New York" to get the weather
                  information for New York City.
                </p>
                <button onClick={toggleContactInfo}>Close</button>
              </div>
            )}
          </li>
          <li>
            <button className="about-button" onClick={toggleOwnerInfo}>
              Information
            </button>
            {showOwnerInfo && (
              <div ref={aboutRef} className="about-info fadeIn">
                <p>
                  Created by Bang - CSE - HCMUT
                  <br></br>
                  <br></br>
                  I'm not own all the images, icons, weather data and some of
                  the code in this project.
                </p>
                <button onClick={toggleOwnerInfo}>Close</button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

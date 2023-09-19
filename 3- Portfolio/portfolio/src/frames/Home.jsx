import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ParticlesContainer from "../components/ParticlesContainer/ParticlesContainer";
import "./../animation/animate-typewriter.css";
import "./../animation/animate-fadeIn4.css";


const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const backgroundClass = isDarkTheme ? "bg-black" : "bg-white";
  const textClass = isDarkTheme ? "text-white" : "text-black";

  return (
    <div id="home" className={`h-screen relative ${backgroundClass}`}>
      <ParticlesContainer />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`flex flex-col justify-center items-center relative z-10`}
        >
          <h1
            className={`text-8xl font-bold ${textClass} typewriter-animation`}
          >
            Hi! I'm Adrián
          </h1>

          <p
            className={`${textClass} font-semibold text-4xl animate-fadeIn4 mt-10`}
          >
            I'm a full-stack developer specialized in React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
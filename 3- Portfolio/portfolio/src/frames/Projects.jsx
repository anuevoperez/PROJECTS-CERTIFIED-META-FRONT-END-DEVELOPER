import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Project from "./../components/Project";
import img1 from "./../assets/img1.jpg";
import img2 from "./../assets/img2.jpg";
import img3 from "./../assets/img3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../animation/animation-fadeInLeft.css";

const Projects = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  // Clases de estilo para el fondo y el texto
  const backgroundClass = isDarkTheme ? "bg-black" : "bg-white";
  const textClass = isDarkTheme ? "text-white" : "text-black";

  // Clases de estilo para el borde inferior
  const borderBottomClass = isDarkTheme ? "border-b border-white" : "border-b border-black";

  // Datos de proyectos
  const projectsData = [
    {
      name: "Proyecto 1",
      image: img1,
      url: "https://www.google.com",
    },
    {
      name: "Proyecto 2",
      image: img2,
      url: "https://www.google.com",
    },
    {
      name: "Proyecto 3",
      image: img3,
      url: "https://www.google.com",
    },
  ];

  return (
    <div
      id="projects" className={`h-screen ${backgroundClass} py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center`}
    >
      <div className={`max-w-screen-xl flex flex-col ${backgroundClass} animate-fadeInLeft`}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className={`${textClass} font-semibold text-5xl mt-10 mb-40 ${borderBottomClass} pb-3`}>
            Featured Projects
          </h2>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full max-w-screen-xl">
            <Carousel
              showThumbs={false}
              showArrows={false}
              showIndicators={true}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={1000}
              swipeable={true}
            >
              {projectsData.map((project, index) => (
                <div key={index} className="carousel-project">
                  <Project {...project} textClass={textClass} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

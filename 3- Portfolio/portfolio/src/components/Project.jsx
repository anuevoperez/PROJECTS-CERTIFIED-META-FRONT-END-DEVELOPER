import React from "react";

function Project({ name, image, url, textClass }) {
  const imageContainerStyle = {
    width: "600px", // Ancho deseado para el contenedor de la imagen
    height: "400px", // Altura deseada para el contenedor de la imagen
  };

  const imageStyle = {
    width: "100%", // Ancho del 100% para ajustarse al contenedor
    height: "100%", // Altura del 100% para ajustarse al contenedor
  };

  return (
    <div className="carousel-project flex justify-center items-center h-full">
      <div style={imageContainerStyle} className="relative">
        <img src={image} alt={name} style={imageStyle} className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <div className={`text-white text-center ${textClass}`}>
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

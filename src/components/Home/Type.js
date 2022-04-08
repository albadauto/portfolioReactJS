import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Web Fullstack",
          "Soluções complexas!",
          "Técnico qualificado!",
          "Técnologia de ponta!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

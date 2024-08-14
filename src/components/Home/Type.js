import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Graduate Student at Illinois Tech",
          "Ex Software Developer Intern at BMO",
          "Ex Software Engineer II at NCR Voyix",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

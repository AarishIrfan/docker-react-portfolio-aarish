import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SQA Engineer",
          "Manual Testing",
          "Automation",
          "Test Management",
          "Selenium",
          "Playwright",
          "Postman",
          "Agile",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

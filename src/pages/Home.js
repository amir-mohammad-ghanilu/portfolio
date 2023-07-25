import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Typed from "typed.js";
import TextTransition from "react-text-transition";
import { Helmet } from "react-helmet-async";
import { links } from "../constants/particles";
function Home({ helmetTitle }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const nameEl = useRef(null);
  const [index, setIndex] = useState(0);
  const strings = [
    "  توسعه دهنده فول استک هستم",
    "  یادگیرنده برنامه نویسی هستم",
    "  فریلنسر نیستم",
  ];
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: [" امیرمحمد غنی لو  "],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => {
      typedName.destroy();
      clearTimeout(intervalId);
    };
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../assets/darkPerson.jpg")})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />
      <Typography ref={nameEl} variant="h3" color="whitesmoke">
        {" "}
        [ [امیرمحمد غنی لو] ]
      </Typography>
      <Box component="div" sx={{ display: "flex" }}>
        <TextTransition>
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#F93C92",
              mt: 4,
              mr: 1,
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h4" color="whitesmoke" sx={{ mt: 4, mr: 1 }}>
          من یک
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;

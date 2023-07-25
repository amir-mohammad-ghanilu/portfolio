import React, { useState } from "react";
import { Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import { alphabet } from "../../constants/Alphabet";
import DarkMode from "./DarkMode";
import { SocialMediaIcons } from "../SocialMediaIcons";
import avatar from "../../assets/3551739.jpg";
import CustomAvatar from "../commen/CustomAvatar";
function SidebarHeader() {
  const [start, setStart] = useState(false);
  return (
    <>
      <DarkMode />
      {/* <DarkMode /> */}
      <CustomAvatar size={200} avatar={avatar} fallback="A_M" />

      <Typography variant="h6" sx={{ textAlign: "center" }} color="whitesmoke">
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabet}
          characters="امیرمحمد غنی لو "
          onComplete={() => setStart(true)}
        />
      </Typography>
      {start && (
        <Typography
          variant="caption"
          sx={{ textAlign: "center" }}
          color="whitesmoke"
        >
          <RandomReveal
            isPlaying
            duration={3}
            characterSet={alphabet}
            characters="یادگیرنده برنامه نویسی و توسعه وب "
          />
        </Typography>
      )}
      {/***  */}
      <SocialMediaIcons />
    </>
  );
}

export default SidebarHeader;

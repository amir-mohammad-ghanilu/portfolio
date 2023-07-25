import React, { useContext } from "react";
import MainContext from "../../context/index";
import { useTheme } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
function DarkMode() {
  const { modeHandler } = useContext(MainContext);
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",

        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        size="small"
        variant="extended"
        color="secondary"
        onClick={modeHandler}
        sx={{ color: "whitesmoke", ml: 2 }}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined sx={{ mr: 1 }} />
        ) : (
          <NightlightOutlined sx={{ mr: 1 }} />
        )}
        {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
      </Fab>
    </Box>
  );
}

export default DarkMode;

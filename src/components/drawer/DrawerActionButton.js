import React, { useContext } from "react";
import MainContext from "../../context/index";
import { grey } from "@mui/material/colors";
import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
function DrawerActionButton() {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <Box
      sx={{
        position: "absolute",

        display: {
          sm: "block",
          md: "none",
        },
      }}
    >
      <Fab
        aria-label="Sidebar"
        size="small"
        onClick={() => setDrawerOpen(true)}
        sx={{ backgroundColor: grey[500], m: 3 }}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
}

export default DrawerActionButton;

import React from "react";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
function SidebarContainer({ children }) {
  const theme = useTheme();
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[400],
        overflowX: "hidden",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      {children}
    </Grid>
  );
}

export default SidebarContainer;

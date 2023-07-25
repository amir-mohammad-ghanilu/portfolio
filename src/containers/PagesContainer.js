import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
function PagesContainer({ children }) {
  const theme = useTheme();
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={10}
      xl={10}
      sx={{
        backgroundColor: "whitesmoke",
      }}
    >
      {children}
    </Grid>
  );
}

export default PagesContainer;

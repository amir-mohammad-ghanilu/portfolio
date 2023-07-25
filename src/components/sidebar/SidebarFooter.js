import React from "react";
import { Box, Typography } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";
function SidebarFooter() {
  return (
    <Box
      height="100px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="10px"
    >
      <Typography variant="subtitle2" color="text.primary">
        طراحی شده با{" "}
        <FavoriteRounded sx={{ verticalAlign: "middle", color: "tomato" }} />
      </Typography>
      <Typography variant="subtitle2" color="text.primary" mt="5px  ">
        کپی رایت1401
        <CopyrightRounded sx={{ verticalAlign: "middle", color: "white" }} />
      </Typography>
    </Box>
  );
}

export default SidebarFooter;

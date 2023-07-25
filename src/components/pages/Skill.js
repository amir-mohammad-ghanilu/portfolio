import {
  Badge,
  Box,
  Chip,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
function Skill({ icon, name, color, value }) {
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          "&::before,&::after": {
            borderColor: `${color}.main`,
          },
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
          color={color}
          label={name}
          sx={{ color: "#000", p: 3 }}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="black" mr={2}>
            <Badge
              variant="standard"
              badgeContent={`${Math.round(value)}%`}
              color={color}
            ></Badge>
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ height: 10, borderRadius: "5px" }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Skill;

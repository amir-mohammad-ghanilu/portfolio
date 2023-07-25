import React from "react";
import { devWorkInfo } from "../constants/Details";
import CountUp from "react-countup";
import { Box, Typography, Tooltip, Chip } from "@mui/material";
function DevWorkCount() {
  return (
    <>
      {devWorkInfo.map((item, index) => (
        <Box key={index} component="div" sx={{ width: 1, mb: 2, mt: 1 }}>
          <Tooltip title={item.tooltipTitle} placement="right" arrow>
            <Chip
              icon={item.icon}
              label={
                <Typography variant="body1" color="whitesmoke">
                  <CountUp start={0} end={item.total} duration={2} />
                </Typography>
              }
              sx={{
                p: 2,
                backgroundColor: item.color,
                width: 1,
              }}
            />
          </Tooltip>
        </Box>
      ))}
    </>
  );
}

export default DevWorkCount;

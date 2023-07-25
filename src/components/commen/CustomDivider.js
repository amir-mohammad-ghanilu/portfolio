import React, { useState, useEffect } from "react";
import { Slide, Divider, Chip, Typography } from "@mui/material";
function CustomDivider({ bColor, cColor, icon, align, text }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Slide
      direction="down"
      in={loading}
      style={{ transitionDelay: loading ? "300ms" : "0ms" }}
    >
      <Divider
        textAlign={align}
        sx={{
          "&::before,&::after": {
            borderColor:{bColor},
          },
        }}
      >
        <Chip
          color={cColor}
          icon={icon}
          label={
            <Typography
              variant="body1"
              color="black"
              sx={{ textAlign: "center" }}
            >
              {text}
            </Typography>
          }
          sx={{ p: 3 }}
        />
      </Divider>
    </Slide>
  );
}

export default CustomDivider;

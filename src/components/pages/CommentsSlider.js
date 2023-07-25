import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import { userComments } from "../../constants/Details";

function CommentsSlider() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  const options = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...options}>
      {userComments.map((item, index) => (
        <Box key={index} component="div" sx={{ justifyContent: "center" }}>
          <Avatar
            src={item.avatar}
            variant="rounded"
            sx={{ height: 100, width: 100, margin: "0 auto" }}
          />
          <Typography variant="body1" textAlign="center" color="black">
            {item.fullname}
          </Typography>
          <Typography variant="body1" textAlign="center" color="black">
            {item.jobTitle}
          </Typography>
          <Card
            sx={{
              backgroundColor: "lightsalmon",
              width: 1 / 2,
              m: "0 auto",
              borderRadius: "5px",
            }}
          >
            <CardContent>
              <Typography
                variant="body2"
                textAlign="center"
                color="text.primary"
              >
                {item.comment}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Slider>
  );
}

export default CommentsSlider;

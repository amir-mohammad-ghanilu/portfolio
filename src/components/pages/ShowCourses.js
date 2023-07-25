import React, { useState, useEffect } from "react";
import EllipsisText from "react-ellipsis-text/lib/components/EllipsisText";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
} from "@mui/material";
import { Grid, Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import { courses } from "../../constants/Details";

function ShowCourses() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      {courses.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={6} lg={4} mt={5}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 1}99ms` : "0ms",
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "steelblue",
                borderRadius: "10px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250px"
                  width="200px"
                  alt={item.title}
                  image={item.image}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    gutterBottom
                    sx={{ direction: "ltr" }}
                  >
                    <EllipsisText text={item.info} length={"100"} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={item.link}
                  size="small"
                  color="primary"
                  target="-blank"
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
}

export default ShowCourses;

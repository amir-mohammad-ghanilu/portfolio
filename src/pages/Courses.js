import React from "react";
import { Card, CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { SchoolRounded } from "@mui/icons-material";
import CustomDivider from "../components/commen/CustomDivider";
import ShowCourses from "../components/pages/ShowCourses";
function Courses({ helmetTitle }) {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <CardContent>
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>

        <CustomDivider
          align="center"
          cColor="primary"
          bColor="priamry.main"
          icon={<SchoolRounded />}
          text="درباره من"
        />

        <Grid container sx={{ mx: 3 }}>
          <ShowCourses />
        </Grid>
      </CardContent>
    </Card>
  );
}
export default Courses;

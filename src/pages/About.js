import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  Tooltip,
  Grid,
} from "@mui/material";
import React from "react";
import avatar from "../assets/3551739.jpg";
import DevInfo from "../components/pages/DevInfo";
import { SelfImprovementRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import CustomAvatar from "../components/commen/CustomAvatar";
import CustomDivider from "../components/commen/CustomDivider";
import NewSkills from "../components/pages/NewSkills";
import DevWorkCount from "./DevWorkCount";
function About({ helmetTitle }) {
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
        <Grid container sx={{ mx: 1 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bcolor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارت های من"
            />

            <Grid container sx={{ mt: 3 }}>
              <Grid
                item
                xs={0}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
                <DevWorkCount />
              </Grid>

              <Grid item xs={12} sm={8} md={9} lg={9}>
                <DevInfo />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar size={250} avatar={avatar} fallback="A_M" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bcolor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارت های من"
            />
            <NewSkills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default About;

import React from "react";
import { Card, CardContent } from "@mui/material";
import { Grid, } from "@mui/material";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../components/commen/CustomDivider";
import {
  HomeRepairServiceRounded,
  SettingsEthernetRounded,
} from "@mui/icons-material";
import DevExpeTimeLine from "../components/pages/DevExpeTimeLine";
import DevEduTimeLine from "../components/pages/DevEduTimeLine";
function Resume({ helmetTitle }) {
 
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
          bColor="error.main"
          cColor="error"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="رزومه من"
        />

        <Grid container>
          <Grid item xs={6}>
            <CustomDivider
              cColor="warning"
              bColor="primary.main"
              text="تجربیات"
              align="center"
              icon={<HomeRepairServiceRounded />}
            />

            <DevExpeTimeLine />
          </Grid>
          <Grid item xs={6}>
            <CustomDivider
              cColor="info"
              bColor="gray"
              text="تحصیلات"
              align="center"
            />

            {/*devedu*/}
            <DevEduTimeLine />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Resume;

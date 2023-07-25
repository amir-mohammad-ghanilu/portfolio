import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, Box } from "@mui/material";

import { ForumRounded } from "@mui/icons-material";
import CustomDivider from "../components/commen/CustomDivider";
import CommentsSlider from "../components/pages/CommentsSlider";
function Comment({ helmetTitle }) {
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
          bColor="primary.main"
          icon={<ForumRounded />}
          text="نظرات"
        />

        <Box
          component="div"
          sx={{ mt: "10px", justifyContent: "center", alignItems: "center" }}
        >
          {/* commentsSlider**/}
          <CommentsSlider />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Comment;

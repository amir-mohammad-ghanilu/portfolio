import React from "react";
import { Box, Divider } from "@mui/material";
import { SideBarTabs, SidebarHeader, SidebarFooter } from "./index";
const SideBarContent = () => {

  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
      {/*sidebat header*/}
      <SidebarHeader />

      <Divider variant="middle" sx={{ mt: "5px" }} />

      {/*sidebar Tabs*/}
      <SideBarTabs />

      <Divider variant="middle" />

      {/*sidbar footer */}
      <SidebarFooter />
    </Box>
  );
};

export default SideBarContent;

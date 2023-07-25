import React from "react";
import { Drawer } from "@mui/material";
import { SideBarContent } from "../sidebar";
import { useContext } from "react";
import MainContext from "../../context/index";
function SideBarDrawer() {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
        },
      }}
    >
      {/* Drawer */}
      <SideBarContent />
    </Drawer>
  );
}

export default SideBarDrawer;

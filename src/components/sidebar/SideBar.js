import React, { useState } from "react";
import { SideBarContent } from "./index";
import SideBarDrawer from "../drawer/SideBarDrawer";
function SideBar() {
  return (
    <>
      <SideBarContent />
      {/*sidebar-drawer*/}
      <SideBarDrawer />
    </>
  );
}

export default SideBar;

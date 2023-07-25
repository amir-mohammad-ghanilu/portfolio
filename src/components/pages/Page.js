import { Box } from "@mui/material";
import React, { useContext } from "react";
import MainContext from "../../context/index";
function Page({ children, index }) {
  const { pageNumber } = useContext(MainContext);
  return (
    <div
      id={`tabpanel-${index}`}
      role="tabpanel"
      hidden={pageNumber !== index}
      aria-labelledby={`sidebar-tab-${index}`}
    >
      {pageNumber === index && (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
      )}
    </div>
  );
}

export default Page;

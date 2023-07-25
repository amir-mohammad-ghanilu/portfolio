import React, { useContext } from "react";
import { grey } from "@mui/material/colors";
import { Tabs, Tab } from "@mui/material";
import { dataTabs } from "../../constants/tabsData";
import MainContext from "../../context/index";
import { useTheme } from "@mui/material/styles";
function SideBarTabs() {
  const theme = useTheme();
  const data = dataTabs();
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollbutton="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[500],
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
}

export default SideBarTabs;

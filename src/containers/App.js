import { useEffect, useState } from "react";
import DrawerActionButton from "../components/drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
import MainLayout from "../layouts/MainLayout";
import { SideBar } from "../components/sidebar/index";
import PagesContainer from "./PagesContainer";
import Page from "../components/pages/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context/index";
import Home from "../pages/Home";
import About from "../pages/About";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Resume from "../pages/Resume";
import Courses from "../pages/Courses"; 
import Comment from "../pages/Comment";
import ContactUs from "../pages/ContactUs";
function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const preferdDarkMode = useMediaQuery("(prefers-color-scheme:dark)");
  const [mode, setMode] = useState();
  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };
  const modeHandler = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    setMode(preferdDarkMode ? "dark" : "light");
  }, []);
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);
  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        modeHandler,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <SideBar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0}>
              {/** Home */}
              <Home helmetTitle="وب سایت شخصی امیرمحمد غنی لو " />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle="وب سایت شخصی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="وب سایت شخصی | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Courses helmetTitle="وبسایت شخصی | دوره های من" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comment helmetTitle="وبسایت شخصی | نظرات " />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <ContactUs helmetTitle="وبسایت شخصی | تماس با من " />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;

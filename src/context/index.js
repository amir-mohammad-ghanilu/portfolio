import { createContext } from "react";

export default createContext({
  pageNumber: 0,
  handlePageNumber: () => {},
  modeHandler: () => {},
  drawerOpen: false,
  setDrawerOpen: () => {},
});

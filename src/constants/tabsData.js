import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";
const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};
export const dataTabs = () => {
  const tabs = [
    { label: "صفحه اصلی ", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
    { label: " رزومه من", icon: <TextSnippetRounded />, ...tabProps(1) },
    { label: "دوره های من  ", icon: <TerminalRounded />, ...tabProps(1) },
    { label: "نظرات دانشجویان ", icon: <MessageRounded />, ...tabProps(1) },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded />,
      ...tabProps(1),
    },
  ];
  return tabs;
};

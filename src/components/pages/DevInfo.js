import React from "react";
import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
function Info({ children }) {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "middle", color: "#B3AFAE" }}
      />
    </Typography>
  );
}
const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی :امیرمحمد غنی لو</Info>
      <Info>سن : 21</Info>
      <Info>شهر : کلاله</Info>
      <Info>amirmohammad@gmail.ir : آدرس ایمیل</Info>
      <Info>شماره موبایل : 09020061019</Info>
    </>
  );
};

export default DevInfo;

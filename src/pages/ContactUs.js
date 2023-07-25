import { useState, useEffect } from "react";
import map from "../assets/map.svg";
import {
  Typography,
  Card,
  CardContent,
  Slide,
  Grid,
} from "@mui/material";
import {
  AccountCircle,
  
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../components/commen/CustomDivider";
import ContactForm from "../components/pages/ContactForm";

const ContactUs = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          align="center"
          cColor="warning"
          bColor="warning..main"
          icon={<AccountCircle />}
          text="ارتباط با من"
        />

        <Grid container sx={{ mt: 5 }}>
          <Slide
            direction="up"
            in={loading}
            style={{ transitionDelay: loading ? "300ms" : "0ms" }}
          >
            <Grid item xs={12} sm={12} md={8}>
              <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                {/**form */}
                <ContactForm/>
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{ transitionDelay: loading ? "300ms" : "0ms" }}
          >
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${map})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography
                variant="h6"
                color="black"
                sx={{
                  fontFamily: "vazir",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                  mt: 4,
                }}
              >
                بیا در مورد همه چیز با هم صحبت کنیم!
              </Typography>
              <Typography
                variant="body1"
                color="black"
                sx={{
                  mt: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <a
                  href="#"
                  alt="email"
                  style={{ color: "tomato", textDecoration: "none" }}
                >
                  ایمیل بزن به من
                </a>
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactUs;

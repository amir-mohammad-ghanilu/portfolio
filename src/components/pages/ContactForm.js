import React from "react";
import { useFormik } from "formik";
import {
  CardContent,
  TextField,
  InputAdornment,
  Button,
  Grid,
} from "@mui/material";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
import { validtaionSchema } from "../../validation/validationSchema";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      message: "",
      subject: "",
      email: "",
    },
    validationSchema: validtaionSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={12} sx={{ direction: "ltr" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  focused
                  label="نام و نام خانوادگی"
                  name="fullname"
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullname && Boolean(formik.errors.fullname)
                  }
                  helperText={formik.touched.fullname && formik.errors.fullname}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="ایمیل"
                  name="email"
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="عنوان"
                  name="subject"
                  value={formik.values?.subject}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubjectRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  size="small"
                  color="warning"
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                  label="متن پیام "
                  name="subject"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{ backgroundColor: "green", color: "white" }}
                >
                  ارسال کن
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  );
};

export default ContactForm;

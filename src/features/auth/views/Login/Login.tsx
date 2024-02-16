"use client";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import LoginForm from "./LoginForm";

const Login = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {!isMobile && (
        <Grid item xs={6}>
          Image
        </Grid>
      )}
      <Grid item xs={isMobile ? 12 : 6}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;

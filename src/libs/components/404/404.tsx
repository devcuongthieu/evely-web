import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Theme, makeStyles } from "@mui/material/styles";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: theme.spacing(3),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));

const NotFound = () => {
  // @ts-ignore
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.text}>
        404 - Not Found
      </Typography>
      <Typography variant="body1" className={classes.text}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/">
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;

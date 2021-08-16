import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: 10,
    position: "absolute",
    right: 10,
    top: 20,
    color: "#0C5FBC",
    "& > h6": {
      fontSize: 16,
    },
  },
});

const Download = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GetAppIcon />
      <Typography variant="h6">Resume</Typography>
    </div>
  );
};

export default Download;

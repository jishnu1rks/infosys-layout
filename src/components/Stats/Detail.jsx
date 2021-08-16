import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    lineHeight: "19px",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  value: {
    fontWeight: "normal",
  },
});

const Detail = ({ label, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.label}>
        {label} :
      </Typography>
      <Typography variant="body2" className={classes.value}>
        {value}
      </Typography>
    </div>
  );
};

export default Detail;

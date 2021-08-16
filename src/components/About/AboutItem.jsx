import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  list: {
    paddingLeft: "1em",
    "& > li": {
      paddingBottom: "1rem",
    },
    "& > p": {
      fontSize: "1rem",
      lineHeight: "19px",
      fontWeight: "normal",
      color: "#4F4F4F",
    },
  },
});

const AboutItem = ({ heading, color, listItems }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h5"
        style={{ color: color }}
        className={classes.heading}
      >
        {heading}
      </Typography>
      <ul className={classes.list}>
        {listItems.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutItem;

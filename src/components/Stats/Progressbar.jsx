import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
  },
  colorPrimary: {
    backgroundColor: "#76D950",
  },
  bar: {
    backgroundColor: "#FE6447",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    border: "1px solid #828282",
    width: 195,
    padding: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: 10,
  },
  like: {
    color: "#27AE60",
  },
  countDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weightage: {
    color: "#BDBDBD",
    fontSize: 14,
    paddingTop: 5,
  },
});

const Progressbar = ({ title, count, weightage }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <div>
        <div className={classes.countDiv}>
          <Typography variant="h6">{count}</Typography>
          <ThumbUpIcon className={classes.like} />
        </div>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography variant="body2" className={classes.weightage}>
          Weightage: {weightage} %
        </Typography>
      </div>
    </div>
  );
};

export default Progressbar;

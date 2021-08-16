import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FeedbackItem from "./FeedbackItem";

const useStyles = makeStyles({
  heading: {
    color: "#828282",
    display: "flex",
    alignItems: "center",
    gap: 20,
    margin: "30px 0 10px",
    "& h6": {
      color: "hsla(212, 88%, 39%, 1)",
      fontWeight: 700,
    },
  },
});

const Feedback = ({ heading, count, weightage, questionAndAnswers }) => {
  const classes = useStyles();
  return (
    <article>
      <div className={classes.heading}>
        <Typography variant="h6" color="primary" gutterBottom>
          {heading} - {count}
        </Typography>
        (Weightage: {weightage}%)
      </div>
      {questionAndAnswers.map((QandA, index) => (
        <FeedbackItem
          {...QandA}
          isLast={index === questionAndAnswers.length - 1}
          key={index}
        />
      ))}
    </article>
  );
};

export default Feedback;

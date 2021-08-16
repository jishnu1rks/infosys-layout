import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { Pie } from "react-chartjs-2";

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
  name: {
    color: "#0C5FBC",
    fontSize: 24,
    fontWeight: "bold",
  },
});

const GlobalScore = () => {
  const classes = useStyles();
  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Typography
        variant="h5"
        color="primary"
        className={classes.name}
        gutterBottom
      >
        Nitesh Sharma
      </Typography>
      <Pie data={data} />
    </>
  );
};

export default GlobalScore;

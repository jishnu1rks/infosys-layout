import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Ratings from "./Ratings";

const useStyles = makeStyles({
  root: {
    padding: "16px 0",
  },
  question: {
    display: "flex",
    paddingBottom: 20,
    fontWeight: "bold",
    lineHeight: 20,
    gap: 20,
    color: "#4F4F4F",
    "& > svg": {
      color: "hsla(102, 46%, 58%, 1)",
    },
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    "& > .stars": {
      color: "#F2C94C",
    },
    "& > .dot": {
      color: "hsla(0, 0%, 31%, 1)",
      fontSize: 50,
    },
    "& > .status": {
      background: "#FFE8CD",
      border: "1px solid",
      borderRadius: "100px",
      fontSize: 12,
      textTransform: "capitalize",
    },
  },
  ratingValue: {
    color: "hsla(0, 0%, 31%, 1)",
    fontSize: 16,
  },
  dot: {
    fontSize: 10,
    color: "#BDBDBD",
  },
  desc: {
    margin: "20px auto",
    color: "#4F4F4F",
    fontSize: 14,
  },
});

const FeedbackItem = ({ question, rating, status, desc, isLast }) => {
  const classes = useStyles();
  let statusStyles = {};
  if (status === "moderate") {
    statusStyles = {
      color: "#DB6B03",
    };
  } else if (status === "easy") {
    statusStyles = {
      color: "#04A23A",
      background: "#CDFFD5",
    };
  } else if (status === "hard") {
    statusStyles = {
      color: "#E94444",
      background: "#FDE2E2",
    };
  }

  return (
    <div
      className={classes.root}
      style={{
        borderBottom: `${isLast ? "" : "1px solid #E0E0E0"}`,
      }}
    >
      <div className={classes.question}>
        <PlayCircleFilledIcon />
        <Typography>{question}</Typography>
      </div>
      <div className={classes.rating}>
        <div className="stars">
          <Ratings rating={rating} />
        </div>
        <Typography variant="body1" className={classes.ratingValue}>
          ({rating}/10)
        </Typography>
        <FiberManualRecordIcon className={classes.dot} />
        <Button variant="outlined" className="status" style={statusStyles}>
          {status}
        </Button>
      </div>
      <div className={classes.desc}>{desc}</div>
    </div>
  );
};

export default FeedbackItem;

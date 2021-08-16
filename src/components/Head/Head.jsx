import Email from "../../assets/images/email.png";
import Pdf from "../../assets/images/pdf.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1.5rem 0",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > img ": {
      padding: "0 1rem",
    },
  },
  date: {
    "& > span": {
      fontWeight: "700",
    },
  },
}));

const Head = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <h1>Candidate Evaluation Report</h1>
        <img src={Pdf} alt="pdf" />
        <img src={Email} alt="pdf" />
      </div>
      <p className={classes.date}>
        Prepared on: <span>12 Jul 2021</span>
      </p>
    </div>
  );
};

export default Head;

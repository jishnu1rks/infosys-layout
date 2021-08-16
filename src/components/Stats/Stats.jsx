import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import GlobalScore from "./GlobalScore";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Detail from "./Detail";
import Download from "./Download";
import Progressbar from "./Progressbar";

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
  topRow: {
    position: "relative",
    width: "100%",
  },
});

const Stats = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={2}>
          <GlobalScore />
        </Grid>
        <Grid item xs={10}>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
            className={classes.topRow}
          >
            <Detail label="Work Experience" value="7 Years" />
            <Detail
              label="Current Employer"
              value="Evotech solutions pvt ltd.,"
            />
            <Detail label="Work Experience" value="7 Years" />
            <Detail label="Work Experience" value="7 Years" />
            <Download />
          </Grid>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
            className={classes.topRow}
          >
            <Progressbar
              title="App Development & Architecture Design"
              count={556}
              weightage={20}
            />
            <Progressbar
              title="App Development & Architecture Design"
              count={556}
              weightage={20}
            />
            <Progressbar
              title="App Development & Architecture Design"
              count={556}
              weightage={20}
            />
            <Progressbar
              title="App Development & Architecture Design"
              count={556}
              weightage={20}
            />
            <Progressbar
              title="App Development & Architecture Design"
              count={556}
              weightage={20}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Stats;

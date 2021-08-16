import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Feedback from "./../Feedback";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  filterbox: {
    display: "block",
    width: "100%",
    background: "#F3F5F7",
    "& .form-group": {
      width: 250,
      display: "inline-flex",
      flexDirection: "column",
      padding: "10px 20px",
      borderRadius: 10,

      "& label": {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 16,
        marginBottom: "0.5rem",
        color: "#4F4F4F",
      },
    },
  },
});

const Detailed = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Detailed Feedbacks
        </Typography>

        {/* filter */}

        <div className={classes.filterbox}>
          <div className="form-group">
            <label htmlFor="">Interview Round </label>
            <div className="checkbox-group">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color="primary"
                  />
                }
                label="Expert"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Peer"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Difficulties</label>
            <FormControl
              variant="outlined"
              size="small"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                select
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-group">
            <label htmlFor="">Ratings </label>
            <FormControl
              variant="outlined"
              size="small"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        {/*  feedback component */}

        <Feedback
          heading="App Development & Architecture Design"
          count={426}
          weightage={30}
          questionAndAnswers={[
            {
              question:
                "Write the architecture of the project you mentioned, also describe all the components you have used in that.",
              rating: 5,
              status: "moderate",
              desc: "He explained about what the application does. He explained how the game hub is managing scores. He doesn’t gives the architecture, how data is being passed. He gave only functional details.",
            },
            {
              question:
                "What is technical structure of your game project? Also mention the file structure of the project",
              rating: 6,
              status: "hard",
              desc: "He gave very limited architecture. He gave a very high level folder structure. Had to ask about the difference between part of the projects. He explained how he is using redux.",
            },
          ]}
        />
        <Feedback
          heading="React Native"
          count={556}
          weightage={25}
          questionAndAnswers={[
            {
              question:
                "Can you tell me what kind of projects you have done and what kind of component did you use in your projects in react native?",
              rating: 8,
              status: "easy",
              desc: "He had a good and wide variety of experience in different apps. He has worked on various real time apps and user firebase, redux as a tech stack",
            },
            {
              question:
                "What is technical structure of your game project? Also mention the file structure of the project",
              rating: 6,
              status: "moderate",
              desc: "He gave very limited architecture. He gave a very high level folder structure. Had to ask about the difference between part of the projects. He explained how he is using redux.",
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default Detailed;

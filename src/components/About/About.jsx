import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AboutItem from "./AboutItem";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "1.5rem 0",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },
  aboutCard: {
    flex: 2,
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    gap: "1em",
    height: "18em",
  },
  videoCard: {
    flex: 1,
    height: "18em",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`a11y-tabpanel-${index}`}
      aria-labelledby={`a11y-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const About = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Card className={classes.aboutCard}>
        <AboutItem
          heading="Strengths"
          color="hsla(145, 63%, 42%, 1)"
          listItems={[
            "He lead the team in healthy manner. He has very good knowledge in React native fundamentals.",
            "He has decent experience in designing and working on real apps.",
          ]}
        />
        <AboutItem
          heading="Areas of Improvement"
          color="hsla(0, 79%, 63%, 1)"
          listItems={[
            "He need to know understand the performance impact on application.",
            "He need to improve his test driven development. He needs to increase his problem solving and data concepts.",
          ]}
        />
      </Card>
      <Card className={classes.videoCard}>
        <CardContent>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Round 1" />
            <Tab label="Round 2" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/YqQx75OPRa0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/YqQx75OPRa0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </TabPanel>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;

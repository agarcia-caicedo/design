import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Triangle from "../media/triangles_Red.png";
import TriangleBlue from "../media/triangles_Blue.png";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFCB51",
    height: "100vh",
    flexWrap: "wrap",
  },

  title: {
    padding: "7px",
    maxHeight: "100vh",
    backgroundImage: `url(${Triangle})`,
    border: "solid 5px white",
    backgroundSize: "80% 100%",
    backgroundRepeat: "no-repeat",
  },
  title2: {
    padding: "7px",
    maxHeight: "100vh",
    backgroundImage: `url(${TriangleBlue})`,
    border: "solid 5px white",
    backgroundSize: "80% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
  titleText: {
    fontFamily: "'Chelsea Market', cursive",
    color: "#430C05",
  },
  text: {
    fontFamily: "'Oswald', sans-serif",
    color: "#00363D",
    position: "absolute",
    bottom: "33vh",
    right: "2vh",
  },
});

function MobileBanner() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12} className={classes.title}>
        <Grid
          item
          xs={12}
          style={{
            height: "5vh",
          }}
        />
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.titleText}>
            Ana
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.titleText}>
            Garcia
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.title2}></Grid>
    </Grid>
  );
}

export default MobileBanner;

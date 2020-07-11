import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Triangle from "../media/triangles_Red.png";
import TriangleBlue from "../media/triangles_Blue.png";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFCB51",
    height: "100vh",
    flexWrap: "wrap",
  },

  title:{
    padding: "7px",
    maxHeight: "100vh",
    backgroundImage: `url(${Triangle})`,
    border:"solid 5px white",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  title2:{
    padding: "7px",
    maxHeight: "100vh",
    backgroundImage: `url(${TriangleBlue})`,
    border:"solid 5px white",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
  text:{
    fontFamily: "'Oswald', sans-serif",
    color: "#00363D",
    position: "absolute",
    bottom: "33vh",
    right: "2vh",
  },
})

function MobileBanner() {
    const classes = useStyles();

    return (
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} className={classes.title}>

        </Grid>
        <Grid item  xs={12} className={classes.title2}>

        </Grid>
      </Grid>
    )
}

export default MobileBanner
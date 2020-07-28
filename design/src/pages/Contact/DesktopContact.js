import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Scribbles from "../../media/scribbles.png";
import Email from "../../components/Email";
import SideMenu from "../../components/SideMenu";
const useStyles = makeStyles({
    root: {
      backgroundColor: "#FFCB51",
      height: "100vh",
      flexWrap: "wrap",
      margin: 0,
    },
    page: {
      backgroundColor: "#fff",
    },
    sideBar: {
      backgroundColor: "#d24d22",
      position: "sticky",
    },
    link: {
      textDecoration: "none",
      color: "#430C05",
    },
    title: {
      fontFamily: "'Galada', sans-serif",
      color: "#430c05",
      textAlign: "center",
      padding: "2vh",
    },
    text: {
      fontFamily: "'Oswald', sans-serif",
      color: "#430c05",
      padding: "1vh 5vw 1vh 5vw",
      width: "50vw",
    },
    pic: {
        backgroundImage: `url(${Scribbles})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      },
  });

const Contact = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={0}>
         <Grid item xs={2} className={classes.sideBar}>
          <SideMenu />
        </Grid>
        <Grid item xs={7} className={classes.page} >
        <Typography variant="h3" className={classes.title}>
          Contact Me
        </Typography>
          <Email></Email>
        </Grid>
        <Grid item xs={3} className={classes.pic}/>
      </Grid>
    );
  }

  export default Contact
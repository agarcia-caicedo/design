import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NoteIcon from "@material-ui/icons/Note";
import IconButton from "@material-ui/core/IconButton";
import Scribbles from "../../media/scribbles.png";
import Email from "../../components/Email";

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
    },
    linkList: {
      backgroundColor: "#FFCB51",
      height: "8vh",
      marginTop: "25vh",
      marginBottom: "5vh",
      fontFamily: "'Oswald', sans-serif",
      color: "#430C05",
      display: "block",
      fontSize: "5vh",
      textAlign: "center",
    },
    linkList2: {
      backgroundColor: "#FFBA26",
      height: "8vh",
      marginBottom: "5vh",
      fontFamily: "'Oswald', sans-serif",
      color: "#430C05",
      display: "block",
      fontSize: "5vh",
      textAlign: "center",
    },
    linkList3: {
      backgroundColor: "#E67413",
      height: "8vh",
      fontFamily: "'Oswald', sans-serif",
      fontSize: "5vh",
      color: "#430C05",
      display: "block",
      textAlign: "center",
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
          <div className={classes.linkList}>
            <Link to="/About" className={classes.link}>
              About
            </Link>
          </div>
          <div className={classes.linkList2}>
            <Link to="/Work" className={classes.link}>
              Work
            </Link>
          </div>
          <div className={classes.linkList3}>
            <Link to="/design" className={classes.link}>
              Home
            </Link>
          </div>
          <Grid
            container
            spacing={3}
            style={{
              padding: "2vh",
            }}
          >
            <Grid item xs={3}>
              <a
                href="https://github.com/agarcia-caicedo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a
                href="https://www.linkedin.com/in/ana-garcia-amg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a
                href="https://semortea.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <NoteIcon fontSize="large" />
                </IconButton>
              </a>
            </Grid>
          </Grid>
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
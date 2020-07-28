import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NoteIcon from "@material-ui/icons/Note";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  sideBar: {
    backgroundColor: "#d24d22",
  },
  linkList: {
    backgroundColor: "#FFCB51",
    height: "8vh",
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
  linkList4: {
    backgroundColor: "#fcda79",
    height: "8vh",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "5vh",
    color: "#430C05",
    display: "block",
    textAlign: "center",
    marginTop: "20vh",
    marginBottom: "5vh",
  },
  link: {
    textDecoration: "none",
    color: "#430C05",
  },
});
const SideMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <div className={classes.linkList4}>
        <Link Link to="/" className={classes.link}>
          Home
        </Link>
      </div>
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
        <Link to="/Contact" className={classes.link}>
          Contact
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
    </div>
  );
};

export default SideMenu;

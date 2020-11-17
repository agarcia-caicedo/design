import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Triangle from "../../media/triangles.png";
import SideMenu from "../../components/SideMenu";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFCB51",
    height: "100vh",
    flexWrap: "wrap",
    margin: 0,
  },
  pic: {
    backgroundImage: `url(${Triangle})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
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
    padding: "1vh 0vw 1vh 6vw",
    marginLeft: "2vw",
    width: "50vw",
  }
});

const About = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={2} className={classes.sideBar}>
          <SideMenu />
        </Grid>
      <Grid item xs={7} className={classes.page} >
        <Typography variant="h3" className={classes.title}>
          About Me
        </Typography>
        <Typography className={classes.text}>
          I'm a seventh semester software development student at
          Seneca College. I'm passionate about UI and UX design so I try to develop
          those skills through design challenges and
          open source projects. Over the past year, I have written blog posts about
          my experience working and collaborating on those projects.
        </Typography>
        <Typography className={classes.text}>
          Besides software development, I've done graphic design work since
          2015. During that time, I've also worked on my digital art, mostly as a hobby, but
          I've done commissions occasionally.
          My work has been significantly inspired by the Dadaism movement, Baroque
          artwork, and cinematography that shares those themes.
        </Typography>
        <Typography className={classes.text}>
          Outside of schoolwork and design, I'm a fan of film. I'm very interested in
          horror media, and it has inspired me to direct and edit my own short film.
          I try to be a part of the film community wherever I live, so far having volunteered
          at TIFF in 2018, the Toronto After Dark Festival in 2019, and currently I'm doing
          graphic design work for the Western Smartphone Film Festival.
        </Typography>
        <Typography variant="h5" className={classes.title}
        style={{
            textAlign: "left",
            marginLeft: "7vw",
        }}>
            - Ana Garcia
        </Typography>
      </Grid>
      <Grid item xs={3} className={classes.pic} />
    </Grid>
  );
};

export default About;

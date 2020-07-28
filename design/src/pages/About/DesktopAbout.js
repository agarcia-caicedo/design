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
          Seneca College. I'm passionate about UI and UX design so I try to spend
          my free time developing those skills through design challenges and
          open source projects. Over the past year, I have written some blog posts about
          my experience working and collaborating on those projects.
        </Typography>
        <Typography className={classes.text}>
          I've been working on-and-off as a freelance graphic designer since
          2015, and I started creating digital art since around the same time.
          My work has been significantly inspired by the Dadaism movement, Baroque
          artworks from both Caravaggio and Gentileschi, and the cinematography from
          NBC's Hannibal.
        </Typography>
        <Typography className={classes.text}>
          Outside of schoolwork and design, I greatly enjoy film. I'm a huge
          horror fan and I directed and edited my first short film this past
          January. Whenever possible, I try to volunteer at film festivals,
          so far I have volunteered at the Toronto After Dark Festival in 2019
          and at TIFF in 2018.
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

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Triangle from "../../media/triangles.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NoteIcon from "@material-ui/icons/Note";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";

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
  },
  list: {
    width: 200,
  },
  link: {
    textDecoration: "none",
    color: "#430C05",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "3vh",
    backgroundColor: "#ffbb28",
    marginBottom: "2vh",
  },
  paper: {
    background: "#d24d22",
  },
  appBar: {
    backgroundColor: "#c45124",
    top: "1vh",
  },
});

const About = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem component={Link} to="/design" className={classes.link}>
          Home
        </ListItem>
        <ListItem component={Link} to="/Work" className={classes.link}>
          Work
        </ListItem>
        <ListItem component={Link} to="/contact" className={classes.link}>
          Contact
        </ListItem>
      </List>
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

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
          style={{
            width: "5vh",
          }}
        >
          <MenuIcon />
          <Drawer
            open={state.left}
            onClose={toggleDrawer("left", false)}
            classes={{ paper: classes.paper }}
          >
            {sideList("left")}
          </Drawer>
        </IconButton>
      </AppBar>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={9} className={classes.page}>
          <Typography variant="h3" className={classes.title}>
            About Me
          </Typography>
          <Typography className={classes.text}>
            I'm a seventh semester software development student at Seneca
            College. I'm passionate about UI and UX design so I try to spend my
            free time developing those skills through design challenges and open
            source projects. Over the past year, I have written some blog posts
            about my experience working and collaborating on those projects.
          </Typography>
          <Typography className={classes.text}>
            I've been working on-and-off as a freelance graphic designer since
            2015, and I started creating digital art since around the same time.
            My work has been significantly inspired by the Dadaism movement,
            Baroque artworks from both Caravaggio and Gentileschi, and the
            cinematography from NBC's Hannibal.
          </Typography>
          <Typography className={classes.text}>
            Outside of schoolwork and design, I greatly enjoy film. I'm a huge
            horror fan and I directed and edited my first short film this past
            January. Whenever possible, I try to volunteer at film festivals, so
            far I have volunteered at the Toronto After Dark Festival in 2019
            and at TIFF in 2018.
          </Typography>
          <Typography
            variant="h5"
            className={classes.title}
            style={{
              textAlign: "left",
              paddingLeft: "5vw",
            }}
          >
            - Ana Garcia
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.pic} />
      </Grid>
    </div>
  );
};

export default About;

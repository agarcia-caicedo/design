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
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Email from "../../components/MobileEmail";

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


const Contact = () => {
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
            <ListItem component={Link} to="/About" className={classes.link}>
              About
            </ListItem>
            <ListItem component={Link} to="/Work" className={classes.link}>
              Work
            </ListItem>
            <ListItem component={Link} to="/design" className={classes.link}>
              Home
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
        <Grid item xs={12} className={classes.pic} >
        <Typography variant="h3" className={classes.title}>
          Contact Me
        </Typography>
          <Email></Email>
        </Grid>
      </Grid>
        </div>
    );
  }

  export default Contact
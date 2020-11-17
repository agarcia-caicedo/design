import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NoteIcon from "@material-ui/icons/Note";

import Telescope from "../media/telescope.png";
import Hex from "../media/hex.png";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        height: "100vh",
      },
      center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      },
      header: {
        fontFamily: "'Galada', cursive",
        color: "#0b3638",
      },
      media: {
        height: 0,
        paddingTop: "50%", // 16:9
      },
      card: {
        width: "85vw",
        padding: "2vh",
      },
      text: {
        fontFamily: "'Oswald', sans-serif",
        color: "#0b3638",
      },
      appBar: {
        backgroundColor: "#c45124",
        top: "1vh",
      },
      menuButton: {
        justifyContent: "left",
      },
      b: {
        fontFamily: "'Oswald', sans-serif",
        color: "#0b3638",
        marginBottom: "2vw",
        position: "relative",
        right: "-30vw",
        border: "solid 1px #0b3638",
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
        background: '#d24d22',
      },
})

function Example(props) {
  var items = [
    {
      name: "Latest Project",
      description:
        "Telescope is an open-source blog aggregator that keeps track of blogs written by Seneca College students about the open source community.",
      images: Telescope,
      txtColor: "#0b3638",
      bgColor: "#03c5ce",
    },
    {
      name: "Other Projects",
      description:
        "HEX - A short horror film screened at the 2020 Western Smartphone Film Festival (WSFF). Directed and edited by me. ",
      images: Hex,
      txtColor: "#430c05",
      bgColor: "#c45124",
    },
  ];

  return (
    <Carousel autoPlay={false}>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.item.name}
        className={classes.header}
        titleTypographyProps={{ variant: "h3" }}
        style={{
          backgroundColor: `${props.item.bgColor}`,
          color: `${props.item.txtColor}`,
        }}
      />
      <CardMedia
        className={classes.media}
        image={props.item.images}
        title="Telescope"
      />
      <CardContent>
        <Typography variant="body1" component="p" className={classes.text}>
          {props.item.description}
        </Typography>
      </CardContent>
      <Button className={classes.b}>Check it out!</Button>
    </Card>
  );
}

const MobileMain = (props) => {
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
        <ListItem component={Link} to="/contact" className={classes.link}>
          Contact
        </ListItem>
      </List>
      <Grid container spacing={3}
          style={{
              padding:"2vh",
          }}>
            <Grid item xs={3}>
                <a href="https://github.com/agarcia-caicedo/" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
                </a>
            </Grid>
            <Grid item xs={3}>
                <a href="https://www.linkedin.com/in/ana-garcia-amg/" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>
                </a>
            </Grid>
            <Grid item xs={3}>
                <a href="https://semortea.wordpress.com/" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <NoteIcon fontSize="large"/>
                </IconButton>
                </a>
            </Grid>
          </Grid>
    </div>
  );

  return (
    <>
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
        <Grid item xs={12} className={classes.center}>
          <Example />
        </Grid>
      </Grid>
    </>
  );
};

export default MobileMain;

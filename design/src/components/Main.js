import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideMenu from "./SideMenu";

import Telescope from "../media/telescope.PNG";
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
  },
  header: {
    fontFamily: "'Galada', cursive",
    color: "#0b3638",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    width: "47vw",
    padding: "2vh",
  },
  text: {
    fontFamily: "'Oswald', sans-serif",
    color: "#0b3638",
  },
  b: {
    fontFamily: "'Oswald', sans-serif",
    margin: "1vw",
    position: "relative",
    right: "-35vw",
    padding: "1vh!important",
  },
  link: {
    textDecoration: "none",
    color: "#430C05",
  },
  sideBar: {
    backgroundColor: "#d24d22",
    position: "sticky",
  },
});

function Example(props) {
  var items = [
    {
      name: "Latest Project",
      description:
        "Telescope is an open-source blog aggregator that keeps track of blogs written by Seneca College students about the open source community.",
      images: Telescope,
      txtColor: "#0b3638",
      bgColor: "#03c5ce",
      site: "https://telescope.cdot.systems/"
    },
    {
      name: "Other Projects",
      description:
        "HEX - A short horror film screened at the 2020 Western Smartphone Film Festival (WSFF). Directed and edited by me. ",
      images: Hex,
      txtColor: "#430c05",
      bgColor: "#c45124",
      site: "https://www.youtube.com/watch?v=7g_QBjzUpQI&feature=youtu.be"
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
      <Button variant="contained" className={classes.b}>
        <a href={props.item.site}
           target="_blank"
           rel="noopener noreferrer"
           className={classes.link}>Check it out!</a>
      </Button>
    </Card>
  );
}

const Main = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={2} className={classes.sideBar}>
          <SideMenu />
        </Grid>
        <Grid item xs={10} className={classes.center}>
          <Example />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;

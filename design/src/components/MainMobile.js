import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from "@material-ui/core";

import Telescope from "../media/telescope.PNG"
import Hex from "../media/hex.png"

const useStyles = makeStyles((theme) => ({
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
    paddingTop: "56.25%", // 16:9
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
    top: "1vh"
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
    border: "solid 1px #0b3638"
  }
}))

function Example(props) {
  var items = [
    {
      name: "Latest Project",
      description: "Telescope is an open-source blog aggregator that keeps track of blogs written by Seneca College students about the open source community.",
      images: Telescope,
      txtColor:"#0b3638",
      bgColor: "#03c5ce",
    },
    {
      name: "Other Projects",
      description: "HEX - A short horror film screened at the 2020 Western Smartphone Film Festival (WSFF). Directed and edited by me. ",
      images: Hex,
      txtColor: "#430c05",
      bgColor: "#c45124",
    },
  ]

  return (
    <Carousel autoPlay={false}>
      {items.map(item => (
        <Item item={item} />
      ))}
    </Carousel>
  )
}

function Item(props) {
  const classes = useStyles()
  return (
    <Card  className={classes.card}>
      <CardHeader
        title={props.item.name}
        className={classes.header}
        titleTypographyProps={{variant:'h3' }}
        style={{
          backgroundColor: `${props.item.bgColor}`,
          color: `${props.item.txtColor}`
        }}
      />
      <CardMedia
        className={classes.media}
        image={props.item.images}
        title="Telescope"
      />
       <CardContent>
        <Typography variant="body1"  component="p"  className={classes.text}>
          {props.item.description}
        </Typography>
      </CardContent>
      <Button className={classes.b}>Check it out!</Button>
    </Card>
  )
}

const MobileMain = props => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
        style={{
            width:"5vh",
        }}>
            <MenuIcon />
        </IconButton>
      </AppBar>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} className={classes.center}>
          <Example />
        </Grid>
      </Grid>
    </>
  )
}

export default MobileMain
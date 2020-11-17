import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideMenu from "../../components/SideMenu";

import Telescope from "../../media/telescope.png";
import Hex from "../../media/hex.png";
import IGN from "../../media/ignite.png";
import UI from "../../media/100.png";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    height: "100vh",
  },
  sideBar: {
    backgroundColor: "#d24d22",
    position: "fixed",
    height: "100%",
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "'Galada', cursive",
    color: "#0b3638",
    padding: "1vh",
  },
  media: {
    height: 0,
    paddingTop: "50%", // 16:9
  },
  card: {
    height: "60vh",
    width: "25vw",
    padding: "2vh",
    margin: "1vw",
  },
  text: {
    fontFamily: "'Oswald', sans-serif",
    color: "#0b3638",
  },
  link: {
    textDecoration: "none",
    color: "#0b3638",
  },
  b: {
    fontFamily: "'Oswald', sans-serif",
    margin: "1vw",
    position: "relative",

    padding: "1vh!important",
  },
});

const Work = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={2} className={classes.sideBar}>
        <SideMenu />
        </Grid>
        <Grid item xs={2}>
          <div
          style={{
            height: "100%",
            width: "100%",
          }}
          />
        </Grid>
        <Grid item xs={10} className={classes.center}>
          <Grid container>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant="h4"
                style={{
                  marginLeft: "2vw",
                  marginTop: "2vh",
                  color: "#0b3638",
                }}
              >
                UI and Web Development
              </Typography>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardHeader
                  title="Telescope"
                  className={classes.header}
                  titleTypographyProps={{ variant: "h5" }}
                  style={{
                    backgroundColor: "#03c5ce",
                    color: "#0b3638",
                  }}
                />
                <CardMedia
                  className={classes.media}
                  image={Telescope}
                  title="Telescope"
                />
                <CardContent
                  style={{
                    paddingTop: "2vh",
                    paddingLeft: "2vh",
                    paddingBottom: 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.text}
                  >
                    Telescope is an open-source blog aggregator that keeps track
                    of blogs written by Seneca College students about the open
                    source community.
                  </Typography>
                </CardContent>
                <Button variant="contained" className={classes.b}>
                  <a href="https://xd.adobe.com/view/09449821-005a-42a1-8163-48a8e58c280c-5c17/grid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}>
                    See More
                  </a>
                </Button>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardHeader
                  title="Ignite"
                  className={classes.header}
                  titleTypographyProps={{ variant: "h5" }}
                  style={{
                    backgroundColor: "#03c5ce",
                    color: "#0b3638",
                  }}
                />
                <CardMedia
                  className={classes.media}
                  image={IGN}
                  title="Ignite"
                />
                <CardContent
                  style={{
                    paddingTop: "2vh",
                    paddingLeft: "2vh",
                    paddingBottom: 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.text}
                  >
                    Ignite is a horizontal prototype for a PC video game launcher designed in order to learn
                    UX methodology. Summer 2020.
                  </Typography>
                </CardContent>
                <Button variant="contained" className={classes.b}>
                  <a href="https://xd.adobe.com/view/e9635733-5692-4ce6-8776-97d7d5d24f25-bc30/grid?fullscreenh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}>
                    See More
                    </a>
                </Button>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardHeader
                  title="100 Days of UI"
                  className={classes.header}
                  titleTypographyProps={{ variant: "h5" }}
                  style={{
                    backgroundColor: "#03c5ce",
                    color: "#0b3638",
                  }}
                />
                <CardMedia
                  className={classes.media}
                  image={UI}
                  title="100 Days of UI"
                />
                <CardContent
                  style={{
                    paddingTop: "2vh",
                    paddingLeft: "2vh",
                    paddingBottom: 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.text}
                  >
                    Smaller UI Challenges I take up during my free time in order to improve my UI and UX skills.
                  </Typography>
                </CardContent>
                <Button variant="contained" className={classes.b}>
                <a href="https://xd.adobe.com/view/3e8b71a6-db70-40df-afbf-cfcdbd1a45cc-6bd8/grid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}>
                    See More
                  </a>
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant="h4"
                style={{
                  marginLeft: "2vw",
                  color: "#430c05",
                }}
              >
                Other Projects
              </Typography>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardHeader
                  title="Hex"
                  className={classes.header}
                  titleTypographyProps={{ variant: "h5" }}
                  style={{
                    backgroundColor: "#c45124",
                    color: "#430c05",
                  }}
                />
                <CardMedia className={classes.media} image={Hex} title="Hex" />
                <CardContent
                  style={{
                    paddingTop: "2vh",
                    paddingLeft: "2vh",
                    paddingBottom: 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.text}
                  >
                    HEX - A short horror film screened at the 2020 Western
                    Smartphone Film Festival (WSFF). Directed and edited by me.
                  </Typography>
                </CardContent>
                <Button variant="contained" className={classes.b}>
                <a href="https://www.youtube.com/watch?v=7g_QBjzUpQI&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}>
                    Watch
                    </a>
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Work;

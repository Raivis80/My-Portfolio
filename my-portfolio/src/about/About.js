import { memo } from "react";

import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import TheCube from "../components/about/cube/Cube.js";

import CardComponent from "../components/SimpleCard.js";
import Fade from "react-reveal/Fade";
import data from "./data/data";
import "./About.css";

const aboutContent = data.about.content;

const About = memo((props) => {
  return (
    <>
      <Fade bottom distance="30%" delay={400}>
        <Typography color="secondary" variant="h2">
          About
        </Typography>
      </Fade>
      <Box className="priorities-text" sx={{ mt: 1 }}>
        <Grid container rowSpacing={{ xs: 3, md: 6 }}>
          {aboutContent.map((text, index) => (
            <Grid item xs={12} key={index}>
              <CardComponent title={text.title} text={text.text} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
});

function AboutApp(props) {
  return (
    <Container
      id="about"
      sx={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <TheCube isInView={props.isInView} />
        <About />
      </Box>
    </Container>
  );
}

export default AboutApp;

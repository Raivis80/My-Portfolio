import * as React from "react";
import { Grid } from "@mui/material";
import data from "../../projects/data/data";
import Fade from "react-reveal/Fade";
import { memo } from "react";
import TextComponent from "./textComponent.js";
import ImageComponent from "./imageComponent.js";
import "./projectsComponent.css";

export default memo(function ProjectsComponent() {
  return (
    <>
      {data.map((image, i) =>
        i % 2 === 0 ? (
          <Fade key={i} bottom distance="30%">
            <Grid container mb={{ xs: 3, md: 6 }} rowSpacing={{ xs: 0, md: 6 }}>
              <Grid item xs={12} md={7} order={{ xs: 1 }}>
                <ImageComponent image={image} />
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                order={{ xs: 2 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <TextComponent image={image} position={"left"} />
              </Grid>
            </Grid>
          </Fade>
        ) : (
          <Fade key={i} bottom distance="30%">
            <Grid container mb={{ xs: 3, md: 6 }} rowSpacing={{ xs: 0, md: 6 }}>
              <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
                <ImageComponent image={image} />
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                order={{ xs: 2, md: 1 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <TextComponent image={image} position={"right"} />
              </Grid>
            </Grid>
          </Fade>
        )
      )}
    </>
  );
});

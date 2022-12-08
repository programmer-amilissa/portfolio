import {
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Container maxWidth="100%">
      <Grid container>
        <Grid item lg={6} xs={3} md={6} sm={3}>
          <Typography variant="h1" fontWeight={700}>
            Hi, I'M AMILISSA
          </Typography>
          <Typography variant="h4">
            Web Developer and General Virtual Assistant.
          </Typography>
          <Typography variant="h5">
            Creating websites and applications for your growing business.
          </Typography>
        </Grid>
        <Grid item lg={6} xs={3} md={6} sm={3}>
          <ImageListItem key="1" style={{width:"400px"}}>
            <img
              className="gradPic"
              src={process.env.PUBLIC_URL + "/Amilissa.jpg"}
              alt="graduation-picture-Amilissa-Araneta"
            />
          </ImageListItem>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Banner;

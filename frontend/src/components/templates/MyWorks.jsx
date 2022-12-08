import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const boxStyles = {
  width: 300,
  height: 300,
  backgroundColor: "primary.dark",
  "&:hover": {
    backgroundColor: "primary.main",
    opacity: [0.9, 0.8, 0.7],
  },
};

function Banner() {
  return (
    <Container maxWidth="100%" style={{ backgroundColor: "#EEEEEE" }}>
      <Grid item lg={12} xs={12} md={12} sm={12}>
        <Typography variant="h2" fontWeight={700}>
          My Works
        </Typography>
        <Grid container alignItems="center" mt={2}>
          <Grid item xs={2}>
            <Box sx={boxStyles}>Hello</Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={boxStyles}>Hello</Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={boxStyles}>Hello</Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={boxStyles}>Hello</Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={boxStyles}>Hello</Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={boxStyles}>Hello</Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Banner;

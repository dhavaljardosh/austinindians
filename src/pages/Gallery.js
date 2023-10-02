import { Box, Container, Grid } from "@mui/material";
import React from "react";

const Gallery = () => {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={4}>
              <h1>Pictures</h1>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box padding={10}></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Gallery;

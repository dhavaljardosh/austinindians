import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={4}>
              <Box p={10}>
                <img
                  src={require("../assets/page-screenshot.png")}
                  alt="Screenshot"
                  height={500}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box padding={10}>
                <h1>Biggest Indians community of Austin</h1>
                <h4>We share about Events, Food, Festivals and much more...</h4>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#223843", p: 6, color: "#EFF1F3" }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        Help us expand this community to all the Indians folks of Greater Austin
        Area.
      </Typography>
      <Copyright />
    </Box>
  );
};

const Copyright = () => {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link to={"/"} style={{ color: "#EFF1F3" }}>
        www.theaustinindians.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default LandingPage;

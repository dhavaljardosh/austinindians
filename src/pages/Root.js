import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Events from "./Events";
import Gallery from "./Gallery";
import Social from "./Social";
import { Swad } from "./Swad";
import FoodService from "./FoodService";
import SignupOrLogin from "../components/Auth/SignupOrLogin";
import LoggedInUser from "../components/Auth/LoggedInUser";
import { UserContext } from "../context/UserProvider";

const pages = ["Events", "Gallery", "Social"];

const Root = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = React.useContext(UserContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{ background: "#FFCF00", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              alt="Remy Sharp"
              src={require("../assets/austinindians-logo.png")}
              style={{ margin: "0px 10px" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AustinIndians
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link to={`${page}`} style={{ textDecoration: "none" }}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color={"black"}>
                        {page}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AustinIndians
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                  to={`${page.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            {user.auth ? <LoggedInUser /> : <SignupOrLogin />}
            {user.firstName} {user.lastName}
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route
          path="/events"
          element={<Events />}
          errorElement={<h1>Event Error</h1>}
        />
        <Route
          path="/gallery"
          element={<Gallery />}
          errorElement={<h1>Gallary Error</h1>}
        />
        <Route
          path="/social"
          element={<Social />}
          errorElement={<h1>Gallary Error</h1>}
        />
        <Route
          path="/foodService"
          element={<FoodService />}
          errorElement={<h1>Gallary Error</h1>}
        />
        <Route
          path="/advertise/swad"
          element={<Swad />}
          errorElement={<h1>Error in Advertise</h1>}
        />
      </Routes>
      <Outlet />
    </>
  );
};
export default Root;

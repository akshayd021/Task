import { Button, Container, Grid } from "@mui/material";
import React from "react";
import {
  Call,
  Email,
  ExpandMore,
  Facebook,
  GitHub,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import Image from "next/image";
import { Logo } from "../../../public/assets";
import "../styles/Home.css";
import { HomeService, Reviews, WorkDetail } from "../componets";
function Home() {
  return (
    <React.Fragment>
      <div className="bg">
        <Container>
          <div className="space-bw bg-white">
            <div className="space-bw">
              <Email sx={{ color: "#D15B3E" }} />
              <h2
                className="ml-5 font-18 font-normal"
                style={{ color: "#D15B3E" }}
              >
                Hello@gamil.com
              </h2>
              <div className="ml-50 center">
                <Call sx={{ color: "#D15B3E" }} />
                <h3
                  className="font-18  font-normal"
                  style={{ color: "#D15B3E" }}
                >
                  +91 22446655-5
                </h3>
              </div>
            </div>
            <div className="icons">
              <Facebook className="mx-5" sx={{ color: "#D15B3E" }} />
              <Twitter className="mx-5" sx={{ color: "#D15B3E" }} />
              <Instagram className="mx-5" sx={{ color: "#D15B3E" }} />
              <GitHub className="mx-5" sx={{ color: "#D15B3E" }} />
            </div>
          </div>

          <div className="mt-50 space-bw">
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <div className="logo space-bw mt-5">
                  <Image src={Logo} alt="Logo" />
                  <h1 className="ml-10 color-white font-24"> INTR</h1>
                </div>
              </Grid>
              <Grid item xs={8} className="center">
                <li className="list">
                  <ul
                    className="list-text"
                    style={{ color: "#D15B3E", marginLeft: -110 }}
                  >
                    Home
                  </ul>
                  <ul className="list-text">About Us</ul>
                  <ul className="list-text">Our service</ul>
                  <ExpandMore color="white" />
                  <ul className="list-text">Project</ul>
                  <ul className="list-text">Pages</ul>
                </li>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  size="large"
                  className="font-14 btn button "
                >
                  Get Started
                </Button>
                <ExpandMore sx={{ color: "#fff", fontSize: "20px" }} />
              </Grid>
            </Grid>
          </div>
          <section>
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <div className="mt-70">
                  <h4 className="uppercase" style={{ color: "#D15B3E" }}>
                    House Interior DEsign
                  </h4>
                  <h1 className="mt-30 color-white title">
                    Greetings From Our Home's Interior Design Website
                  </h1>
                  <p className="lorem mt-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </Grid>
            </Grid>
            <div className="btn-main">
              <Button variant="contained" className="btn btn-large">
                our service
              </Button>
              <Button variant="" className="btn btn-large btn-white">
                our works
              </Button>
            </div>
          </section>
        </Container>
      </div>
      <WorkDetail />
      <HomeService />
      <Reviews />
    </React.Fragment>
  );
}

export default Home;

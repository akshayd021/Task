import { Container, Divider, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { whiteLogo } from "../../../../public/assets";
import {
  ArrowRight,
  Call,
  Email,
  Facebook,
  GitHub,
  Instagram,
  LocationOn,
  Twitter,
} from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} md={4.4}>
            <div className="logo mt-5">
              <Image src={whiteLogo} alt="Logo" />
            </div>
            <div className="font-18 color-white mt-20">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt
            </div>
            <div className="icons mt-20">
              <Facebook className="mx-5" sx={{ color: "#fff" }} />
              <Twitter className="mx-5" sx={{ color: "#fff" }} />
              <Instagram className="mx-5" sx={{ color: "#fff" }} />
              <GitHub className="mx-5" sx={{ color: "#fff" }} />
            </div>
          </Grid>
          <Grid item xs={12} md={2.3}>
            <div className="footer-title">Quick Links</div>
            <div className="footer-item mt-10">
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Home</span>
              </div>
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">About Us</span>
              </div>
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Our Team Work</span>
              </div>
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Services</span>
              </div>
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Work Gallery</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={2.3}>
            <div className="footer-title">Site Links</div>
            <div className="footer-item mt-10">
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Home</span>
              </div>
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">About Us</span>
              </div>
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Our Team Work</span>
              </div>
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Services</span>
              </div>
              <div className="footer-link mt-5">
                <ArrowRight sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Work Gallery</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="footer-title">Stay Tuned With Us</div>
            <div className="footer-item mt-10">
              <div className="footer-link mt-5">
                <LocationOn sx={{ color: "#fff" }} />
                <span className="font-18 color-white">
                  Gresik United East Java Nggepeng Village 6312
                </span>
              </div>
              <div className="footer-link mt-10">
                <Email sx={{ color: "#fff" }} />
                <span className="font-18 color-white">Hello@Email.com</span>
              </div>
              <div className="footer-link mt-10">
                <Call sx={{ color: "#fff" }} />
                <span className="font-18 color-white">+0 365857756979</span>
              </div>
            </div>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#fff", marginTop: 5 }} />
        <div className="last">Design By @VBI Creative Studio</div>
      </Container>
    </div>
  );
}

export default Footer;

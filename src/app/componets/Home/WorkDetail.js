import React from "react";
import { Button, Container, Grid } from "@mui/material";
import {
  Add,
  ArrowForward,
  CalendarMonth,
  NewReleases,
  Percent,
} from "@mui/icons-material";
import Image from "next/image";
import {
  one,
  quote,
  rantange3,
  ratengele4,
  three,
  two,
} from "../../../../public/assets";

function WorkDetail() {
  return (
    <div>
      <div className="bg-main">
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <div className="plus">
                <Add sx={{ color: "#fff", fontSize: "20px" }} />
              </div>
              <div className="color-white text center">550</div>
              <p className="mt-20 sub-text center ">House Design</p>
            </Grid>
            <Grid item xs={3}>
              <div className="plus">
                <Add sx={{ color: "#fff", fontSize: "20px" }} />
              </div>
              <div className="color-white text center">23</div>
              <p className="mt-20 sub-text center ">Our Parter</p>
            </Grid>
            <Grid item xs={3}>
              <div className="plus">
                <Add sx={{ color: "#fff", fontSize: "20px" }} />
              </div>
              <div className="color-white text center">64</div>
              <p className="mt-20 sub-text center ">House Package</p>
            </Grid>
            <Grid item xs={3}>
              <div className="plus">
                <Add sx={{ color: "#fff", fontSize: "20px" }} />
              </div>
              <div className="color-white text center">20</div>
              <p className="mt-20 sub-text center "> Years Of Experience</p>
            </Grid>
          </Grid>
        </Container>
      </div>

      <section>
        <Container>
          <div className=" mt-70">
            <p className="small-text ">Who We Are</p>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <div className="text ">
                  We Are Experts in Interior Design, So Trust Us.
                </div>
              </Grid>
              <Grid item xs={6}>
                <p className="space-bw small-text " style={{ float: "right" }}>
                  Get a Quote <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
                </p>
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <div className="third">
                <Image src={quote} alt="Logo" width={40} height={40} />
                <p className="italic">
                  “ Lorem ipsum dolor sit amet consectetur adipsing elit. “
                </p>
                <h6 className="sub-text" style={{ fontWeight: 600 }}>
                  Mr. Lorem
                </h6>
              </div>
            </Grid>
            <Grid item xs={3}>
              <Image src={one} alt="Logo" width={287} height={275} />
            </Grid>
            <Grid item xs={3}>
              <Image src={two} alt="Logo" width={287} height={275} />
            </Grid>
            <Grid item xs={3}>
              <Image src={three} alt="Logo" width={287} height={275} />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section>
        <div className=" bg-wheat">
          <Container>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <div className="box">
                  <div className="pere">
                    <Percent sx={{ color: "#fff", fontSize: "20px" }} />
                  </div>
                  <div className="color-white text center">99 </div>
                  <p className="sub-text center" style={{ marginTop: -20 }}>
                    Happy Clients
                  </p>
                </div>
                <Image
                  src={rantange3}
                  alt="Logo"
                  className="image3"
                  height={500}
                />
                <div className="image4">
                  <Image
                    src={ratengele4}
                    alt="Logo"
                    className="image4"
                    height={500}
                  />
                </div>
              </Grid>
              <Grid item xs={6} className="mt-50">
                <div className="small-text">About Us</div>
                <div className="text">
                  Greetings From Our Home Interior Design Firm
                </div>
                <div className="font-18 color-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore aliqua.
                </div>
                <div className="row mt-30">
                  <NewReleases sx={{ fontSize: 35, color: "#d15b3e" }} />
                  <p className="font-21 ml-10 font-bolder">
                    {" "}
                    45 + Winning Awards
                  </p>
                </div>
                <p className="color-gray ml-50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className="row mt-30">
                  <CalendarMonth sx={{ fontSize: 35, color: "#d15b3e" }} />
                  <p className="font-21 ml-10 font-bolder">
                    {" "}
                    20 Years Of Experience
                  </p>
                </div>
                <p className="color-gray ml-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <Button variant="contained" className="btn btn-large mt-30">
                  lern more <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default WorkDetail;

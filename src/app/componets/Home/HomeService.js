import React from "react";
import {
  Button,
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  eight,
  four,
  nine,
  quote,
  seal,
  seven,
  ten,
  vedio,
} from "../../../../public/assets";
import Image from "next/image";
import { ArrowForward, CheckCircleOutline } from "@mui/icons-material";

function HomeService() {
  return (
    <div>
      <div className="mt-30">
        <Container>
          <div className="small-text center">What We Can Do</div>
          <div className="text center mt-10">The Services We Offered</div>
          <Grid container spacing={4} className="mt-20">
            <Grid item xs={4}>
              <div className="sercive">
                <div className="center">
                  <Image src={Home} alt="Logo" width={40} height={40} />
                </div>
                <p className="s-heading color-white" style={{ marginTop: 10 }}>
                  Interior Decoration
                </p>
                <h6
                  className="color-white font-18 "
                  style={{ fontWeight: 400, marginTop: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </h6>
                <div className="center">
                  <Button
                    variant="contained"
                    className="btn btn-light mt-30 center"
                  >
                    lern more <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="sercive-l">
                <div className="center">
                  <Image src={Home} alt="Logo" width={40} height={40} />
                </div>
                <p className="s-heading" style={{ marginTop: 10 }}>
                  Interior Decoration
                </p>
                <h6
                  className="font-18 "
                  style={{ fontWeight: 400, marginTop: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </h6>
                <div className="center">
                  <Button
                    variant="contained"
                    className="btn btn-light mt-30 center"
                  >
                    lern more <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="sercive-l">
                <div className="center">
                  <Image src={Home} alt="Logo" width={40} height={40} />
                </div>
                <p className="s-heading " style={{ marginTop: 10 }}>
                  Interior Decoration
                </p>
                <h6
                  className="font-18 "
                  style={{ fontWeight: 400, marginTop: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </h6>
                <div className="center">
                  <Button
                    variant="contained"
                    className="btn btn-light mt-30 center"
                  >
                    lern more <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="small-text mt-30 center" style={{ color: "#000" }}>
            Discover All Service
            <span
              style={{ color: "#d15b3e", marginLeft: 10 }}
              className="small-text center"
            >
              Our Services <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
            </span>
          </div>
        </Container>
        <div className="mt-70 bg-work">
          <Container>
            <Grid container spacing={2} className="mt-20">
              <Grid item xs={8}>
                <div className="small-text color-white">Why Choice Us</div>
                <div className="text color-white mt-20">
                  We Provide The Greatest Work Outcomes For Your Home & Services
                </div>
                <Grid container spacing={2} className="mt-20">
                  <Grid item xs={6}>
                    <Image src={vedio} alt="Logo" width={376} height={300} />
                  </Grid>
                  <Grid item xs={6} className="mt-20">
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Image alt="seal" src={seal} />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary="Lorem Lorem"
                        style={{
                          color: "white",
                          fontSize: 21,
                          fontWeight: 500,
                        }}
                        secondary={
                          <div className="color-white font-18 ">
                            Lorem ipsum dolor sit amet
                          </div>
                        }
                      />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Image alt="seal" src={seal} />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary="Lorem Lorem"
                        style={{
                          color: "white",
                          fontSize: 21,
                          fontWeight: 500,
                        }}
                        secondary={
                          <div className="color-white font-18 ">
                            Lorem ipsum dolor sit amet
                          </div>
                        }
                      />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Image alt="seal" src={seal} />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary="Lorem Lorem"
                        style={{
                          color: "white",
                          fontSize: 21,
                          fontWeight: 500,
                        }}
                        secondary={
                          <div className="color-white font-18 ">
                            Lorem ipsum dolor sit amet
                          </div>
                        }
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={4}>
                <div className="work-l">
                  <Image src={quote} alt="Logo" width={40} height={40} />
                  <div className="work-italic">
                    “ Lorem ipsum dolor sit amet consectetur elit. “
                  </div>
                  <div className="font-18 color-white mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  {[2, 4, 6, 5]?.map(() => {
                    return (
                      <ListItemButton className="color-white">
                        <ListItemIcon>
                          <CheckCircleOutline sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Lorem lorem" disableTypography />
                      </ListItemButton>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <section>
        <Container>
          <div className="mt-70">
            <div className="small-text center">Discover Work</div>
            <div className="text center">Our Current Projects</div>
            <Grid container spacing={12}>
              <Grid item xs={5.1}>
                <Image src={ten} alt="Logo" height={300} width={500} />
              </Grid>
              <Grid item xs={3}>
                <Image src={nine} alt="Logo" height={300} width={280} />
              </Grid>
              <Grid item xs={3}>
                <Image src={eight} alt="Logo" height={300} width={290} />
              </Grid>
            </Grid>
            <div className="mt-10">
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <Image src={seven} alt="Logo" height={300} width={370} />
                </Grid>
                <Grid item xs={4}>
                  <Image src={four} alt="Logo" height={300} width={370} />
                </Grid>
                <Grid item xs={4}>
                  <Image src={seven} alt="Logo" height={300} width={370} />
                </Grid>
              </Grid>
            </div>
          </div>
          <div
            className="small-text mt-30 center"
            style={{ color: "#000", marginBottom: 50 }}
          >
            Discover All Work
            <span
              style={{ color: "#d15b3e", marginLeft: 10 }}
              className="small-text center"
            >
              Our Services <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
            </span>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HomeService;

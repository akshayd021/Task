import { ArrowForward, Star } from "@mui/icons-material";
import {
  Button,
  Card,
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { backgrond, man, seven, ten, } from "../../../../public/assets";
import Footer from "./Footer";

function Reviews() {
  return (
    <div>
      <div className="reviews">
        <Container>
          <div className="small-text">WHat They Says</div>
          <div className="space-bw">
            <div className="text">Greatest Client Reviews</div>
            <span
              style={{ color: "#d15b3e", marginLeft: 10 }}
              className="small-text center"
            >
              See All REviews <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
            </span>
          </div>

          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Image src={ten} alt="Logo" height={350} width={565} />
            </Grid>
            <Grid item xs={4} style={{ margin: "auto" }}>
              <div className="shedow ">
                <div className="star">
                  {[1, 3, 4, 5, 5]?.map(() => {
                    return <Star sx={{ color: "#F3A734" }} />;
                  })}
                </div>
                <div className="s-text">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                  do eiusmod tempor “
                </div>
                <div className="list">
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Image
                        alt="Remy Sharp"
                        src={man}
                        width={50}
                        height={50}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Mr. Lorem lorem"
                      className="primary"
                      secondary="Company name"
                      secondaryTypographyProps={{
                        className: "small-text ml-10",
                      }}
                    />
                  </ListItem>
                </div>
              </div>
            </Grid>
            <Grid item xs={4} style={{ margin: "auto" }}>
              <div className="shedow ">
                <div className="star">
                  {[1, 3, 4, 5, 5]?.map(() => {
                    return <Star sx={{ color: "#F3A734" }} />;
                  })}
                </div>
                <div className="s-text">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                  do eiusmod tempor “
                </div>
                <div className="list">
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Image
                        alt="Remy Sharp"
                        src={man}
                        width={50}
                        height={50}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Mr. Lorem lorem"
                      className="primary"
                      secondary="Company name"
                      secondaryTypographyProps={{
                        className: "small-text ml-10",
                      }}
                    />
                  </ListItem>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <div className="bg-image mt-50">
          <div className="bg-text">
            Let's Redesign Your Interior Design Right Now
          </div>
          <div className="font-18 color-white center font-normal mt-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="center mt-30">
            <Button variant="contained" className="btn btn-large">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
      <section>
        <div className="mt-50 bg-l">
          <Container>
            <div className="small-text" style={{ paddingTop: 50 }}>
              Read Our Blog
            </div>
            <div className="space-bw">
              <div className="text">Blog Post & Latest News</div>
              <span
                style={{ color: "#d15b3e", marginLeft: 10 }}
                className="small-text center"
              >
                See All Blog <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
              </span>
            </div>
            <Grid container spacing={8}>
              {[1, 2, 4].map((index) => (
                <Grid item xs={4} key={index}>
                  <Card>
                    <div className="c-image br-30">
                      <Image src={seven} alt="card" height={250} width={350} />
                    </div>
                    <div className="card">
                      <div className="btn-main text-center">
                        <Button variant="contained" className="btn btn-larger">
                          Genrel
                        </Button>
                        <Button variant="contained" className="btn btn-larger">
                          Design
                        </Button>
                      </div>
                      <div className="c-title mt-10" style={{ margin: "auto" }}>
                        Tips & Tricks Get Best Interior Design
                      </div>
                      <div className="font-18 color-gray mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do
                      </div>
                      <span
                        style={{ color: "#d15b3e" }}
                        className="small-text mt-10"
                      >
                        See All Blog
                        <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
                      </span>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </section>
      <section>
       <Footer />
      </section>
    </div>
  );
}

export default Reviews;

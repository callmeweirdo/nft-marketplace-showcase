import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import assets from "../public/assets";
import css from "../styles/Global";

// ? components import
import Button from "./Button";

const SectionWrapper = ({ description, banner, title, showBtn, mockupImg, reverse }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
      className={`${banner}`}
    >
      <Container
        maxWidth="lg"
        maxHeight="lg"
        sx={
          {
          }
        }
      >
        <Box>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: ` ${reverse ?  "row-reverse"  : "row" }`
            }}
          >
            <Grid item sm={12} lg={5} sx={{ textAlign: "left", color: `${reverse ? "black" : "white"}`
           }}>
              <Box sx={{ p: { sm: 5 } }}>
                <Typography sx={{ font: "bold" }} variant="h3">
                  {title}
                </Typography>
                <Typography my={3}>
                  {description}
                </Typography>
                {showBtn && (
                  <Button
                    assetUrl={assets.expo}
                    link="deployed nft marketplace rn "
                  />
                )}
              </Box>
            </Grid>

            <Grid
              item
              sm={12}
              md={7}
              sx={{
                height: "70vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Container maxWidth="lg" maxHeight="lg" sx={{}}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src={mockupImg} alt="mockup" style={styleSheet.img} />
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const styleSheet = {
  img: {
    width: "100%",
    height: "100%",
  },
};

export default SectionWrapper;

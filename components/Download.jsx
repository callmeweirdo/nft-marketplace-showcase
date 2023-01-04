import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import assets from "../public/assets";

const Download = () => {
  return (
    <Box my={5} sx={{ textAlign: "center", height: "100vh" }}>
      <Container maxWidth="lg">
        <Box>
          <Typography my={2} sx={{ fontWeight: "bold" }} variant="h3">
            Download the Source Code
          </Typography>
          <Typography my={2}>Get the full source code on Github</Typography>
          <Button variant="contained" sx={{ p: 2, fontWeight: "bold" }}>
            Soure Code
          </Button>
        </Box>

        <Box
          sx={{ position: "relative", height: "86vh" }}
        >
          <Image
            // component="img"
            src={assets.scene}
            alt="download img"
            fill
            style={styles.img}
          />
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  img: {
    position: "absolute",
    width: "100%",
    heitgh: "100%"
  }
}

export default Download;

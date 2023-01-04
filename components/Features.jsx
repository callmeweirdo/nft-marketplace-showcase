import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturesCard from "./FeaturesCard";

// ? styles import
import assets from "../public/assets";
import styles from "../styles/Global";

const Features = () => {
  return (
    <Box className={`  banner03`} p={10} sx={{}}>
      <Box sx={{ textAlign: "center", color: "white" }}>
        <Typography variant="h2">Technologies</Typography>
        <Typography variant="body1">
          ProfNet has been developed using a Cross Plartform Technology, React
          Native
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} my={5} >
        <FeaturesCard  iconUrl={assets.react} iconText="Reat Native" />
        <FeaturesCard  iconUrl={assets.javascript} iconText="JavaScript" />
      </Box>
    </Box>
  );
};

export default Features;

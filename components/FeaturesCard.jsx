import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

const FeaturesCard = ({ iconUrl, iconText }) => {
  return (
    <Box mx={2}  sx={{ display: "flex", textAlign: "center" }}>
      <Box component={Paper} p={3} >
        <Image src={iconUrl} alt="tech photo" style={styles.img} />
        <Typography>{iconText}</Typography>
      </Box>
    </Box>
  );
};

const styles = {
  img: {
    width: "100px",
    height: "100px",
  },
};

export default FeaturesCard;

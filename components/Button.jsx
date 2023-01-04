import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Button = ({ assetUrl, link }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        background: "black",
        width: "140px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
      p={2}
      onClick={() => window.open(link, "_blank")}
    >
      <Image alt="expo downloadBtn" src={assetUrl} width="10" height="10" />
      <Box>
        <Typography variant="body2">View it on</Typography>
        <Typography sx={{ font: "bold" }} variant="body1">
          Expo Store
        </Typography>
      </Box>
    </Box>
  );
};

export default Button;

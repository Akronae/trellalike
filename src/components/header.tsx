"use client";

import { Box, styled } from "@mui/material";
import Image from "next/image";

export function Header() {
  return (
    <Box
      display={"flex"}
      flex={1}
      height={40}
      sx={{ backgroundColor: "secondary.dark" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Logo src={"/logo.png"} alt={"logo"} priority width={80} height={30} />
    </Box>
  );
}

const Logo = styled(Image)`
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

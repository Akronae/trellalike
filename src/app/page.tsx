"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { HomeProps } from "@/components/home";
import dynamic from "next/dynamic";

const NoSSR = dynamic<HomeProps>(
  () => import("@/components/home").then((x) => x.Home),
  {
    ssr: false,
    loading: () => (
      <Box
        position={"fixed"}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CircularProgress color="secondary" />
      </Box>
    ),
  }
);

export default function Index() {
  return <NoSSR />;
}

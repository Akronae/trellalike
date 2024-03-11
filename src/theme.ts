"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#838c91" },
    secondary: {
      main: "#222222",
      dark: "#111111",
    },
    success: {
      main: "#5aac44",
      light: "#61bd4f",
    },
    text: {
      primary: "#313131",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "3px",
          textTransform: "none",
          fontFamily: "Arial",
          fontWeight: 400,
          textAlign: "start",
          ":hover": { boxShadow: "none" },
        },
      },
      variants: [
        {
          props: { variant: "contained", size: "small" },
          style: {
            height: "32px",
            lineHeight: "32px",
            display: "block",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "1px",
            paddingBottom: "1px",
            fontSize: "14px",
          },
        },
        {
          props: { color: "success", variant: "contained" },
          style: {
            backgroundColor: "success.main",
            color: "white",
            "&:hover": { backgroundColor: "#61bd4f" },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            color: "#616161",
            backgroundColor: "#eaecf0",
            ":hover": { backgroundColor: "#e2e4e9" },
          },
        },
        {
          props: { color: "secondary", variant: "contained" },
          style: {
            color: "#313131",
          },
        },
        {
          props: { size: "medium" },
          style: {
            height: "30px",
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { size: "small" },
          style: {
            width: "32px",
            height: "32px",
            borderRadius: "3px",
            ":hover": { backgroundColor: "#091e4221" },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
    h5: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "32px",
      margin: 0,
      paddingLeft: "12px",
      alignItems: "center",
      display: "flex",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "20px",
      height: "33px",
      margin: 0,
      alignItems: "center",
      display: "flex",
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "26px",
      margin: 0,
      alignItems: "center",
      display: "flex",
    },
  },
});

export default theme;

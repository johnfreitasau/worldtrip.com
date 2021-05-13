import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: "#1D1D1D",

    highlight: "#FFBA08",

    darkheading: "#47585B",
    darktext: "#47585B",
    darkinfo: "#999",

    lightheading: "#F5F8FA",
    lighttext: "#F5F8FA",
    lightinfo: "#DADADA",

    black: "#000",
    white: "#FFF",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "darktext",
      },
    },
  },
});

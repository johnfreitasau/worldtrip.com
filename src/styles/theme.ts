import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    grey: {
      "500": "#47585B",
      "400": "#999",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
    yellow: {
      "500": "#FFBA08",
    },
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
        bg: "gray.50",
        color: "gray.500",
      },
    },
  },
});

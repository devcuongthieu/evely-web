import type { Theme } from "@mui/material";
import { createTheme } from "@mui/material";
import { Be_Vietnam_Pro } from "next/font/google";
import { base } from "./colors";

export const beVnPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

declare module "@mui/material" {
  //add color
  interface Palette {
    base: typeof base;
  }

  interface PaletteOptions {
    base: typeof base;
  }
}

const defaultTheme: Theme = createTheme({
  palette: {
    base,
  },
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: "normal",
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: "normal",
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "normal",
    },
    h4: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "normal",
    },
    body1: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "normal",
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "normal",
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "normal",
    },
    caption: {
      fontSize: 10,
      fontWeight: 400,
      lineHeight: "normal",
    },
    button: {
      fontFamily: ["Noto Sans JP", "sans-serif"].join(", "),
    },
    fontFamily: beVnPro.style.fontFamily,
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: base.background,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 400,
          fontSize: 14,
          boxShadow: "none",
          padding: "10px 14px 11px 14px",
        },
        contained: {
          color: base.white,
          fontSize: 20,
          backgroundColor: base.red,
          "&:hover": {
            backgroundColor: base.red,
            boxShadow: "none",
          },
          "&:focus": {
            backgroundColor: base.red,
          },
        },
        outlined: {
          fontSize: 20,
          backgroundColor: base.white,
          border: `2px solid ${base.gray}`,
          color: base.black,
          padding: "8px 14px 9px 14px",
          "&:hover": {
            backgroundColor: base.white,
            border: `2px solid ${base.gray}`,
            boxShadow: "none",
          },
          "&:focus": {
            backgroundColor: base.white,
          },
        },
        text: {
          color: base.white,
          backgroundColor: base.primary,
          padding: "6px 14px",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: base.primary,
            boxShadow: "none",
          },
          "&:focus": {
            backgroundColor: base.primary,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: base.textBlack,
          "& input::placeholder": {
            fontSize: 16,
          },
        },
      },
    },
  },
});

defaultTheme.shadows[1] = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";

export { defaultTheme };

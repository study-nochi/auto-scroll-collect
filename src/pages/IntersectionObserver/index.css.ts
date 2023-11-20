import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
  position: "absolute",
  textAlign: "center",
  color: "#333",
});

export const button = style({
  padding: "5px 20px",
  margin: "10px",
  cursor: "pointer",
});

globalStyle(`${container} h1`, {
  textTransform: "uppercase",
  letterSpacing: "4px",
  color: "#333",
  margin: "20px 0",
});

globalStyle(`@keyframes scale`, {
  textDecoration: "none",
  color: "chocolate",
});

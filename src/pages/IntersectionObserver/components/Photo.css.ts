import { style, globalStyle } from "@vanilla-extract/css";

export const photosStyles = style({
  width: "100%",
  maxWidth: "800px",
  height: "100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px auto",
  overflow: "hidden",
  border: "2px solid #ddd",
  padding: "10px",
  borderRadius: "5px",
  animation: "scale 0.5s ease-in-out",
});

globalStyle(`${photosStyles} img`, {
  width: "100%",
  display: "block",
  maxWidth: "150px",
  height: "100%",
  objectFit: "cover",
});

globalStyle(`${photosStyles} p`, {
  textTransform: "capitalize",
  letterSpacing: "2px",
});

globalStyle(`${photosStyles} span`, {
  color: "chocolate",
  margin: "0 10px",
});
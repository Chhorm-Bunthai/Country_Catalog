import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

function Loading() {
  return (
    <div style={centerStyle}>
      <h1>Loading...</h1>
      <CircularProgress color="secondary" variant="indeterminate" />
    </div>
  );
}

export default Loading;

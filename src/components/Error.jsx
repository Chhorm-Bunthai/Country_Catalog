import React from "react";

function Error({ error }) {
  return (
    <>
      <h1>{error.data.message}!</h1>
    </>
  );
}

export default Error;

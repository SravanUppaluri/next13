import React from "react";
import Router from "next/router";
import "../../app/globals.css";

function BackButton() {
  return <button onClick={() => Router.back()}> ⬅️ Back</button>;
}

export default BackButton;

import React from "react";
import Page from "./page";
import { useParams } from "next/navigation";

function index() {
  const id = useParams();
  console.log(id);
  return <div>index </div>;
}

export default index;

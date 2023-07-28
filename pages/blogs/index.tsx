import Link from "next/link";
import "../../app/globals.css";
import React from "react";
import Layout from "./layout";

function index() {
  return (
    <Layout>
      <div className="text-center text-3xl font-bold p-12">
        <p>
          This is the default blogs layout that can / will be written in the
          index.tsx file{" "}
        </p>
        <div className="text-purple-500 pt-12">
          <Link href="/blogs/allBlogs">go the all blogs page</Link>
        </div>
        <br />
        <div className="text-green-500 p-12">
          <Link href="/">This will take you to home page</Link>
        </div>
      </div>
    </Layout>
  );
}

export default index;
